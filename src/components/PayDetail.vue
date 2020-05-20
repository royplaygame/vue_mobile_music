<template>
    <div>
        <mt-header fixed title="用户中心">
            <mt-button icon="back" slot="left" @click="backTo">返回</mt-button>
        </mt-header>
        <mt-cell title="账号" to="/paydetail" class="myspan">
            <span>{{userInfo.username}}</span>
        </mt-cell>
        <mt-cell title="身份" to="/paydetail" class="myspan">
            <span>{{memberInfo}}</span>
        </mt-cell>

        <mt-cell title="VIP会员" label="10.00元/30天" class="myspan1">
            <span>
                <mt-button size="small" @click="buyMember(1)">购买</mt-button>
            </span>
        </mt-cell>

        <mt-cell title="高级VIP会员" label="100.00元/30天" class="myspan1">
            <span>
                <mt-button size="small" @click="buyMember(2)">购买</mt-button>
            </span>
        </mt-cell>

        <mt-cell title="超级VIP会员" label="1000.00元/30天" class="myspan1">
            <span>
                <mt-button size="small" @click="buyMember(3)">购买</mt-button>
            </span>
        </mt-cell>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import {Toast} from 'mint-ui'

    export default {
        name: "PayDetail",
        computed: {
            ...mapGetters(['memberInfo']),
            ...mapState(['userInfo'])
        },
        methods: {
            backTo() {
                this.$router.replace("/main")
            },
            buyMember(level) {
                const vip = {userStatus: level, vipLevel: level}
                this.$store.dispatch('buyVip', vip)
                Toast({
                    message: '购买成功！'
                })
            }
        }
    }
</script>

<style scoped>
    .myspan {
        margin-left: -240px;
    }

    .myspan1 {
        margin-left: -200px;
        background-color: pink;
        padding: 20px;
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: bold;
    }
</style>
