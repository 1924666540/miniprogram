const app = getApp();
Page({
  data: {
    openid: undefined,
    adminOpenid: "oOmqu4pDpN-1db4Ms_U0fjmCfBAw", //管理员openid
    textareaTxt: undefined,
    files: [],
    adminInfo: {
      avatarUrl: "cloud://zhku-01.7a68-zhku-01-1258022644/home/logo1.jpg", //官方账号头像 
      nickName: "仲恺微校园" //官方账号名称
    },
    userInfo: undefined,
  },


  onLoad() {

  },


  deleteImg(e) {
    var that = this
    wx.vibrateShort({

    })
    wx.showModal({
      title: '确认删除',
      content: '',
      cancelText: '取消',
      confirmText: '确认',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          var data = that.data.files
          data.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            files: data
          })
        } else if (res.cancel) {

        }
      }
    })
  },

  getInputValue(e) {
    this.setData({
      textareaTxt: e.detail.value
    })
  },



  formSubmit: function (e) {
    if (!this.data.textareaTxt && this.data.files.length <= 0) {
      wx.showToast({
        title: '提交内容不能都为空',
      })
      return
    }
    wx.showLoading({
      title: '上传中',
    })
    let that = this
    console.log(this.data.files)
    if (that.data.files.length > 0) {
      var tempIds = [];
      for (var i = 0; i < that.data.files.length; i++) {
        const filePath = that.data.files[i]
        var rn = Math.floor(Math.random() * 10000 + 1) //随机数
        var name = Date.parse(new Date()) / 1000; //时间戳
        const cloudPath = 'circle/' + rn + name + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath: cloudPath,
          filePath: filePath,
          success: res => {
            console.log('文件上传成功==>', res)
            tempIds.push(res.fileID)
            console.log('路径地址==>', tempIds)
            wx.cloud.database().collection('circle').add({
              data: {
                content: that.data.textareaTxt,
                imgUrls: tempIds
              }
            }).then(res => {
              wx.reLaunch({
                url: './index',
              })
            })
          }
        })
      }
    } else {
      wx.cloud.database().collection('circle').add({
        data: {
          content: that.data.textareaTxt,
          imgUrls: []
        }
      }).then(res => {
        wx.reLaunch({
          url: './index',
        })
      })
    }
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
    console.log(that.data.files)
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
})