<template>
    <div id="Header">
        <span>
            <img style="width:1.5rem" src="https://public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" alt="">
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
        height: .8rem;
        background: #3dbcc6;
        display: flex;
        align-items: center;
    }
    #Header>span{
        margin:0 40px;
    }
    #select{
        width: 1.5rem;
        height: .4rem;
        border: none;
        border-radius: .2rem;
        padding:0 .2rem;
        font-size: .2rem;
    }
    
    
</style>