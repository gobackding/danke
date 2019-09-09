<template>
  <div id="appointme" >
    <div class="appointme_detail" >
      <div class="appointme_detail_left">
        <img :src="image" alt/>
      </div>
      <div class="appointme_detail_right">
        <h5>{{title}}</h5>
        <div class="appointme_detail_right_introduce">
          <p class="oppo">
            <em class="qwe">
              <img
                src="https://public.danke.com.cn/public-20180207-Fk288367bawwFZNmdXp0NLW6z4FA"
                alt
              />
              <span style="font-size:.18rem">{{sub_title}}</span>
            </em>
            <em>
              <span class="RMB">{{image_title}}</span>
              <i>元/月</i>
            </em>
          </p>
          <p class="distance">
            <img src="https://public.danke.com.cn/public-20180207-FrmHzoXtCE2aunWN3cY5Ww1a153F" alt />
            <span style="font-size:.18rem">距离八通线八里桥站1150米</span>
          </p>
          <span
            style="padding:.08rem;border:solid 1px #3dbcc6;margin-top:.1rem;color:#3dbcc6;font-size:.16rem"
          >集中供暖</span>
        </div>
      </div>
    </div>
    <div class="contact">
      <ul>
        <li class="contact_app">
          <span>联系方式</span>
          <input type="text" placeholder="请输入您的手机号" @input="PhoneHandler($event)" />
        </li>
        <li class="contact_app">
          <span>验证码</span>
          <input type="text" placeholder="请输入验证码" />
          <em class="Obtain">获取验证码</em>
        </li>
        <li class="Housekeeper">
          <h4>给管家留言</h4>
          <textarea style="resize:none;" placeholder="选填" @input="inputclick($event)"></textarea>
        </li>
      </ul>
      <button @click="clickHandler()">提交约看</button>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
    data(){
      return{
          image:"",
          title:"",
          image_title:"",
          sub_title:""
      }
  },
  computed:{
    ...mapState({
      detail:state=>state.detail.detail
    })
  },
  methods:{
    ...mapMutations({
      inputclick:"message/inputclick",
      PhoneHandler:"message/PhoneHandler",
      clickHandler:"message/clickHandler"
    })
  },
  created(){
    this.title=this.detail.title
    this.image=this.detail.image
    this.image_title=this.detail.image_title
    this.sub_title=this.detail.sub_title
    console.log(this.image)
  }
 
  
};
</script>
<style scoped>
em,
i {
  font-style: normal;
}
.RMB {
  font-size: 0.36rem;
  font-weight: 600;
  color: red;
  margin-right: 0.1rem;
}
.qwe {
  display: flex;
}
#appointme {
  width: 100%;
  height: 100%;
}
.appointme_detail {
  padding: 0.3rem 0.2rem;
  display: flex;
  border-bottom: 0.15rem solid #f4f4f4;
}
.appointme_detail_left {
  width: 2.5rem;
  height: 2rem;
  margin-right: 0.2rem;
  overflow: hidden;
}
.appointme_detail_left > img {
  width: 100%;
}
.appointme_detail_right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.appointme_detail_right h5 {
  font-size: 0.28rem;
  font-weight: 400;
}
.appointme_detail_right_introduce img {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.1rem;
}
.oppo {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.distance {
  display: flex;
  margin-bottom: 0.1rem;
}
.contact {
  padding: 0 0.2rem;
}
.contact_app {
  padding: 0.3rem 0;
  width: 100%;
  font-size: 0.3rem;
  border-bottom: solid 2px #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.contact_app input {
  margin-left: 0.2rem;
  height: 0.6rem;
  font-size: 0.3rem;
  border: none;
  outline: none;
  width: 5rem;
}
.Obtain {
  position: absolute;
  right: 0;
  margin-right: 0.2rem;
  color: darkturquoise;
}
.Housekeeper {
  width: 100%;
  padding: 0.3rem 0;
}
.Housekeeper h4 {
  font-size: 0.3rem;
}
textarea {
  width: 100%;
  height: 3rem;
  margin-top: 0.2rem;
  font-size: 0.16rem;
  background: #f7f8fa;
  border: none;
  outline: none;
  padding: 0.2rem;
}
button {
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  background: #3dbcc6;
  border: none;
  color: #fff;
}
</style>