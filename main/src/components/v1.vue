
<script>
import { YoutubeVue3 } from 'youtube-vue3'

export default {
    
    name: 'App',
    data() {
        return {
            debug: true,
            video: { video_id: "", loop: 1 },
            currentTime: 0,
            timeCheck: 291,
            timer: undefined
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


        startTimer() {
            this.timer = setInterval(()=>{
                this.timerAction();        
            }, this.timeCheck);
        },
        stopTimer() {
            clearTimeout(this.timer);
        },

        async timerAction() {
            const sec = await this.$refs.youtube.player.getCurrentTime();
            this.currentTime = sec;
        },

        convertTimeToSeconds(timeStr) {
            const timeArr = timeStr.split(':').map(parseFloat); // ':'를 구분자로 나누고, 문자열을 실수형 숫자로 변환합니다.
            const hours = timeArr[0] * 3600; // 시간을 초 단위로 변환합니다.
            const minutes = timeArr[1] * 60; // 분을 초 단위로 변환합니다.
            const seconds = timeArr[2] + (timeArr[3] / 1000); // 초와 소수점 이하의 값을 더해줍니다.
            const totalSeconds = hours + minutes + seconds; // 총 초 단위를 계산합니다.
            return parseFloat(totalSeconds.toFixed(5)); // 소수점 다섯 자리까지 반올림하여 반환합니다.
        },

        //wlTMXFbPfKw
        applyConfig() {
            this.video = {
                loop : 0,
                video_id : "hlNWfslbSGA"
            }
        },
        playCurrentVideo() {
            
            this.$refs.youtube.player.playVideo();
        },
        stopCurrentVideo() {
            this.$refs.youtube.player.stopVideo();
        },
        pauseCurrentVideo() {
            this.$refs.youtube.player.pauseVideo();
        },
        onPlayed() {
            console.log("## OnPlayed")
            this.startTimer();
        },
        onEnded() {
            console.log("## OnEnded")
            this.stopTimer();
        },
        onPaused() {
            console.log("## OnPaused")
            this.stopTimer();
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
            <div>{{ currentTime }}</div>
        </div>


        <button @click="applyConfig">Apply</button>
        <button @click="playCurrentVideo">Play</button>
        <button @click="stopCurrentVideo">Stop</button>
        <button @click="pauseCurrentVideo">Pause</button>

    </div>

</template>
  