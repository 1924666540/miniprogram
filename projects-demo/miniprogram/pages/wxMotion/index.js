// miniprogram/pages/wxMotion/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      complete: (res) => {
        wx.getWeRunData({
          complete: (res) => {
            console.log(res)
            wx.cloud.callFunction({
              name: 'yunRun',
              data: {
                weRunData: wx.cloud.CloudID(res.CloudID), // 这个 CloudID 值到云函数端会被替换
                obj: {
                  shareInfo: wx.cloud.CloudID(res.CloudID), // 非顶层字段的 CloudID 不会被替换，会原样字符串展示
                }
              }
            }).then(res=>{
              console.log('结果==>',res)
            })
          },
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})