<template>
    <div class="page">
        <div class="banner">
            <img
                src="//public.danke.com.cn/public-20180607-Fu8o7V2uYxku5XwsGNrMnzg-kykb"
                alt="banner">
            <p>不要再做忙碌的房东</p>
            <p>经常找租客，找维修，找增值途径...</p>
        </div>
        <div class="ask">
            <a href="#">委托热线</a>
            <a href="#">立即委托</a>
        </div>
        <div class="main1">
            <h3>简单4步 做省心房东</h3>
            <p>NEEDS FOUR SIMPLE STEPS</p>
            <span></span>
        </div>
        <div class="main2">
            <dl v-for="item in list">
                <dt><img
                        :src="item.img"></dt>
                <dd>
                    <p>{{item.num}}</p>
                    <p>{{item.text}}</p>
                </dd>
                <span></span>
            </dl>
        </div>
        <div class="main3">
            <h3>业主收益指南</h3>
            <p>REVENUE GUIDE</p>
            <span></span>
        </div>
        <div class="tag">

            <div class="swiper-container" ref="swiperContainer"
                style="height:100%;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in
                        banners"
                        :key="index">
                        <div class="guide-box">
                            <h3>{{item.t1}}</h3>
                            <p>{{item.t2}}</p>
                            <p>{{item.t3}}</p>
                            <p>{{item.t4}}</p>
                        </div>
                    </div>

                </div>
                <div class="swiper-pagination"></div>

            </div>
        </div>
        <div class="main4">
            <h3>了解蛋壳</h3>
            <p>LEARN ABOUT DANKE</p>
            <span></span>
        </div>
        <div class="video-wrap">
            <div class="video-play-m">
                <div class="video-list"><video id="my_video1" class="my-video"
                        controls="controls" preload="auto" poster=""
                        src="https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4"
                        type="video/mp4" webkit-playsinline="true"
                        playsinline=""></video></div>
                <div class="init-play-layer">
                    <div class="init-play-btn"></div>
                </div>
            </div>
            <div class="video-tab-m clearfix">
                <div class="video-tab-inner clearfix">
                    <div class="video-item first-video">
                        <div class="video-item-inner">
                            <div class="play-state-layer" style="display:
                                block;"></div>
                        </div>
                        <p class="video-tip">蛋壳公寓 第一集</p>
                    </div>
                    <div class="video-item second-video">
                        <div class="video-item-inner">
                            <div class="play-state-layer" style="display:
                                none;"></div>
                        </div>
                        <p class="video-tip">蛋壳公寓 第二集</p>
                    </div>
                    <div class="video-item third-video">
                        <div class="video-item-inner">
                            <div class="play-state-layer" style="display:
                                none;"></div>
                        </div>
                        <p class="video-tip">蛋壳公寓 第三集</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="weituo">
            <a href="#">立即委托</a>
            <p>委托热线：400-062-8688</p>
        </div>
        <div class="footer">
            <div
                class="kefu"><p>客服热线：4001-551-551</p>
            </div>
            <div class="f-logo">
                <p>让租房变得简单和快乐</p>
                <span>© 2019 蛋壳公寓 沪ICP备18043153号-1</span>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Join",
        data() {
            return {
                list: [{
                    img: "//public.danke.com.cn/public-20180605-FmJgq0MJG13U68RZgEyM9TK5GP9w",
                    num: "01",
                    text: "意向沟通"
                }, {
                    img: "//public.danke.com.cn/public-20180605-FmJgq0MJG13U68RZgEyM9TK5GP9w",
                    num: "02",
                    text: "实勘测量"
                }, {
                    img: "//public.danke.com.cn/public-20180605-FmJgq0MJG13U68RZgEyM9TK5GP9w",
                    num: "03",
                    text: "合作签约"
                }, {
                    img: "//public.danke.com.cn/public-20180605-FmJgq0MJG13U68RZgEyM9TK5GP9w",
                    num: "04",
                    text: "坐享收益"
                }],
                banners: [{
                    t1: "甩手掌柜",
                    t2: "蛋壳保证与业主签署合同后及时打款。",
                    t3: "在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。",
                    t4: "房屋升级改造，配置全套家具、家电，实现高额增值服务。"
                }, {
                    t1: "省时省心",
                    t2: "蛋壳提供“一站式全程托管”服务。",
                    t3: "在租期内出现的任何生活、物业问题，将由蛋壳管家进行解决，让您省时省心。",
                    t4: "蛋壳将至少每两周对公共区域进行保洁和物品检查，将最大程度的维护房屋安全和保障。"
                }, {
                    t1: "安全无忧",
                    t2: "出租人群严格筛选，高素质租户。",
                    t3: "租约结束后，蛋壳会为您的房子做深度保洁。",
                    t4: ""
                }]
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                }

            })

        },
        updated() {

            new Swiper(this.$refs.swiperContainer, {
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        },

    }
</script>
<style scoped>
    .page {
        width: 100%;
        height: auto;
    }
    
    .banner {
        width: 100%;
        height: 500px;
        margin-bottom: 40px;
        padding-top: 75px;
        background: url(//public.danke.com.cn/public-20180605-FgqSSvUqi8EEJIpXlLANjzR-L5OC) no-repeat center center;
        background-size: 100%;
        text-align: center;
        box-sizing: border-box;
    }
    
    .banner img {
        margin: 0 auto 42px;
    }
    
    .banner p {
        color: #fff;
        font-size: 24px;
        line-height: 30px;
    }
    
    .ask {
        display: flex;
        justify-content: space-around;
        padding: 0 50px;
    }
    
    .ask a {
        display: inline-block;
        width: 295px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        border-radius: 6px;
        font-size: 32px;
    }
    
    .ask a:first-child {
        color: #3dbdc7;
        border: 1px solid #3dbdc7;
    }
    
    .ask a:last-child {
        background: #3dbdc7;
        color: #fff;
    }
    
    .main1 {
        margin-top: 72px;
        position: relative;
        text-align: center;
    }
    
    .main1 h3,
    .main3 h3,
    .main4 h3 {
        margin-bottom: 12px;
        font-size: 34px;
        color: #7e7d7e;
        font-weight: 500;
    }
    
    .main1 p,
    .main3 p,
    .main4 p {
        font-family: PingFangSC-Ultralight;
        font-size: 26px;
        color: #999;
        letter-spacing: 3px;
        line-height: 28px;
        opacity: .32;
    }
    
    .main1 span,
    .main3 span,
    .main4 span {
        display: block;
        content: "";
        position: absolute;
        bottom: -15px;
        left: 353px;
        width: 44px;
        height: 4px;
        border-radius: 50px;
        background: #3dbdc7;
    }
    
    .main2 {
        margin-top: 73px;
        margin-bottom: 82px;
        padding: 0 5%;
        display: flex;
        justify-content: space-around;
    }
    
    .main2 dl {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        text-align: left;
        color: #333;
        font-weight: 400;
    }
    
    .main2 dl dt {
        width: 72px;
        height: 72px;
        margin: 0 auto 36px;
    }
    
    .main2 dl dd p {
        margin-bottom: 20px;
        line-height: 31px;
        text-align: center;
        font-size: 24px;
        color: #7e7d7e;
    }
    
    .main2 dl span {
        content: "";
        position: absolute;
        bottom: 82px;
        left: 76px;
        width: 110px;
        border: 1px solid #dedede;
        opacity: .5;
    }
    
    .main3 {
        position: relative;
        text-align: center;
        margin-bottom: 45px;
    }
    
    .tag {
        margin: 0 auto;
        width: 100%;
        padding-top: 40px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        height: 600px;
        background: url(//public.danke.com.cn/public-20180606-FkxZgfTiMNCAcWlJFoLJqy5g-TxM) no-repeat center center;
        background-size: 100%;
    }
    
    .guide-box {
        width: 672px;
        height: 480px;
        left: 39px;
        margin-top: 40px;
        margin-left: 8px;
        padding: 0 58px;
        background: rgba(255, 255, 255, .85);
        color: #7e7d7e;
        box-sizing: border-box;
        position: absolute;
    }
    
    .guide-box h3 {
        display: flex;
        justify-content: center;
        margin-top: 55px;
        margin-bottom: 40px;
        font-size: 30px;
        letter-spacing: 3px;
        line-height: 30px;
        text-align: center;
        font-weight: 500;
        color: #7e7d7e;
    }
    
    .guide-box p {
        font-size: 24px;
        text-align: center;
        line-height: 44px;
        letter-spacing: 3px;
        color: #7e7d7e;
    }
    
    .main4 {
        margin-top: 92px;
        position: relative;
        text-align: center;
    }
    
    .video-wrap {
        width: 672px;
        margin: 45px auto 0;
    }
    
    .video-play-m {
        position: relative;
        margin-bottom: 40px;
        background: #fff;
    }
    
    .video-list {
        background: url(//public.danke.com.cn/public-20180606-Fu-8mEjulcv_rPp29Jd3MtLnQpQ3) no-repeat center center;
    }
    
    .my-video {
        width: 100%;
        height: 378px;
        border: none;
    }
    
    video {
        display: inline-block;
        vertical-align: baseline;
    }
    
    .init-play-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(//public.danke.com.cn/public-20180606-Fu-8mEjulcv_rPp29Jd3MtLnQpQ3) no-repeat center center;
    }
    
    .init-play-btn {
        position: absolute;
        bottom: 50px;
        left: 30px;
        width: 66px;
        height: 66px;
        background: url(//public.danke.com.cn/public-20180606-Ft3xtMJwt6XsRpzXhQC5dWd4zZxq) no-repeat center center;
        cursor: pointer;
    }
    
    .video-tab-m {
        overflow-y: hidden;
        width: 100%;
        height: 198px;
        background: #f8f8f8;
    }
    
    .clearfix {
        display: block;
    }
    
    .video-tab-inner {
        position: relative;
        top: 3px;
        display: -webkit-box;
        overflow-x: scroll;
    }
    
    .video-item {
        width: 224px;
        height: 200px;
        margin-right: 20px;
    }
    
    .first-video .video-item-inner {
        background: url(//public.danke.com.cn/public-20180606-FhaoTtLyisHLONLJ8w0hji64euWA) no-repeat center;
    }
    
    .video-item-inner {
        height: 126px;
        position: relative;
        cursor: pointer;
    }
    
    .play-state-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #3dbdc7;
        background: rgba(0, 0, 0, .75) url(//public.danke.com.cn/public-20180531-Fv1bDVwS3_XiAnu6pOx2Ukz81uzR) no-repeat center center;
    }
    
    .video-tip {
        height: 32px;
        line-height: 32px;
        padding: 20px 0;
        text-align: center;
        color: #999;
        font-size: 24px;
    }
    
    .second-video .video-item-inner {
        background: url(//public.danke.com.cn/public-20180606-Fi0yYG-Ot5HpB2-Kyee9HWHgkI5W) no-repeat center;
    }
    
    .video-item:last-child {
        margin-right: 0;
    }
    
    .third-video .video-item-inner {
        background: url(//public.danke.com.cn/public-20180606-FrNrhXoitfHELkkAqkzc4_ECrdg4) no-repeat center center;
    }
    
    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    
    .weituo {
        color: #7e7e7e;
        text-align: center;
        margin-top: 50px;
        padding-bottom: 45px;
    }
    
    .weituo a {
        display: block;
        width: 366px;
        height: 88px;
        line-height: 88px;
        margin: 0 auto 33px;
        background: #3dbdc7;
        box-shadow: 0 7px 17px 0 rgba(61, 189, 199, .21);
        text-align: center;
        color: #fff;
        font-size: 32px;
        border-radius: 4px;
    }
    
    .weituo p {
        line-height: 1.2;
        text-align: center;
        color: #7e7d7e;
        font-size: 32px;
        font-weight: 400;
    }
    
    .footer {
        width: 100%;
        height: 411px;
        background: #3f4141;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 120px;
    }
    
    .footer .kefu {
        margin: 30px 32px 0;
        width: 90%;
        color: #fff;
        line-height: 76px;
        text-align: center;
        background: #535656;
        border-radius: 4px;
        font-size: 24px;
    }
    
    .footer .f-logo {
        padding: 90px 0 20px;
        background: url(//public.danke.com.cn/public-20180101-FvKj9OJ_iw6vApf3aktfSGV-1tdQ) no-repeat center 42px;
    }
    
    .footer .f-logo p {
        color: #666;
        text-align: center;
        font-size: 20px;
        line-height: 32px;
    }
    
    .f-logo span {
        text-align: center;
        color: #666;
        font-size: 16px;
        line-height: 28px;
    }
</style>