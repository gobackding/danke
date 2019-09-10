<template>
    <div id="Header">
        <span>
            <img src="https://public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" alt="">
        </span>
        <select name="" id="select">
            <option value="" id="option">北京</option>
        </select>
    </div>
    
</template>
<script>
    export default {
        name:"Header"
    }
</script>
<style specod>
    #Header{
        width: 100%;
        height: 88px;
        background: #3dbcc6;
        display: flex;
        align-items: center;
    }
    #Header>span{
        margin:0 40px;
    }
    #select{
        width: 160px;
        height: 44px;
        border: none;
        border-radius: 50px;
        padding:0 20px;
        font-size: .2rem;
    }
    
    
</style>