<template>
    <div>
        <mt-header fixed title="用户登录"></mt-header>
        <div class="header">
            <mt-field label="用户名称: " placeholder="请输入用户名称" v-model="username"></mt-field>
            <mt-field label="用户密码: " placeholder="请输入用户密码" v-model="password"></mt-field>
            <mt-button type="primary" size="large" @click="login">登录</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login() {
                this.$router.replace('/main')
            }
        }

    }
</script>

<style scoped>
    .header {
        margin-top: 100px;
        padding: 20px;
    }
</style>
