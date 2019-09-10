<template>
  <div class="page">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index" ><img
            :src="item"></div>
      </div>
    </div>
    <div class="title">
      <h1>八里桥 西马庄园 次卧 朝北 A室</h1>
      <em>地铁 八通线</em>
    </div>
    <div class="sign">
      <span>集中供暖</span>
    </div>
    <div class="room-detail-price">
      <div class="room-detail-price-list">
        <label>活动价</label>
        <span>
          1991
          <em>元/月</em>
        </span>
      </div>
      <div class="room-detail-price-list">
        <label>月租金</label>
        <b>2390元/月</b>
      </div>
      <div class="room-detail-price-text-view">付款方式&gt;</div>
      <div class="room-detail-price-hot">
        <label>活动说明</label>
        <div class="room-detail-price-hbox">
          <a
            href="#">
            <span style="background: #ffffff;border: 1px solid
              #fb8302;color:#fb8302">白住2个月</span>
            签约年租，白住2个月！

            <i>详情</i>
          </a>
        </div>
      </div>
    </div>
    <div class="serverphone">
      <a href="#"><em>咨询电话：</em>400-067-8569</a>
    </div>
    <div class="detail-list-box">
      <div class="detail-list">建筑面积：约9㎡（以现场勘察为准）</div>
      <div class="detail-list on">朝向：北</div>
      <div class="detail-list">
        户型：2室1卫
        <b class="methodroom-rent">合</b>
      </div>
      <div class="detail-list on">楼层：1/6层</div>
    </div>
    <div class="room-position">
      <label>
        区域：
        <a href="#" class="room-detail-sq" target="_blank">
          通州区
        </a>
        <a href="#" class="room-detail-sq" target="_blank">八里桥</a>
        <a href="#" class="room-detail-sq" target="_blank">西马庄园</a>
      </label>
      <label>地铁：距八通线八里桥站1150米</label>
      <label>编号：22670-A</label>
      <label>付款：<a href="#" class="instalment">可支持分期月付</a>[不收中介费]</label>
    </div>
    <div class="peizhi">
      <h3>房屋标配</h3>
      <div class="biaopei">
        <p v-for="(item,index) in list"><img
            :src="item.img">
          <span>{{item.text}}</span>
        </p>
      </div>
    </div>
    <div class="go">
      <h3>小区基本信息和出行建议</h3>
      <p>八里桥地铁1200米，万达商场900米</p>
      <p></p>
      <div class="open">展开</div>

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
    <div class="bottom">
      <div class="collect">
        <i><img
            src="//public.danke.com.cn/public-20180704-FpXBdsp700x_lsipKCNH6ZZTiB_7"></i>
        <span>收藏</span>
      </div>
      <div class="ask"><a href="#">电话咨询</a></div>
      <div class="ask1"><a href="#">在线预约</a></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                banners: [],

                list: [{
                    img: "//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                    text: "床"
                }, {
                    img: "//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                    text: "WIFI"
                }, {
                    img: "//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                    text: "洗衣机"
                }, {
                    img: "//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                    text: "空调"
                }, {
                    img: "//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                    text: "智能锁"
                }]
            }
        },
        created() {

            setTimeout(() => {
                this.banners = [
                    "https://public.danke.com.cn/public-20180430-FrO6nfbFXyEpA3CFZVW5c5QlTL1b-roomMobileDetail.jpg",
                    "https://public.danke.com.cn/public-20180430-Fk6JHL3lEjecHup-az2fuRSjYDIS-roomMobileDetail.jpg",
                    "https://public.danke.com.cn/public-20180430-FqNe5fIGdHrhnR2ozdPyb13mf8Qi-roomMobileDetail.jpg",
                    'https://public.danke.com.cn/public-20180430-FohmXx8ARJP9-IEW3P138KID1rHu-roomMobileDetail.jpg',
                    "https://public.danke.com.cn/public-20180430-Fr91l5mdYlZrpdxUXmCCmy6Oe6Px-roomMobileDetail.jpg",

                ]
            }, 2000)
        },

        mounted() {
            new Swiper('.swiper-container', {
                autoplay: true,
                loop: true

            })

        },
        updated() {

            new Swiper(this.$refs.swiperContainer, {
                loop: true,
                autoplay: true
            })
        },
    }
