const fs = require('fs');
const path = require('path');
const { Script } = require("vm");
const logger = require('../../utils/logger');
const browser = require('../../browser/');
const { jsdomFromText } = require('../../utils/jsdom');

const baseUrl = "https://www.nmpa.gov.cn/datasearch/home-index.html"

const files = {
  html: path.resolve(__dirname, 'output-yjj/makecode_input_html.html'),
  js: path.resolve(__dirname, 'output-yjj/makecode_input_js.js'),
  ts: path.resolve(__dirname, 'output-yjj/makecode_input_ts.json'),
}

function getFile(name) {
  const filepath = files[name];
  if (!filepath) throw new Error(`getFile: ${name}错误`);
  if (!fs.existsSync(filepath)) throw new Error(`文件${filepath}不存在，请使用rs-reverse工具先获取文件`);
  return fs.readFileSync(filepath);
}

function initBrowser(window, cookieJar) {
  window.$_ts = JSON.parse(getFile('ts'));
  window.onbeforeunload = async (url) => {
    const cookies = cookieJar.getCookieStringSync(baseUrl);
    logger.debug('生成cookie：', cookies);
    window.close();
  }
  browser(window, 'chrome');
}

async function loadPages() {
  const htmltext = getFile('html');
  const jstext = getFile('js');
  const [jsdomer, cookieJar] = jsdomFromText({
    url: `${baseUrl}`,
    referrer: `${baseUrl}`,
    contentType: "text/html",
    runScripts: "outside-only",
  })
  const dom = jsdomer(htmltext);
  initBrowser(dom.window, cookieJar);
  new Script(jstext).runInContext(dom.getInternalVMContext());
  // console.log("window", dom.window)
}

loadPages()
