<template>
    <div id="DetailList">
        <div style="width: 100%;height: auto">
            <img style="width: 100%" :src="arr.image" alt="">
        </div>
        <div class="household">
            <div class="household_details">
                <h3>{{arr.title}}</h3>
                <span>大兴区</span>
            </div>
            <p class="yangtai"><span>独立阳台</span><span>集中供暖</span><span>首次出租</span></p>
            <p class="Day"><span>月租金</span><i>{{arr.image_title}}</i><span>元/月</span></p>
            <div class="phone">
                <span>咨询电话:</span>
                400-067-8569
            </div>
            <div class="M">
                <p><span>建筑面积约：<i>{{arr.sub_title}}</i></span><span>朝阳：<i>西</i></span></p>
                <p><span>户型：<i>3室1卫</i></span><span>楼层：<i>3/7</i></span></p>
            </div>
            <div class="partition">
                <p>区域：<span>大兴区</span><span>亦庄桥</span><span>亦庄梅园小区</span></p>
                <p>地铁：</p>
                <p>编号：<span>133516-B</span></p>
                <p>付款：<span>可支持分期月付</span><i>[不收中介费]</i></p>
            </div>
        </div>
        <div class="Standard">
            <h4>房屋标配</h4>
            <ul>
                <li v-for="(item,index) in List" :key="index">
                    <img style="width:.5rem" :src="item.images" alt="">
                    <span>{{item.username}}</span>
                </li>

            </ul>
        </div>
        <div class="adeventList">
            <h4>小区基本信息和出行建议</h4>
            <p>林肯商圈</p>
            <div style="height: 1px;background: #f4f4f4;margin-top: .2rem">

            </div>
            <p>展开</p>
        </div>
        <div id="appointment">
        <div class="Collection">
            <i class="iconfont">&#xe68f;</i>
            <span>收藏</span>
        </div>
        <div class="yuyue">
            电话咨询
        </div>
        <router-link to="/appointme" tag="div"  class="zaixian">
            在线预约
        </router-link>
    </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
    export default {
        name:"DetailList",
        created(){
           
            this.$observer.$on("handleEvent",(params)=>{
                this.arr=params
            })
             this.$observer.$emit("handleDetail",this.arr)
        },
        computed:{
            ...mapState({
               arr:state=>state.detail.detail
           }),
        },
        data(){
            return{
                List:[
                    {
                        images:"https://public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP",
                        username:"床"
                    },
                    {
                        images:"https://public.danke.com.cn/public-20171123-FrYFDpZlpF4no-kfliDa0F5WOJbd",
                        username:"WIFI"
                    },
                    {
                        images:"https://public.danke.com.cn/public-20171123-Fu3H3dZA87uIWy7lnhCCy7YPzh48",
                        username:"洗衣机"
                    },
                    {
                        images:"https://public.danke.com.cn/public-20171123-FlMAOzbw4EGZ4ZCdlvMe9Dhgs-ue",
                        username:"空调"
                    },
                    {
                        images:"https://public.danke.com.cn/public-20171123-FhnOPpkUtLogeN-wFMr5zrm__bc3",
                        username:"智能锁"
                    }
                ],
                
            }
        },


    }
</script>
<style scoped>
    body{
        background:#f4f4f4;
    }
    i{
        font-style: normal;
    }
    .household_details>h3{
        font-size: .4rem;
        width: 4rem;
    }
    .household{
        padding: 0 .2rem;
        border-bottom: .2rem solid #f4f4f4;
    }
    .household_details{
        padding: .2rem 0;
        border-bottom: 1px solid #ccc;
        position: relative;
    }
    .household_details>span{
        padding: .1rem;
        background:#f2fefe ;
        color: #3dbcc6;
        border-radius: .2rem;
        position: absolute;
        right: 0;
        top: 30%;
        margin: auto;
    }
    .yangtai{
        margin-top: .2rem;
    }
    .yangtai>span{
        margin-right: .1rem;
        padding: .06rem;
        border: solid 1px #ccc;
        border-radius: .05rem;
        font-size: .2rem;
    }
    .Day{
        margin-top: .2rem;
    }
    .Day:nth-child(1){
        font-size:.2rem;
        color: #ccc;
    }
    .Day span:nth-child(3){
        color:  #ff7966;
    }
    .Day i{
        font-style: normal;
        font-size: .4rem;
        margin: 0 .1rem;
        font-weight: 600;
        color: #ff7966;
    }
    .phone{
        width: 6rem;
        height: 1rem;
        border: solid 2px #3dbcc6;
        margin: 0 auto;
        margin-top: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .phone span{
        font-size: .2rem;
        color: #3dbcc6;
    }
    .phone{
        font-size: .35rem;
        color: #3dbcc6;
    }
    .M{
        width: 100%;
        padding: .2rem 0;
        border-bottom: 1px solid #ccc;
    }
    .M>p{
        margin-bottom: .2rem;
    }
    .M>p span:nth-child(1){
       display: inline-block;
        width: 5rem;
    }
    .partition{
        width: 100%;
        padding: .2rem 0;
    }
    .partition p{
        margin-bottom: .1rem;
    }
    .Standard{
  
        padding:.3rem .2rem;
       
        border-bottom: .2rem solid #f4f4f4;
    }
    .Standard h4{
        font-size: .3rem;
    }
    .Standard ul{
        display: flex;
        justify-content: space-around;
        margin-top: .4rem;
    }
    .Standard ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .adeventList{
        padding-bottom: 100px;
        border-bottom: .2rem solid #f4f4f4;
    }
    .adeventList>h4{
        padding-left: .2rem;
        padding-top: .3rem;
        font-size: .3rem;
    }
    .adeventList p:nth-child(2){
        padding-left: .2rem;
        margin-top: .2rem;
        font-size: .25rem;
    }
    .adeventList p:nth-child(4){
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .3rem 0;
        font-size: .25rem;
    }
    i{
        font-style: normal;
    }
    #appointment{
        width: 100%;
        height: 1.2rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background: yellow;
        display: flex;
        border-top:solid 2px #f4f4f4
    }
    .Collection i{
        font-size: .4rem;
        margin-bottom: .1rem;
    }
    .Collection{
        width: 2rem;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .yuyue{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4rem;
        color: #fff;
        background: #eec02f;
    }
    .zaixian{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4rem;
        color: #fff;
        background: #3dbcc6;
    }
</style>