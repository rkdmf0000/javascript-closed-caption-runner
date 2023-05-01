
<script>
import { YoutubeVue3 } from 'youtube-vue3';
import { WebVTTParser } from 'webvtt-parser';
import subsrt from 'subsrt'

//https://github.com/papnkukn/subsrt


//smi example : https://raw.githubusercontent.com/rkdmf0000/javascript-closed-caption-runner/main/main/dist/test1.smi
//싱크 : -316.5

//srt exmaple : https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt
//싱크 : 0

export default {

    name: 'App',
    data() {
        return {
            window: window,
            debug: true,
            playingFlag: false,
            video: { video_id: "", loop: 1 },
            currentTime: 0,
            timeCheck: 1000 / 60,
            timer: undefined,
            vtt: [],
            currentCC: [],
            timeSync: 0,
            ccEncoding : "utf-8",
            ccPath : "https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt"
        }
    },
    mounted() {
        this.video.video_id = location.hash.substring(1, 99);
        this.video.loop = 1;


        this.getRequest(this.ccPath)
            .then(response => {

                const vtt = subsrt.convert(response, { format: "vtt", fps: 25 });
                const captions = this.parseSmiFile(vtt);
                this.vtt = captions;

            })
            .catch(error => {
                console.error(error);
            });



    },
    components: {
        YoutubeVue3,
    },
    methods: {

        getCaptionsInRange(captions, timeline) {

            return captions.filter((caption) => {
                return caption.start <= timeline && caption.end >= timeline;
            });
        },

        getRequest(url) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

                xhr.overrideMimeType(` text/plain; charset=${this.ccEncoding}`); // Content-Type을 UTF-8로 설정

                xhr.onreadystatechange = function () {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status >= 200 && this.status < 300) {
                            resolve(xhr.responseText);
                        } else {
                            reject(new Error(`Request failed with status code: ${xhr.status}`));
                        }
                    }
                };

                xhr.open('GET', url, true);
                xhr.send();
            });
        },


        parseSmiFile(smiContent) {
            const parser = new WebVTTParser();

            // Parse the SMI content into WebVTT format
            const tree = parser.parse(smiContent);

            // Extract the captions from the WebVTT format
            const captions = tree.cues.map((cue) => ({
                start: cue.startTime + this.timeSync, // Convert to milliseconds
                end: cue.endTime + this.timeSync, // Convert to milliseconds
                text: cue.text,
            }));

            return captions;
        },




        // SMI 파일을 VTT 파일로 변환하는 함수
        smiToVtt(smiContent) {
            // SMI 파일의 자막 데이터 부분 추출
            const syncRegex = /<sync start=(\d+)><p[^>]*>(.*?)<\/p>/g;
            let match;
            let vttContent = "WEBVTT\n\n"; // VTT 파일의 시작 부분
            while ((match = syncRegex.exec(smiContent)) !== null) {
                const start = this.convertMillisecondsToVttTime(match[1]);
                const text = match[2].replace(/(<br>)+/gi, "\n"); // <br> 태그를 개행 문자로 변환
                const end = this.convertMillisecondsToVttTime(parseInt(match[1], 10) + text.length * 100); // VTT는 종료 시간을 지정해야 함
                vttContent += `${start} --> ${end}\n${text}\n\n`;
            }
            return vttContent;
        },

        // 밀리초 단위를 VTT 시간 형식으로 변환하는 함수
        convertMillisecondsToVttTime(milliseconds) {
            const hours = Math.floor(milliseconds / (60 * 60 * 1000));
            const minutes = Math.floor(milliseconds / (60 * 1000)) % 60;
            const seconds = Math.floor(milliseconds / 1000) % 60;
            const ms = (milliseconds % 1000).toString().padStart(3, "0");
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms}`;
        },





        startTimer() {
            this.timer = setInterval(() => {
                this.timerAction();
            }, this.timeCheck);
        },
        stopTimer() {
            clearTimeout(this.timer);
        },

        async timerAction() {
            const sec = await this.$refs.youtube.player.getCurrentTime();
            this.currentTime = sec;

            this.currentCC = [];
            if (this.vtt.length != 0) {
                const arr = this.getCaptionsInRange(this.vtt, this.currentTime);
                if (arr.length != 0) {
                    arr.map((buffer) => {
                        // console.log(buffer.text);
                        this.currentCC.push(buffer.text);
                    })
                }
            }


        },

        convertTimeToSeconds(timeStr) {
            const timeArr = timeStr.split(':').map(parseFloat);
            const hours = timeArr[0] * 3600;
            const minutes = timeArr[1] * 60;
            const seconds = timeArr[2] + (timeArr[3] / 1000);
            const totalSeconds = hours + minutes + seconds;
            return parseFloat(totalSeconds.toFixed(5));
        },

        //wlTMXFbPfKw
        applyConfig() {
            this.video = {
                loop: 0,
                video_id: "iqEr3P78fz8"
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
            this.playingFlag = true;
        },
        onEnded() {
            console.log("## OnEnded")
            this.stopTimer();
            this.playingFlag = false;
        },
        onPaused() {
            console.log("## OnPaused")
            this.stopTimer();
            this.playingFlag = false;
        },

    },
}
</script>


<template>
    <YoutubeVue3 style="z-index:1; position:fixed;top:0;bottom:0;left:0;right:0;" ref="youtube" :controls="1" :videoid="video.video_id"
        :loop="video.loop" :width="window.innerWidth" :height="window.innerHeight" @ended="onEnded" @paused="onPaused"
        @played="onPlayed" />


    <div v-if="debug"
        style="z-index:1;position:fixed;top:0;left:0;background-color:#fafafa;border-top:1px solid #ddd;padding:8px 16px;">
        <div>
            디버그 모드 : {{ debug }}
        </div>

        <div>
            <!--youtube.player.getCurrentTime()-->
            <label>재생 시간</label>
            <div>
                ({{ convertMillisecondsToVttTime(currentTime * 1000) }})
            </div>
        </div>

        <br />
        <hr />

        <div>

            비디오 상태 : {{ video }}<br />
            갱신 주기 : {{ timeCheck }}<br />
            타이머 아이디 : {{ timer }}<br />
            타임 싱크 : {{ timeSync }}<br />
            자막 경로 : {{ ccPath }}<br />
            자막 인코딩 : {{ ccEncoding }}<br />
        </div>

        <div>
            실시간 자막 :
            {{ currentCC }}
        </div>

        <button @click="applyConfig">적용</button>
        <button @click="playCurrentVideo">재생</button>
        <button @click="stopCurrentVideo">중지</button>
        <button @click="pauseCurrentVideo">정지</button>

    </div>

    <div v-if="playingFlag" style="z-index:2;position:fixed;bottom:10%;left:0;right:0;">
        <div style="position:absolute;bottom:0;left:0;font-size: 24px;left: 50%;transform: translateX(-50%);" class="ccarea">
            <div v-for="(buffer, index) in currentCC" :key="index">
                <p style="background: rgb(0 0 0 / 69%);color:#fafafa;" v-html="buffer"></p>
            </div>
        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
}

.ccarea {
    display: block;
    text-align: center;
}

.ccarea * {
    display: block;
}
</style>