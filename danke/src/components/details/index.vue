<template>
    <div id="details">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190810-FkqBFhfSOayvHfY3FiTrtQ3vKGAa-roomMobileDetail.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190810-FkqBFhfSOayvHfY3FiTrtQ3vKGAa-roomMobileDetail.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://public.danke.com.cn/public-20190810-FkqBFhfSOayvHfY3FiTrtQ3vKGAa-roomMobileDetail.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>
<script>
    export default {
        name:"Details"
    }
</script>
<style scoped>
    #details{
        width:100%;
        height:5.5rem;
    }
    img{
        width: 100%;
        height: 100%;
    }

</style>