<template>
    <div id="Home">
        <HomeBanner></HomeBanner>
        <div class="List">
            <ul> 
                <router-link 
                v-for="(item,index) in icon" 
                :key="index"
                :to="item.url"
                tag="li">
                    <img  :src="item.image" alt="">
                    <span>{{item.sub_title}}</span>
                </router-link>
            </ul>
        </div>
        <div class="women">
            <h4>我们都住在这里</h4>
            <p>与你一起寻找不同的风景</p>
            <div class="women_list" ref="women_list">
                <ul>
                    <router-link
                            v-for="(item,index) in List"
                            :to="url"
                            tag="li"
                            :key="index"
                    >
                        <img :src="item.image" alt="">
                        <p>
                            <span>{{item.title}}</span>
                            <i>{{item.sub_title}}</i>
                        </p>
                    </router-link>

                </ul>
            </div>
        </div>
        <div class="Rent">
            <div>
                <h4>蛋壳合租</h4>
                <p>高档家居&nbsp;高品质合租公寓</p>
                <span>查看更多</span>
            </div>
            
            <ul ref="hezu">
                <router-link
                        v-for="(item,index) in sharing"
                        :to="url"
                         tag="li"
                        @click.native="ClickHandler(item)"
                        :key="index"
                >
                    <img :src="item.image">
                    <h6>{{item.title}}</h6>
                    <p><span>{{item.image_title}}</span><i> 元 / 月</i></p>
                </router-link>

            </ul>
        </div>
        <div class="Rent">
            <div>
                <h4>蛋壳月租</h4>
                <p>租期您定&nbsp;月租月轻松</p>
                <span>查看更多</span>
            </div>
            <ul>
                <router-link
                        v-for="(item,index) in Day"
                        :to="url"
                        tag="li"
                        @click.native="ClickHandler(item)"
                        :key="index"
                >
                    <img  :src="item.image">
                    <h6>{{item.title}}</h6>
                    <p><span>{{item.image_title}}</span><i> 元 / 月</i></p>
                </router-link>

            </ul>
        </div>
        <div class="Dissimilarity">
            <div class="Dissimilarity_top">
                <h4>我们不一样</h4>
                <span>听他们的故事&nbsp;结缘出壳</span>
            </div>
            <ul>
                <li v-for="(item,index) in Story" :key="index">
                    <div class="Dissimilarity_img">
                        <img style="width: 2.9rem" :src="item.image">
                    </div>
                    <div class="Dissimilarity_content">
                        <h6>{{item.title}}</h6>
                        <p>{{item.intro}}</p>
                    </div>
                </li>

            </ul>
        </div>
        <div class="bottom">
            <div class="Hotline">
                客服热线：4001-551-551
            </div>
            <p>蛋壳公寓</p>
            <p>让租房变得简单和快乐</p>
            <p>© 2018 蛋壳公寓 京ICP备15009197号-1</p>
        </div>

    </div>
</template>
<script>
    import {home_banner_api} from "../../api/movie"
    import BSscroll from "better-scroll";
    import {mapMutations, mapActions} from "vuex"
    export default {
        name:"Home",
        data(){
            return{
                List:"",
                icon:"",
                details:"",
                sharing:"",
                Day:"",
                Story:"",
                url:"/DetailList"
            }
        },
         mounted(){
            new BSscroll(this.$refs.women_list,{
                scrollX:true,
                eventPassthrough: "vertical"
            })
            console.log(this.$refs.women_list)
            },
        methods:{
            ...mapActions({
                ClickHandler:"detail/ClickHandler"
            }),
            // ClickHandler(item){
            //     this.$observer.$emit("handleEvent",item)
            //     console.log(item,"传到详情")
            // }
        },
        async created(){
            let data = await home_banner_api()
            this.icon=data[0].data
            this.icon[0].url="/rentsharing"
            this.icon[1].url="/allrent"
            this.icon[2].url="/jion"
            this.icon[3].url="/Register"

            console.log(this.icon)
            this.List=data[1].data
            this.sharing=data[2].data
            this.Day=data[3].data
            this.Story=data[5].data
        },
    }
