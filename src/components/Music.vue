<template>
    <div>
        <mt-header fixed title="歌曲">
            <mt-button router-link="'/main'" icon="back" slot="left" @click="backTo">返回</mt-button>
        </mt-header>
        <img :src="lastPicUrl" alt="pic">
        <h1>{{musicName}} <span class="iconfont iconlike_filled" :style="{color:heartColor}"
                                @click="toggleColor"></span></h1>
        <div class="myicon"><span class="iconfont icondownload"></span> <span
                class="iconfont iconcart_empty"></span><span class="iconfont iconstar"></span></div>
        <audio :src="musicUrl" controls autoplay></audio>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Music",
        data() {
            return {
                musicUrl: '',
                coverImgUrl: '',
                musicName: '',
                heartColor: "black",
                baseUrl: process.env.BASE_URL
            }
        },
        methods: {
            toggleColor() {
                if (this.heartColor === 'black') {
                    this.heartColor = 'red'
                } else {
                    this.heartColor = 'black'
                }
            },
            backTo() {
                this.$router.replace("/main")
            },
            getMusic() {
                this.musicName = this.$route.query.name;
                //console.log(this.$route.query.name)
                const url = "http://musicapi.leanapp.cn/music/url?id=" + this.$route.query.mid;
                axios.get(url).then((res) => {
                    //console.log(res.data.data)
                    this.musicUrl = res.data.data[0].url
                }, (err) => {
                    console.log(err)
                })
            },

            // 歌曲封面
            getMusicPic() {
                //console.log(this.$route.query.mid + "=====")
                const url = "http://musicapi.leanapp.cn/playlist/detail?id=" + this.$route.query.mid;
                axios.get(url).then((res) => {
                    //console.log(res.data)
                    if (res.data.code != '404') {
                        this.coverImgUrl = res.data.playlist.coverImgUrl
                    }
                }, (err) => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getMusic();
            this.getMusicPic()
        },
        computed: {
            lastPicUrl: function () {
                if (this.coverImgUrl) {
                    return this.coverImgUrl;
                } else {
                    return require('../assets/logo.png')
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: 320px;
        height: 320px;
        border-radius: 20px;
    }

    .iconfont {
        font-size: 40px;
        margin: 20px auto;
    }

</style>
