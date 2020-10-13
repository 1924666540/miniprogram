// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const Sms=require('qcloudsms_js')
// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve,reject)=> {
  let appid ='1400305000'
  let appkey ='66d2e4ba5c5c2c2a7fd804000af41d05'
  let templateid =event.templateid
	let smsSign='乐健园'
	let sender=Sms(appid,appkey).SmsSingleSender()
	sender.sendWithParam(
		86,
		event.phone,
		templateid,
		event.code,
		smsSign,
		'','',
		(err,res,resData)=>{
			if(err){
				reject({err})
			} else {
				resolve({
					res:res.req,
					resData
				})
			}
		}
	)	
})