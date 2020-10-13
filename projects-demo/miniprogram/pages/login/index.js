// miniprogram/pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    userInfo: null
  },
  setShowDialog() {
    if (!this.data.userInfo) {
      this.setData({
        showDialog: true
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    getApp().globalData.userInfo=e.detail.userInfo
    this.setData({
      userInfo:e.detail.userInfo
    })
  },
  logout(){
   console.log('sdfsd')
   this.setData({
     userInfo:null
   })
   getApp().globalData.userInfo=null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('用户信息==>', getApp().globalData.userInfo)
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo
      })
    }else{
      wx.getSetting({
        complete: (res) => {
          console.log(res)
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              complete: (res) => {
                this.setData({
                  userInfo:res.userInfo
                })
                getApp().globalData.userInfo=res.userInfo
              },
            })
          }
        },
      })
    }

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