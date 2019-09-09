<template>
  <div id="Register">
    <div class="img">
      <img src="https://public.danke.com.cn/public-20181119-Fjdt9x-TAy3NUFgKAf1TQejNFoY_" alt />
      <div class="img_content">
        <h3>用心带您找到心仪的房源</h3>
        <p>输入您的找房需求，我们会尽快安排管家</p>
      </div>
    </div>
    <div class="option">
      <ul>
        <li>
          <div class="inputs">意向城市</div>
          <div class="input">
            <input type="text" placeholder="北京市" v-model="city" />
            <span @click="CityListClick()">></span>
          </div>
        </li>
        <li>
          <div class="inputs">租房预算</div>
          <div class="input">
            <input type="text" placeholder="不限" v-model="budget" />
            <span @click="Remarkshandler()">></span>
          </div>
        </li>
        <li>
          <div class="inputs">联系方式</div>
          <div class="input">
            <input type="text" placeholder="填写正确的电话号码，以便我们联系您"  v-model="phone"/>
          </div>
        </li>
        <li>
          <div class="inputs">备注信息</div>
          <div class="input">
            <input type="text" placeholder="非必填" />
          </div>
        </li>
      </ul>
    </div>
    <div class="submit">
      <div class="button" @click="Submission()">提交</div>
    </div>
    <!-- 意向位置 -->
    <transition name="transitionList" key="index">
      
    </transition>
    <transition name="opcity"  key="index">
      <div class="intention" v-if="bool" @click="intentionclick()"></div>
    </transition>
   
    
  
  <!--  -->
        <van-action-sheet v-model="show" style="font-size:.3rem" title="意向位置">
          <ul style="height: 6rem;overflow: auto;">
            <li style="text-align:center;margin:.2rem 0;font-size:.3rem" @click="Listclick(item)" v-for="(item,index) in cityList" :key="index">{{item.name}}</li>
          </ul>
      
        </van-action-sheet>
        <!-- 预算 -->
        <van-action-sheet v-model="bool" style="font-size:.3rem" title="租房预算">
          
         <ul>
          <li style="text-align:center;margin:.2rem 0;font-size:.3rem" @click="Remarksclick(item)" v-for="(item,index) in money" :key="index">{{item.price}}</li>
        </ul>
      
        </van-action-sheet>
  </div>
</template>
<script>
import { cityList } from "../../api/movie";
import Vue from 'vue'

import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
export default {
  name: "Register",
  data() {
    return {
      city: "北京市",
      cityList: "",
      List: "",
      bool: false,
      position:false,
      money:[
          {
              price:"不限"
          },
          {
              price:"1500以下"
          },
          {
              price:"1500-2000元"
          },
          {
              price:"2000-2500元"
          },
          {
              price:"2500-3000元"
          },
          {
              price:"3000以上"
          }
      ],
      budget:"不限",
      phone:"",
      show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ]
    };
  },
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },

    Listclick(item) {
      this.city = item.name;
     console.log(this.city )
      this.show=!this.show
    },
    CityListClick() {
      // this.bool = true;
      this.show=!this.show
    },
    
    Remarkshandler(){
        this.bool=!this.bool
    },
    
    Remarksclick(item){
        this.budget=item.price
        this.bool=!this.bool
       
    },
    Submission(){
       
        if(!(/^1[34578]\d{9}$/.test(this.phone))){
            alert("请填写正确的手机号")
        }else{
            location.href="/#/Home"
        }
    }
    
  },
  async created() {
    let data = await cityList();
    this.cityList = data;
  }
};
</script>
<style scoped>
body {
  background: #f4f4f4;
}
.van-action-sheet__header{
  font-size: .4rem;
  padding: .2rem 0
}
.inputs{
  display:flex;
  justify-content: center;
  align-items: center
}
#Register {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  position: relative;
}
.img {
  width: 100%;
  height: auto;
  position: relative;
}
.img > img {
  width: 100%;
}
.img_content {
  position: absolute;
  bottom: 0;
  padding: 0 0 0.4rem 0.2rem;
}
.img_content > h3 {
  font-size: 0.45rem;
  color: #fff;
  font-weight: normal;
}
.img_content > p {
  margin-top: 0.3rem;
  color: #fff;
  font-size: 0.28rem;
}
.option > ul li {
  display: flex;
  position: relative;
}
.option > ul li:nth-child(1) div {
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  background: #fff;
  padding: 0.3rem 0.6rem;
}
.option > ul li:nth-child(2) div {
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  background: #fff;
  padding: 0.3rem 0.6rem;
}
.option > ul li:nth-child(3) div {
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  background: #fff;
  padding: 0.3rem 0.6rem;
}
.option > ul li:nth-child(4) div {
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  background: #fff;
  padding: 0.3rem 0.6rem;
}
.input input {
  background: none;
}
.input {
  flex: 1;
  border-radius: 0;
  height: 100%;
}
.submit {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  padding: 0.2rem 0.3rem;
  z-index: 2;
}
.button {
  background: #3dbcc6;
  height: 100%;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.3rem;
}
.input span {
  background: none;
  position: absolute;
  right: 0;
  color: #cccccc;
  bottom: 0.1rem;
  padding: 0.2rem;
}
/* 意向城市 */
#cityList {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background: #fff;
  z-index: 34;
  border-radius: 0.2rem 0.2rem 0 0;
}
.intention {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  top: 0;
}
.cityList_title {
  padding: 0.2rem 0;
  text-align: center;
  font-size: 0.3rem;
}
#cityList > ul {
  width: 100%;
  height: 6rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#cityList > ul li {
  display: inline;
  padding: 0.2rem 0;
  font-size: 0.3rem;
}
/* 城市列表 */
.transitionList-leave-to,.transitionList-enter {
  bottom: -100%;
}
/* 遮盖层 */
.opcity-leave-to ,.opcity-enter{
  background: rgba(0, 0, 0, 0);
}
.opcity-enter-active,.opcity-leave-active,.transitionList-enter-active,.transitionList-leave-active,.RemarksList-enter-active,.RemarksList-leave-active {
  transition: all 0.5s;
}


/*  */
#Remarks {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background: #fff;
  z-index: 34;
  border-radius: 0.2rem 0.2rem 0 0;
}
.Remarks_intention {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  top: 0;
}
.Remarks_title {
  padding: 0.2rem 0;
  text-align: center;
  font-size: 0.3rem;
}
#Remarks > ul {
  width: 100%;
  height: 6rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#Remarks > ul li {
  display: inline;
  padding: 0.2rem 0;
  font-size: 0.3rem;
}
</style>