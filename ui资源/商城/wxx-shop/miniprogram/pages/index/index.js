const db = wx.cloud.database();
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerImg: [],
        shopType: {},
        hotSale: {},
        tabbar: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        app.changeTabBar();
        this.getData();
    },
    getData: function () {
        wx.cloud.callFunction({
            name:'index'
        }).then(res=>{
            console.log(res)
            if (res.result.data.length) {
                this.setData({
                    bannerImg: res.result.data[0].banner,
                    shopType: res.result.data[1].shopType?res.result.data[1].shopType:[],
                    // hotSale: res.result.data[2].hotSale?res.result.data[2].hotSale:[]
                })
            }
        })

    },
    // 分类商品
    onShopListTap: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../shop-classify/shop-classify?id=' + id,
        })
    },
    // 热卖商品详情
    onShopDetailTap: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../shop-detail/shop-detail?id=' + id,
        })
    },
    // 底部导航栏跳转
    navChange: function (e) {
        var url = e.currentTarget.dataset.cur;
        wx.navigateTo({
            url: '../' + url + '/' + url
        });
    }
})