</script>
<style scoped>
    .List{
        padding: 0 .3rem;

    }
    .List>ul{
        padding: .4rem 0;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
    }
    .List>ul>li>img{
        width: .8rem;
        margin-bottom: .2rem;
    }
    .List>ul>li{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        flex: 1;
        justify-content: space-around;

    }
    .women{
        margin-top: .4rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: .4rem;
    }
    .women>h4{
        font-size: .3rem;
        padding: 0 .4rem;
    }
    .women>p{
        font-size: .24rem;
        color: #ccc;
        margin-top: .1rem;
        line-height: 1em;
        padding: 0 .4rem;
    }
    .women_list{
        width: 100%;
        margin-top: .3rem;
        overflow-x: auto;
    }
    .women_list>ul{
        height: 100%;
        display: flex;
    }
    .women_list>ul>li{
        width: 3rem;
        height: auto;
        position: relative;
        margin-left: .3rem;
    }
    .women_list>ul:after{
        content:" ";
        display:block;
        clear:both;
        hieght:0;
        overflow:hidden;
    }
    .women_list>ul>li>img{
        width: 3rem;

    }
    .women_list>ul>li p{
        position: absolute;
        bottom: 0;
        z-index: 3;
        color: #fff;

    }
    .women_list>ul>li i{
        color: #fff;
        font-size: .18rem;
        font-style: normal;
        margin-left: .2rem;
    }
    .Rent{
        margin-top: .4rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: .4rem;
    }
    .Rent>div{
        position: relative;
    }
    .Rent>div>span{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: inline;
        right: 0;
        text-align: right;
        padding-right: .4rem;
        line-height: .6rem;
    }
    .Rent>div>h4{
        font-size: .3rem;
        padding: 0 .4rem;
    }
    .Rent>div>p{
        font-size: .24rem;
        color: #ccc;
        margin-top: .1rem;
        line-height: 1em;
        padding: 0 .4rem;
    }
    .Rent>ul{
        margin-top: .3rem;
        display: flex;
        overflow-x: auto;
    }
    .Rent>ul>li{
        width: 3rem;
        height: auto;
        margin-left: .4rem;
    }
    .Rent>ul>li>img{
        width: 3rem;
        height: 2.4rem;
    }
    .Rent>ul>li>h6{
        font-size: .26rem;
        width: 100%;
       white-space: nowrap;
      overflow: hidden;
        text-overflow: ellipsis;

    }
    .Rent>ul>li>p{
        margin-top: .1rem;
    }
    .Rent>ul>li>p>i{
        font-style: normal;
    }
    .Rent>ul>li>p>span{
        color: #ff7966;
        font-weight: 600;
    }
    .Dissimilarity{
        padding: 0 .4rem;
    }
    .Dissimilarity_top{
        margin-top: .4rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: .4rem;
        position: relative;
        border-bottom: 1px solid #ccc;
        width: 100%;
    }
    .Dissimilarity_top>h4{
        font-size: .3rem;

    }
    .Dissimilarity_top>span{
        font-size: .24rem;
        color: #ccc;
        margin-top: .1rem;
        line-height: 1em;
        position: absolute;
        right: 0;
        top: 0   ;
    }
    .Dissimilarity>ul{
        margin-top: .3rem;
    }
    .Dissimilarity>ul>li{
        width: 100%;
        height: auto;
        display: flex;
        margin-bottom: .3rem;
    }
    .Dissimilarity_img{
        width: 2.9rem;


    }
    .Dissimilarity_img>img{
        width: 100%;
    }
    .Dissimilarity_content{
        flex: 1;

        margin-left: .2rem;
    }
    .Dissimilarity_content>h6{
        font-size: .3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .Dissimilarity_content>p{
        font-size: .24rem;
        margin-top: .2rem;
        line-height: .4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        color: #666;
    }
    .bottom{
        width: 100%;
        height: 4rem;
        background: #3f4141;
        padding: .3rem .3rem 120px;
    }
    .Hotline{
        width: 100%;
        height:1rem;
        background: #535656;
        border-radius: .1rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bottom>p{
        font-size: .26rem;
        color: #666;
        text-align: center;
        margin-top: .3rem;
    }
</style>