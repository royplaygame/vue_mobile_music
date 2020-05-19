<template>
    <div>
        <mt-header fixed title="经典音乐">
            <mt-button router-link="'/'" icon="back" slot="left" @click="backTo">返回</mt-button>
        </mt-header>
        <mt-navbar v-model="selected" class="bgcolor">
            <mt-tab-item id="1">开心游戏</mt-tab-item>
            <mt-tab-item id="2">经典歌曲</mt-tab-item>
            <mt-tab-item id="3">忠实用户</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="(game,index) in list" :title="game" :key="index">
                    <mt-button type="danger" size="small" @click="delGame">删除</mt-button>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="(music,index) in musics" :title="music.name" :key="index">
                    <router-link :to="`/music?mid=${music.id}&name=${music.name}`">{{music.name}}</router-link>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="(user,index) in users" :title="user" :key="index"/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import {Toast, MessageBox} from 'mint-ui';
    import axios from 'axios'
    import 'mint-ui/lib/style.css'

    export default {
        name: 'Main',
        data() {
            return {
                search: "",
                list: ['吃好饭饭', '癞子斗地主', '打王者荣耀', '打开心豆豆', '睡香香的觉', '开心三国杀', '疯狂英雄杀', '疯狂吃鸡'],
                musics: [],
                users: ['张三丰', '李家驹', '王安石', '赵无极', '田伯光', '孙悟空', '钱钟书', '鲁智深', '东风破'],
                loading: false,
                selected: 1
            }
        },
        methods: {
            backTo() {
                this.$router.replace("/login")
            },
            delGame() {
                MessageBox.confirm('您确定要删除这条记录吗?').then(() => {
                    Toast({
                        message: '删除成功！',
                        position: 'middle',
                        duration: 5000
                    });
                }, () => {
                    console.log("error")
                })
            },
            getMusicList() {
                const url = "https://autumnfish.cn/search?keywords=霍尊";
                axios.get(url).then((res) => {
                    console.log(res.data.result.songs)
                    this.musics=res.data.result.songs
                }, (err) => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getMusicList();
        }
    }
</script>

<style scoped>
    .bgcolor {
        background-color: pink;
        font-size: 50px;
        font-weight: bold;
    }
</style>
