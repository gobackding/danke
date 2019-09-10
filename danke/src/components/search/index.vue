<template>
    <div id="search">
        <div class="input">
            <span>
                <img src="https://public.danke.com.cn/public-20171228-FjTtnKSKO0QnS4PiivwOHIMZslgq" alt="">
            </span>
            <input type="text" placeholder="输入您想住的区域，商圈或小区名称">
        </div>
        <span class="iconfont">&#xe68f;</span>
    </div>
</template>
<script>
    export default {
        name:"search"
    }
</script>
<style>
    #search{
        width: 100%;
        height: 88px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .input{
        width: 5.6rem;
        height: 70px;
        border-radius: 2rem;
        overflow: hidden;
        display: flex;
    }
    .iconfont{
        font-size: .6rem;
    }
    .input>span{
        width: 1.1rem;
        height: 100%;
        display: inline-block;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f4f4f4;

    }
    .input>span>img{
        width: .4rem;
    }
    .input>input{
        width: 4.5rem;
        height: 100%;
        border:none;
        outline: none;
        font-size: .24rem;
        background: #f4f4f4;
    }
</style>