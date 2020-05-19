<template>
    <div>
        <mt-header fixed title="娱乐馆">
            <mt-button router-link="'/'" icon="back" slot="left" @click="backTo">返回</mt-button>
        </mt-header>
        <mt-swipe :auto="5000" class="mint-swipe">
            <mt-swipe-item>
                <img src="../assets/10.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/11.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/12.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/13.jpg">
            </mt-swipe-item>
        </mt-swipe>
        <div class="myicon">
            <span class="iconfont iconsub_account" @click="toMusic"></span>
            <span class="iconfont iconstar"></span>
            <span class="iconfont iconcart_empty"></span>
            <span class="iconfont iconlike_filled"></span>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img v-lazy="item">
            </li>
        </ul>
    </div>
</template>

<script>
    import 'mint-ui/lib/style.css'

    export default {
        name: 'Main',
        data() {
            return {
                search: "",
                list: [
                    require('../assets/list01.jpg'),
                    require('../assets/list02.jpg'),
                    require('../assets/list03.jpg'),
                    require('../assets/list04.jpg'),
                    require('../assets/list05.jpg'),
                    require('../assets/list06.jpg'),
                    require('../assets/list07.jpg'),
                    require('../assets/list08.jpg')]
            }
        },
        methods: {
            backTo() {
                this.$router.replace("/login")
            },
            toMusic(){
                this.$router.replace('/list')
            }
        },
        mounted() {

        },
        components:{
        }
    }
</script>

<style scoped>
    .bgcolor {
        background-color: pink;
        font-size: 50px;
        font-weight: bold;
    }

    .mint-swipe {
        height: 200px;
    }

    .iconfont {
        font-size: 50px;
        padding: 15px;
    }

    .myicon {
        margin-top: 5px;
        border: 1px solid palegoldenrod;
        height: 60px;
        background-color: greenyellow;
    }

    ul li img{
        width: 345px;
        height: auto;
        margin-left: -60px;
        padding: 0px 80px 10px 20px;
    }

    img[lazy=loading] {
        width: 200px;
        height: 200px;
        margin: auto;
        background: url("../assets/logo.png") no-repeat fixed center;
    }
    ul li{
        list-style-type: none;
    }

</style>
