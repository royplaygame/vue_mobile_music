<template>
    <div>
        <mt-header fixed title="快乐游戏">
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
    </div>
</template>

<script>
    export default {
        name: "Game",
        methods: {
            backTo() {
                this.$router.replace("/login")
            },
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }
</style>
