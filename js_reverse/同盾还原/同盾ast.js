const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
window=global;
var fs =require("fs");
const file_in=__dirname+'\\input.js';
const file_out=__dirname+'\\output.js';
var fs =require("fs");
let js = String(fs.readFileSync(file_in,{encodeing:'utf-8'}));
let ast = parser.parse(js);

function writeFile(code) {
    console.log("Write start\\n");
    fs.writeFile(file_out, code, function (err) {
        if (err) {
            return console.error(err);
        }
    });
    console.log("Write finish\\n");
}
function reload(){
    js = generator.default(ast).code;
    ast = parser.parse(js);
}

const visitor1={
    VariableDeclarator(path){
        const {id,init}=path.node;
        if(!types.isLiteral(init))return;
        const binding=path.scope.getBinding(id.name);
        if(binding.constantViolations.length===0)
            {
            for(const refer_path of binding.referencePaths)
                {
                refer_path.replaceInline(init);
                }
            }
    }
}
const visitor2={
    FunctionDeclaration(path){
        let node=path.node;
        let {name}=node.id;
        let value;
        if(node.params.length!=2)return;
        let {body}=node.body;
        if(body.length!==3)return;
        if(!(types.isVariableDeclaration(body[0]) && types.isForStatement(body[1])))return;
        code=path.toString();
        traverse.default(ast,{
            CallExpression(_path){
                let _node=_path.node;
                let _name=_node.callee.name;
                if(_name==name && _node.arguments.length==2){
                    try{
                        eval(code+";value="+_path.toString())
                    }catch(e){

                    }
                    if(value==undefined)return;
                    _path.replaceWith(types.stringLiteral(value));
                    
                }
            }
        })
    }
}
const visitor3={
    "UnaryExpression|BinaryExpression|CallExpression|ConditionalExpression":{
        enter:function(path){
            let{value}=path.evaluate();
            switch(typeof value){
                case 'boolean':
                    path.replaceWith(types.booleanLiteral(value));
                    break;
                case 'number':
                    path.replaceWith(types.NumericLiteral(value));
                    break;
                case 'string':
                    path.replaceWith(types.stringLiteral(value));
                    break;
                default:
                    break;
            }
        }

    }
}
const visitor4={
    VariableDeclarator(path){
        let node=path.node;
        let scope=path.scope;
        let keys=['window','navigator','document'];
        let init=node.init;
        let name=node.id.name;
        if(types.isIdentifier(init)){
            scope.traverse(scope.block,{
                MemberExpression(_path){
                    let _node=_path.node;
                    let _name=_node.object.name;
                    if(_name==name){
                        _node.object=init;
                    }
                }
            })
        }
        if(types.isMemberExpression(init)){
            let object=init.object;
            let property=init.property;
            let oname=object.name;
            if(!types.isIdentifier(object))return;
            if(keys.indexOf(oname)==-1)return;
            if(!types.isLiteral(property))return;
            scope.traverse(scope.block,{
                MemberExpression(_path){
                    let _node=_path.node;
                    let _name=_node.object.name;
                    if(_name==name){
                        _node.object=init;
                    }
                }
            })
        }
    }
}

traverse.default(ast,visitor1);
reload()
traverse.default(ast,visitor2);
reload()
traverse.default(ast,visitor3);
traverse.default(ast,visitor4);
writeFile(generator.default(ast).code);
