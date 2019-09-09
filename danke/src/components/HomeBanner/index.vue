<template>
    <div id="Banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190630-FlY2PMVqlVGft9lIBUn0hDlzM_cl" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190828-FpyBO2aMlDT2wclFtcf3vvkRaL3-" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190829-FllZdxVIN7zlPbv16L_hUFwj37nC" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>
<script>
    export default {
        name:"HomeBanner"
    }
</script>
<style scoped="">
    #Banner{
        width:100%;
        height:4rem;
    }
    img{
        width: 100%;
        height: 100%;
    }

</style>