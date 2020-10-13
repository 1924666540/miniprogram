// pages/canvas/index.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const  ctx = wx.createCanvasContext('customCanvas')
    // ctx.setFillStyle('red')
    // ctx.fillRect(0,0,100,100)

    ctx.setFillStyle('#5F6FEE')//文字颜色：默认黑色
    ctx.setFontSize(20)//设置字体大小，默认10
    ctx.fillText("LXT", 20, 20)//绘制文本
    //调用draw()开始绘制

   ctx.save()//保存当前的绘图上下文。
    ctx.beginPath()//开始创建一个路径
    ctx.arc(50, 50, 50, 0, 2 * Math.PI,false)//画一个圆形裁剪区域
    ctx.clip()//裁剪
    ctx.restore()//恢复之前保存的绘图上下文
    ctx.draw()//绘制到canvas
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