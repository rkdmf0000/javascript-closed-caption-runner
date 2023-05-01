
<script>
import { YoutubeVue3 } from 'youtube-vue3';
import { WebVTTParser } from 'webvtt-parser';

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


        this.getRequest('/test1.smi')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });

        const xxx = `WEBVTT
<SAMI>
<HEAD>
<TITLE>Lorem ipsum</TITLE>
<STYLE TYPE="text/css">
<!--
P { margin-left:2pt; margin-right:2pt; margin-bottom:1pt;
    margin-top:1pt; font-size:12pt; text-align:center;
    font-family:굴림, 굴림; font-weight:normal; color:white;
    }
.KRCC { Name:한국어; lang:ko-KR; SAMIType:CC; }
#STDPrn { Name:Standard Print; }
#LargePrn { Name:Large Print (26pt); font-size:26pt; }
#SmallPrn { Name:Small Print (14pt); font-size:14pt; }
-->
</STYLE>
</HEAD>
<BODY>
<SYNC Start=6144><P Class=KRCC>
<font face=돋움>Lorem ipsum dolor sit amet, consectetur<br><b>Lorem ipsum dolor sit amet, consectetur</b><br>
<font size=2>Lorem ipsum dolor sit amet, consectetur
<SYNC Start=10102><P Class=KRCC>&nbsp;
<SYNC Start=10122 ><P Class=ENCC>&nbsp;
<SYNC Start=10142 ><P Class=ENCC>&nbsp;
<SYNC Start=10162 ><P Class=ENCC>&nbsp;
<SYNC Start=17976><P Class=KRCC>
<font face=돋움>Lorem ipsum dolor sit amet, consectetur<br><b>Lorem ipsum dolor sit amet, consec
tetur</b><br><font size=2>Lorem ipsum dolor sit amet, consectetur
<SYNC Start
=  7007908 ><P Class=ENCC>&nbsp;
<SYNC Start
=  7007918 ><P Class=ENCC>&nbsp;
<SYNC Start
=  7007920 ><P Class=ENCC>&nbsp;
</BODY>
</SAMI>
`;
        const captions = this.parseSmiFile(xxx);
        console.log(captions);


    },
    components: {
        YoutubeVue3,
    },
    methods: {

        getRequest(url) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

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

            console.log(tree);

            // Extract the captions from the WebVTT format
            // const captions = parser.cues.map((cue) => ({
            //     start: cue.startTime * 1000, // Convert to milliseconds
            //     end: cue.endTime * 1000, // Convert to milliseconds
            //     text: cue.text,
            // }));

            return null;
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
                video_id: "hlNWfslbSGA"
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
        <YoutubeVue3 ref="youtube" :controls="1" :videoid="video.video_id" :loop="video.loop" :width="480" :height="320"
            @ended="onEnded" @paused="onPaused" @played="onPlayed" />
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
  