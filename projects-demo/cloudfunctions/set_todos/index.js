// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.type) {
    case 'add': {
      return await cloud.database().collection('todos').add({
        data: {
          Msg: event.Msg,
          finished: event.finished
        }
      })
    }
    case 'get': {
      return await cloud.database().collection('todos').get()
    }
  }



}