</script>
<style scoped>
    .page {
        width: 100%;
        height: auto;
    }
    
    .swiper-container {
        height: 563px;
    }
    
    .title {
        display: block;
        overflow: hidden;
        margin: 0 0 0 32px;
        padding: 15px 0;
        border-bottom: 1px solid #e4e8eb;
        position: relative;
    }
    
    .title h1 {
        float: left;
        width: 485px;
        line-height: 55px;
        font-size: 38px;
        color: #333;
        font-weight: 400;
    }
    
    .title em {
        position: absolute;
        top: 50%;
        right: 30px;
        margin-top: -19px;
        line-height: 38px;
        font-size: 20px;
        color: #3dbcc6;
        background: #f2fefe;
        padding: 0 20px;
        border-radius: 19px;
        font-style: normal;
    }
    
    .sign {
        display: block;
        overflow: hidden;
        margin: 20px 32px;
    }
    
    .sign span {
        float: left;
        margin: 0 13px 0 0;
        padding: 0 15px;
        line-height: 34px;
        border: 2px solid #efefef;
        font-size: 20px;
        color: #959d9f;
        border-radius: 8px;
    }
    
    .room-detail-price {
        display: block;
        overflow: hidden;
        margin: 0 32px;
    }
    
    .room-detail-price-list {
        float: left;
        width: 315px;
    }
    
    .room-detail-price-list label {
        float: left;
        line-height: 65px;
        width: 100px;
        font-size: 24px;
        color: #999;
    }
    
    .room-detail-price-list span {
        color: #ff7966;
        font-size: 48px;
        font-weight: 700;
    }
    
    .room-detail-price-list span em {
        font-weight: 400;
        font-size: 24px;
        font-style: normal;
    }
    
    .room-detail-price-list:nth-child(2) {
        width: 220px;
    }
    
    .room-detail-price-list:nth-child(2) label {
        width: 75px;
    }
    
    .room-detail-price-list b {
        font-size: 24px;
        color: #999;
        text-decoration: line-through;
        font-weight: 700;
    }
    
    .room-detail-price-list b,
    .room-detail-price-list span {
        line-height: 65px;
    }
    
    .room-detail-price-text-view {
        float: left;
        color: #999;
        line-height: 65px;
        font-size: 24px;
        padding: 0 15px;
        color: #999;
        text-decoration: underline;
    }
    
    .room-detail-price-hot {
        clear: both;
    }
    
    .room-detail-price-hot label,
    .room-detail-price-list label {
        float: left;
        line-height: 65px;
        width: 100px;
        font-size: 24px;
        color: #999;
        font-weight: 400;
    }
    
    .room-detail-price-hbox {
        padding: 7px 0 0;
    }
    
    .room-detail-price-hbox a {
        display: block;
        color: #666;
        font-size: 24px;
        margin: 10px 0 0;
    }
    
    .room-detail-price-hbox a span {
        display: inline-block;
        line-height: 38px;
        font-size: 24px;
        padding: 0 20px;
        border-radius: 4px;
    }
    
    .room-detail-price-hbox a i {
        display: inline-block;
        color: #3dbcc6;
        padding: 0 25px 0 0;
        background: url(//public.danke.com.cn/public-20171122-FhOiJmxuVU2EBX3YItchPjNu0kUL) no-repeat right center;
        background-size: 20px;
        font-style: normal;
    }
    
    .serverphone {
        display: block;
        overflow: hidden;
        margin: 20px 32px;
        border: 2px solid #3dbcc6;
    }
    
    .serverphone a {
        display: block;
        font-size: 32px;
        color: #3dbcc6;
        height: 85px;
        font-weight: 700;
        line-height: 85px;
    }
    
    .serverphone a em {
        float: left;
        font-size: 20px;
        margin: 0 10px 0 155px;
        line-height: 85px;
        font-weight: 400;
        font-style: normal;
    }
    
    .detail-list-box {
        display: block;
        overflow: hidden;
        margin: 0 0 0 32px;
        padding: 0 0 20px;
        border-bottom: 1px solid #e4e8eb;
    }
    
    .detail-list {
        float: left;
        width: 60%;
        line-height: 42px;
        font-size: 24px;
        color: #666;
    }
    
    .detail-list.on {
        width: 40%;
    }
    
    .detail-list b {
        display: inline-block;
        width: 40px;
        line-height: 28px;
        margin: 0 0 0 10px;
        color: #fff;
        text-align: center;
        font-size: 20px;
        border-radius: 2px;
        font-weight: 700;
    }
    
    .methodroom-rent {
        background: #77d0d7;
    }
    
    .room-position {
        overflow: hidden;
        padding: 20px 32px 30px;
        border-bottom: 20px solid #f7f8f9;
    }
    
    .room-position label {
        display: block;
        line-height: 42px;
        font-size: 24px;
        color: #666;
        font-weight: 400;
    }
    
    .room-position label a {
        display: inline-block;
        margin: 0 15px 0 0;
        color: #37545e;
        text-decoration: underline;
    }
    
    .peizhi {
        overflow: hidden;
        border-bottom: 20px solid #f7f8f9;
    }
    
    .peizhi h3 {
        display: block;
        padding: 20px 0 0 32px;
        line-height: 65px;
        font-size: 28px;
        font-weight: 700;
    }
    
    .peizhi .biaopei {
        display: block;
        overflow: hidden;
        margin: 10px 32px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .peizhi .biaopei p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }
    
    .peizhi .biaopei p img {
        display: block;
        width: 60px;
        height: 60px;
    }
    
    .peizhi .biaopei p span {
        display: block;
        line-height: 55px;
        font-size: 24px;
        color: #666;
    }
    
    .go {
        overflow: hidden;
        border-bottom: 20px solid #f7f8f9;
    }
    
    .go h3 {
        display: block;
        padding: 20px 0 0 32px;
        line-height: 65px;
        font-size: 28px;
        font-weight: 700;
    }
    
    .go p {
        margin: 0 32px;
        display: block;
        color: #666;
        line-height: 42px;
        word-break: break-all;
        padding: 20px 0 0;
        font-size: 24px;
    }
    
    .go .open {
        display: block;
        overflow: hidden;
        text-align: center;
        line-height: 78px;
        font-size: 24px;
        color: #666;
        border-top: 1px solid #e4e8eb;
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
    
    .bottom {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 6;
        width: 100%;
    }
    
    .bottom .collect {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #6b6b6b;
        font-size: 20px;
        line-height: 40px;
        background: #fff;
        height: 102px;
    }
    
    .bottom .collect img {
        width: 32px;
        height: 32px;
        margin-top: 20px
    }
    
    .bottom .ask {
        flex: 2;
        background: #eec02f;
        line-height: 98px;
        text-align: center;
    }
    
    .bottom a {
        font-size: 34px;
        color: #fff;
    }
    
    .bottom .ask1 {
        flex: 2;
        background: #3dbcc6;
        line-height: 98px;
        text-align: center;
    }
</style>