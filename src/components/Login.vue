<template>
    <div>
        <mt-header fixed title="用户登录"></mt-header>
        <div class="header">
            <mt-field label="用户名称: " placeholder="请输入用户名称" v-model="username"></mt-field>
            <mt-field label="用户密码: " placeholder="请输入用户密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" size="large" @click="doLogin">登录</mt-button>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import {mapActions} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            doLogin() {
                if (this.username == '' || this.password == '') {
                    Toast({
                        message: '用户名或密码不能为空！',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                let userInfo = {username: this.username, password: this.password}
                let vip = {userStatus: 1, vipLevel: 2}
                // 模拟ajax后台方法
                setTimeout(() => {
                    //this.$store.dispatch("login", userInfo);
                    // this.$store.dispatch("setMemberInfo",vip)
                    this.login(userInfo);
                    this.setMemberInfo(vip)
                    this.$router.push('/main', () => {
                    })
                }, 500);
            },

            ...mapActions(['login', 'setMemberInfo'])
        }

    }
</script>

<style scoped>
    .header {
        margin-top: 100px;
        padding: 20px;
    }
</style>
