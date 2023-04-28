
<script lang="js">
import { YoutubeVue3 } from 'youtube-vue3'

export default {
    
    name: 'App',
    data() {
        return {
            youtube : null,
            debug : true,
            video: { video_id: "", loop: 1 },
        }
    },
    mounted() {
        this.video.video_id = location.hash.substring(1, 99);
        this.video.loop = 1;
    },
    components: {
        YoutubeVue3,
    },
    methods: {
        playCurrentVideo() {
            this.$refs.youtube.player.playVideo();
        },
        stopCurrentVideo() {
            this.$refs.youtube.player.stopVideo();
        },
        pauseCurrentVideo() {
            this.$refs.youtube.player.pauseVideo();
        },

        onEnded() {
            console.log("## OnEnded")
            console.log(`path : ${location.pathname}  /  search : ${location.search}`);
        },
        onPaused() {
            console.log("## OnPaused")
            console.log(`path : ${location.pathname}  /  search : ${location.search}`);
        },
        onPlayed() {
            console.log("## OnPlayed")
            console.log(`path : ${location.pathname}  /  search : ${location.search}`);
        },
    },
}
</script>


<template>
    <div>
        <YoutubeVue3 ref="youtube" :controls="1" :videoid="video.video_id" :loop="video.loop" :width="480" :height="320" @ended="onEnded" @paused="onPaused" @played="onPlayed"  />
    </div>

    <div v-if="debug" style="background-color:#fafafa;border-top:1px solid #ddd;padding:8px 16px;">
        <div>
            <!--youtube.player.getCurrentTime()-->
            <label>재생 시간</label>
            <div>{{ youtube }}</div>
        </div>
    </div>

</template>
  