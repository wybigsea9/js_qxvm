import hashlib


def get_md5_value(data):
    my_md5 = hashlib.md5()
    my_md5.update(data.encode("utf8"))
    md5_data = my_md5.hexdigest()
    return md5_data


# pip install pycryptodome
# 如果有问题 找到 crypto 这个库，更改为首字母大写 Crypto 即可
import base64
from Crypto.Cipher import AES


# AES
def pkcs7padding(text):
    """
    明文使用PKCS7填充
    最终调用AES加密方法时，传入的是一个byte数组，要求是16的整数倍，因此需要对明文进行处理
    :param text: 待加密内容(明文)
    """
    bs = AES.block_size  # 16
    length = len(text)
    bytes_length = len(bytes(text, encoding='utf-8'))
    # tips：utf-8编码时，英文占1个byte，而中文占3个byte
    padding_size = length if bytes_length == length else bytes_length
    padding = bs - padding_size % bs
    # tips：chr(padding)看与其它语言的约定，有的会使用'\0'
    padding_text = chr(padding) * padding
    return text + padding_text


def pkcs7unpadding(text):
    """
    处理使用PKCS7填充过的数据
    :param text: 解密后的字符串
    """
    length = len(text)
    unpadding = ord(text[length - 1])
    return text[0:length - unpadding]


def encrypt(key, iv, content):
    """
    AES加密
    模式cbc
    填充pkcs7
    :param key: 密钥
    :param iv: 偏移量
    :param content: 加密内容
    """
    key_bytes = bytes(key, encoding='utf-8')
    iv_bytes = bytes(iv, encoding='utf-8')
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
    # 处理明文
    content_padding = pkcs7padding(content)
    # 加密
    encrypt_bytes = cipher.encrypt(bytes(content_padding, encoding='utf-8'))
    # 重新编码
    result = str(base64.b64encode(encrypt_bytes), encoding='utf-8')
    return result


def decrypt(key, iv, content):
    """
    AES解密
    模式cbc
    去填充pkcs7
    :param key: 密钥
    :param iv: 偏移量
    :param content: 加密后的内容
    """
    key_bytes = bytes(key, encoding='utf-8')
    iv_bytes = bytes(iv, encoding='utf-8')
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
    # base64解码
    encrypt_bytes = base64.b64decode(content)
    # 解密
    decrypt_bytes = cipher.decrypt(encrypt_bytes)
    # 重新编码
    result = str(decrypt_bytes, encoding='utf-8')
    # 去除填充内容
    result = pkcs7unpadding(result)
    return result


# DES3
import base64

from Crypto.Cipher import DES3
from Crypto.Util.Padding import pad, unpad


def des3encrypt(plain_text: str, key: str, iv: str) -> str:
    des3 = DES3.new(key=key.encode(), mode=DES3.MODE_CBC, iv=iv.encode())
    encrypted_data = des3.encrypt(pad(plain_text.encode(), DES3.block_size))
    cipher_text = base64.b64encode(encrypted_data).decode()
    return cipher_text


def des3decrypt(cipher_text: str, key: str, iv: str) -> str:
    des3 = DES3.new(key=key.encode(), mode=DES3.MODE_CBC, iv=iv.encode())
    decrypted_data = des3.decrypt(base64.b64decode(cipher_text))
    plain_text = unpad(decrypted_data, DES3.block_size).decode()
    return plain_text


# RSA 按这种形式替换PUBLIC KEY
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
from Crypto.PublicKey import RSA
import base64


def rsa_encrypt(message):
    key = """-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDnOWe/gs033L/2/xR3oi6SLAMPBY5VledUqqH6dbCNOdrGX4xW+1x6NUfvmwpHRBA2C7xWDDvOIldTl0rMtERTDy9homrVqEcW6/TY+dSVFL3e2Yg2sVaehHv7FhmATkgfC2FcXt8Wvm99QpKRSrGKpcFYJwOj2F8hJh+rTG0IPQIDAQAB
    -----END PUBLIC KEY-----
    """
    rsakey = RSA.importKey(key)
    cipher = Cipher_pkcs1_v1_5.new(rsakey)
    cipher_text = base64.b64encode(cipher.encrypt(message.encode('utf-8')))
    return cipher_text.decode('utf-8')
