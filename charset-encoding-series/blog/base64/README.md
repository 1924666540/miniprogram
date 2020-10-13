## 说明

base64相关

JS使用64和Java后台交互时需要注意:

1.JS默认是UTF16编码，所以如果直接编码，出来的结果是UTF-B64编码，后台解析后不一定能识别
2.一般会根据后台得需求(GBK还是UTF8)，会将UTF16转码成对应的编码，然后再进行B64编码，外面再套一层urlEncode(防止+/等关键字出现问题)