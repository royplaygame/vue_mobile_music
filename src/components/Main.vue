<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- tabcontainer -->
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="美图">
                    <Picture></Picture>
                </mt-tab-container-item>
                <mt-tab-container-item id="音乐">
                    <List></List>
                </mt-tab-container-item>
                <mt-tab-container-item id="游戏">
                    <Game></Game>
                </mt-tab-container-item>
                <mt-tab-container-item id="我的">
                    <About></About>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="美图">
                <img slot="icon" src="../assets/美图.png">
                美图
            </mt-tab-item>
            <mt-tab-item id="音乐">
                <img slot="icon" src="../assets/音乐.png">
                音乐
            </mt-tab-item>
            <mt-tab-item id="游戏">
                <img slot="icon" src="../assets/游戏.png">
                游戏
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/我的.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import List from "./List";
    import Picture from "./Picture";
    import About from "./About";
    import Game from "./Game";

    export default {
        name: "FooterBar",
        data() {
            return {
                selected: "美图",
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
            toMusic() {
                this.$router.replace('/list')
            }
        },
        components: {
            List, Picture, About, Game
        },
        computed: {},
        watch: {
            selected: function (val) {
                console.log(val)
                window.localStorage.setItem('navTabIndex', val);
            }
        },
        created() {
            if (window.localStorage.getItem('navTabIndex')) {
                this.selected = window.localStorage.getItem('navTabIndex')
            }
        }
    }
</script>

<style scoped>
    .page-tabbar {
        overflow: hidden;
        height: 100vh;
    }

    .page-wrap {
        overflow: auto;
        height: 100%;
        padding-bottom: 100px;
    }

    .mint-swipe {
        height: 200px;
    }

    .iconfont {
        font-size: 50px;
        padding: 15px;
    }

    ul li img {
        width: 345px;
        height: auto;
        margin-left: -60px;
        padding: 0px 80px 10px 20px;
    }

    ul li {
        list-style-type: none;
    }
</style>
