<template>
    <div>
        <mt-header title="我的" fixed>
            <mt-button icon="back" slot="left" @click="backTo">返回</mt-button>
            <!--<mt-button router-link="'/'" icon="back" slot="left" >返回</mt-button>-->
        </mt-header>

        <mt-cell :title="memberInfo" is-link to="/profile">
            <img slot="icon" src="../assets/p1.jpg" width="80" height="80" class="imgborder">
            <span>微信：qzhangsq 二维码</span>
        </mt-cell>
        <hr>
        <mt-cell title="支付" is-link to="/paydetail">
            <img slot="icon" src="../assets/支付.png" width="24" height="24" class="imgborder1">
        </mt-cell>
        <hr>
        <mt-cell title="收藏" is-link>
            <img slot="icon" src="../assets/收藏.png" width="24" height="24" class="imgborder1">
        </mt-cell>
        <hr>
        <mt-cell title="相册" is-link>
            <img slot="icon" src="../assets/相册.png" width="24" height="24" class="imgborder1">
        </mt-cell>
        <hr>
        <mt-cell title="卡包" is-link>
            <img slot="icon" src="../assets/卡包.png" width="24" height="24" class="imgborder1">
        </mt-cell>
        <hr>
        <mt-cell title="表情" is-link>
            <img slot="icon" src="../assets/表情.png" width="24" height="24" class="imgborder1">
        </mt-cell>
        <hr>
        <mt-cell title="设置" is-link>
            <img slot="icon" src="../assets/设置.png" width="24" height="24" class="imgborder1">
        </mt-cell>


        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/美图.png">
                外卖
            </mt-tab-item>
            back
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/音乐.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/游戏.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/我的.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "About",
        data() {
            return {
                selected: "我的"
            }
        },
        computed: {
            ...mapGetters(['memberInfo'])
        },
        methods: {
            backTo() {
                this.$router.replace("/")
            },
        }
    }
</script>

<style scoped>
    .imgborder {
        border-radius: 10px;
        margin-left: -10px;
        margin-bottom: 20px;
    }

    .imgborder1 {
        border-radius: 10px;
        margin-left: -240px;
    }

    .show {
        margin-top: 60px;
    }
</style>
