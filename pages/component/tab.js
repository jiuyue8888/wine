Component({
    data: {
        curr: 0,
        nameList: [
            {
                name: '首页',
                img:'../../images/icon2.png',
                imgHover:'../../images/icon1h.png',
                url: '../../pages/index/index'
            },
            {
                name: '切换',
                img:'../../images/icon2.png',
                imgHover:'../../images/icon1h.png',
                url: '../../pages/index/index'
            },
            {
                name: '我的',
                img:'../../images/icon3.png',
                imgHover:'../../images/icon1h.png',
                url: '../../pages/my/my'
            }
        ]
    },
    methods: {
        show: function (curr) {
            this.setData({
                curr:curr
            })
        }
    }
})