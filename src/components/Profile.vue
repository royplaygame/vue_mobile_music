<template>
    <div>
        <mt-header fixed>
            <mt-button icon="back" slot="left" @click="backTo">个人信息</mt-button>
        </mt-header>
        <mt-cell title="设置" is-link class="detail">
            <span>
                <img slot="icon" src="../assets/p1.jpg" width="80" height="80" class="imgborder1">
            </span>
        </mt-cell>
        <hr>
        <mt-cell title="昵称" is-link class="detail">
            <span>平凡的人</span>
        </mt-cell>
        <hr>
        <mt-cell title="微信号" is-link class="detail">
            <span>qzhangsq</span>
        </mt-cell>
        <hr>
        <mt-cell title="二维码名片" is-link class="detail">
            <span>
                <img slot="icon" src="../assets/p1.jpg" width="24" height="24" class="imgborder1">
            </span>
        </mt-cell>
        <hr>
        <mt-cell title="更多" is-link class="list">
            <span> </span>
        </mt-cell>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        methods:{
            backTo() {
                this.$router.replace("/main")
            },
        }
    }
</script>

<style scoped>
    .imgborder1 {
        border-radius: 10px;
    }
    .detail{
        margin-left: -200px;
    }
    .list{
        margin-left: -280px;
    }
</style>
