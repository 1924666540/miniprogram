//云函数入口文件
const cloud = require('wx-server-sdk')
//引入 request- promise用于做网络请求
var rp = require('request-promise');
cloud.init()

//云函数入口函数
exports.main = async (event, context) => {
  return await cloud.callFunction({
    name: 'getAccessToken',
  })
  .then(function (res) {
    let access_token = res.result
    let url = 'http://api.weixin.qq.com/wxa/business/getliveinfo?access_token='+access_token
    let options={
      url:url,
      method:'POST',
      body:{
        "start":0,
        "limit":10
      },
      json:true
    }
    return await rp(url)
      .then(function (res) {
        return res
      })
      .catch(function (err) {
        return '失败'
      });
  })
  .catch(function (err) {
    return err
  })
}