// pages/storage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qqNum: null,
    oldNum:null
  },
  setNUm(e) {
    console.log(e.detail.value.trim())
    this.setData({
      qqNum: e.detail.value.trim()
    })
  },
  submit() {
    console.log(this.data.qqNum)
    wx.showLoading({
      title: '加载中',
    })
    if(this.data.qqNum){
     
      wx.setStorage({
        key: 'qq',
        data: this.data.qqNum,
        success:res=>{
          wx.hideLoading({
            complete: (res) => {
              wx.showToast({
                title: '缓存成功',
              })
            },
          })
          wx.getStorage({
            key: 'qq',
            success:res=>{
              console.log(res.data)
              this.setData({
                oldNum:res.data
              })
            }
          })
          this.setData({
            qqNum:''
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'qq',
      success:res=>{
        console.log(res.data)
        this.setData({
          oldNum:res.data
        })
      }
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