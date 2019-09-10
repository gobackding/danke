<template>
  <div id="page">
    <div class="op">
      <div class="op1" style="width:30%;text-align: center;line-height: .8rem">合租
      </div>
      <div class="op2" style="width:25%;text-align: center;line-height: .8rem">位置</div>
      <div class="op3" style="width:25%;text-align: center;line-height: .8rem">价格</div>
      <div class="op4" style="width:20%;text-align: center;line-height: .8rem">更多</div>
    </div>
    <router-link  to="/detail" tag="li" class="pictext"  v-for="(item,index) in list" :key="index">
      <a href="#" class="a_mask"></a>
      <div class="flexbox">
        <div class="mod_media">
          <img
            :src="item.img"
            width="300">
        </div>
        <div class="item_list">
          <div class="item_main">

            {{item.title}}

            <em class="icon_rents">合</em>
          </div>
          <div class="r_lbx_cen">
            <div class="r_lbx_cenb">
              <div class="address_img"><img
                  src="//public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA"></div>
              {{item.area}}
            </div>
            <div class="r_lbx_cena">
              <div class="r_lbx_cena">
                <div class="sub_img"><img
                    src="//public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F"></div>
                {{item.distance}}
              </div>
            </div>
            <div class="r_lbx_cenc">
              <span class="color-ffa000">{{item.heating}}</span>
              <span class="">{{item.apartment}}</span>
              <span class="color-01bd9c">{{item.home ?item.home:item. balcony}}</span>
            </div>
          </div>
          <div class="price_total">
            <span class="ty_c first-month">{{item.Day}}</span>
            {{item.RMB}}
          </div>
          <div class="new-price-hot">
            <div class="new-price-link">
              <label style="background: #ffffff;border: 1px solid
                #fb8302;color:#fb8302">{{item.discounts}}</label>
              <i>{{item.Year}}</i>
            </div>
          </div>
        </div>
      </div>
    </router-link>
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
    import axios from 'axios';
    export default {
        name: "Rentsharing",
        created() {
            axios.post("/goods/goodsList", {
                limit: 40,
                page: 1
            }).then((data) => {
                this.list = data.data;
                console.log(this.list)
            })
        },
        data() {
            return {
                list: []
            }
        }

    }
</script>
<style scoped>
    #page {
        width: 100%;
        height: auto;
       

    }
    
    .op {
        height: .8rem;
        width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        font-size: .28rem;
        color: #000;
    }
    
    .pictext {
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        padding: .2rem .09rem .2rem .15rem;
    }
    
    .pictext .a_mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        right: 0;
    }
    
    .flexbox {
        display: flex;
        position: relative;
    }
    
    .mod_media {
        width: 258px;
        position: relative;
        height: 194px;
        text-align: center;
    }
    
    .mod_media img {
        width: 100%;
    }
    
    .item_list {
        display: block;
        flex: 1;
        padding: 0 25px 0;
        overflow: hidden;
    }
    
    .item_main {
        font-size: 26px;
        line-height: 30px;
        height: 60px;
        margin-top: 10px;
    }
    
    .flexbox em.icon_rents {
        background: #77d0d7;
    }
    
    .flexbox em {
        position: absolute;
        top: 0;
        left: 0;
        width: 33px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        font-size: 24px;
        margin: 0;
        color: #fff;
        font-style: normal;
    }
    
    .r_lbx_cen {
        margin-top: 14px;
    }
    
    .r_lbx_cenb {
        padding-left: 3px;
        line-height: 30px;
        height: 30px;
        text-overflow: ellipsis;
        width: 240px;
        overflow: hidden;
        font-size: 24px;
        color: #666;
        float: left;
        clear: both;
        white-space: nowrap;
        margin-left: -5px;
    }
    
    .address_img {
        width: 23px;
        height: 27px;
        left: 1px;
        display: inline-block;
        position: relative;
        top: .05rem;
    }
    
    .address_img img {
        width: 100%;
    }
    
    .r_lbx_cena {
        width: 415px;
        font-size: 24px;
        color: #666;
        line-height: 40px;
        margin-top: 7px;
        float: left;
        clear: both;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .sub_img {
        width: 18px;
        display: inline-block;
        position: relative;
        left: 0;
        top: 2px;
        height: 21px;
        margin-left: 0;
    }
    
    .sub_img img {
        width: 100%;
    }
    
    .r_lbx_cenc {
        overflow: hidden;
        padding-top: 10px;
        margin-top: 6px;
        clear: both;
    }
    
    .r_lbx_cenc span.color-ffa000 {
        border: 1px solid #ffa000;
        color: #ffa000;
    }
    
    .r_lbx_cenc span {
        font-size: 20px;
        border: 1px solid #0096ff;
        display: block;
        line-height: 28px;
        padding: 0 10px;
        float: left;
        margin-right: 14px;
        color: #0096ff;
    }
    
    .r_lbx_cenc span.color-01bd9c {
        border: 1px solid #01bd9c;
        color: #01bd9c;
    }
    
    .price_total {
        width: 230px;
        height: 25px;
        text-align: right;
        color: #ff7966;
        font-weight: 700;
        line-height: 20px;
        font-size: 26px;
        position: absolute;
        top: 87px;
        right: 0;
    }
    
    .ty_c.first-month {
        font-weight: 400;
        text-decoration: none;
        background: #f8f8f8;
        padding: 0 10px;
        border-radius: 4px;
    }
    
    .price_total span {
        color: #999;
        font-size: 24px;
    }
    
    .new-price-hot {
        display: block;
        max-height: 38px;
        margin-top: 15px;
        overflow: hidden;
    }
    
    .new-price-hot label {
        display: inline-block;
        border-radius: 4px;
        line-height: 36px;
        padding: 0 10px;
        font-size: 22px;
        font-weight: 400;
    }
    
    .new-price-hot i {
        display: inline-block;
        line-height: 38px;
        font-size: 22px;
        color: #666;
        margin-left: 10px;
        font-style: normal;
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