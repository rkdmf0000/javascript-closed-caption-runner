(function(){var e={5281:function(e,t,n){var o={"./ass.js":8415,"./json.js":6129,"./lrc.js":5061,"./sbv.js":3079,"./smi.js":3088,"./srt.js":4255,"./ssa.js":8726,"./sub.js":3944,"./vtt.js":2661};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=5281},1656:function(e,t,n){"use strict";var o=n(9242),r=n(3396),i=n(7139);const s=e=>((0,r.dD)("data-v-41d3db6d"),e=e(),(0,r.Cn)(),e),a={key:0,style:{"z-index":"1",position:"fixed",top:"0",left:"0","background-color":"#fafafa","border-top":"1px solid #ddd",padding:"8px 16px"}},u=s((()=>(0,r._)("label",null,"재생 시간",-1))),l=s((()=>(0,r._)("br",null,null,-1))),c=s((()=>(0,r._)("hr",null,null,-1))),d=s((()=>(0,r._)("br",null,null,-1))),p=s((()=>(0,r._)("br",null,null,-1))),h=s((()=>(0,r._)("br",null,null,-1))),f=s((()=>(0,r._)("br",null,null,-1))),g=s((()=>(0,r._)("br",null,null,-1))),y=s((()=>(0,r._)("br",null,null,-1))),m={key:1,style:{"z-index":"2",position:"fixed",bottom:"10%",left:"0",right:"0"}},v={style:{position:"absolute",bottom:"0",left:"50%","font-size":"16px",transform:"translateX(-50%)"},class:"ccarea"},b=["innerHTML"];function w(e,t,n,o,s,w){const T=(0,r.up)("YoutubeVue3");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(T,{style:{"z-index":"1",position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},ref:"youtube",controls:1,videoid:s.video.video_id,loop:s.video.loop,width:s.window.innerWidth,height:s.window.innerHeight,onEnded:w.onEnded,onPaused:w.onPaused,onPlayed:w.onPlayed,onReady:w.onReady},null,8,["videoid","loop","width","height","onEnded","onPaused","onPlayed","onReady"]),s.debug?((0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",null," 디버그 모드 : "+(0,i.zw)(s.debug),1),(0,r._)("div",null,[u,(0,r._)("div",null," ("+(0,i.zw)(w.convertMillisecondsToVttTime(1e3*s.currentTime))+") ",1)]),l,c,(0,r._)("div",null,[(0,r.Uk)(" 비디오 상태 : "+(0,i.zw)(s.video),1),d,(0,r.Uk)(" 갱신 주기 : "+(0,i.zw)(s.timeCheck),1),p,(0,r.Uk)(" 타이머 아이디 : "+(0,i.zw)(s.timer),1),h,(0,r.Uk)(" 타임 싱크 : "+(0,i.zw)(s.timeSync),1),f,(0,r.Uk)(" 자막 경로 : "+(0,i.zw)(s.ccPath),1),g,(0,r.Uk)(" 자막 인코딩 : "+(0,i.zw)(s.ccEncoding),1),y]),(0,r._)("div",null," 실시간 자막 : "+(0,i.zw)(s.currentCC),1),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>w.applyConfig&&w.applyConfig(...e))},"적용"),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>w.playCurrentVideo&&w.playCurrentVideo(...e))},"재생"),(0,r._)("button",{onClick:t[2]||(t[2]=(...e)=>w.stopCurrentVideo&&w.stopCurrentVideo(...e))},"중지"),(0,r._)("button",{onClick:t[3]||(t[3]=(...e)=>w.pauseCurrentVideo&&w.pauseCurrentVideo(...e))},"정지")])):(0,r.kq)("",!0),s.playingFlag?((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.currentCC,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r._)("p",{style:{background:"rgb(0 0 0 / 69%)",color:"#fafafa"},innerHTML:w.replaceNewLineWithBreak(e)},null,8,b)])))),128))])])):(0,r.kq)("",!0)],64)}n(7658);var T=n(9900),_=n(3547),C=n(4471),k=n.n(C),x={name:"App",data(){const e=this.getQueryParams();return{window:window,debug:"1"==e["debug"],playingFlag:!1,video:{video_id:"",loop:1},currentTime:0,timeCheck:1e3/30,timer:void 0,vtt:[],videoIframe:void 0,currentCC:[],timeSync:Number(e["cc_sync"])??0,ccEncoding:e["cc_encode"]??"utf-8",ccPath:e["cc_uri"]??"https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt"}},async mounted(){this.video.video_id=location.hash.substring(1,99),this.video.loop=1,this.window.addEventListener("message",(function(e){console.log(e.origin),"https://www.youtube.com"==e.origin&&console.log(JSON.parse(e.data))})),console.log(this.$refs.youtube.player),this.$refs.youtube.player.on("ready",(async()=>{this.videoIframe=await this.$refs.youtube.player.getIframe(),console.log(this.videoIframe.contentWindow.postMessage())})),this.getRequest(this.ccPath).then((e=>{const t=k().convert(e,{format:"vtt",fps:25}),n=this.parseSmiFile(t);this.vtt=n})).catch((e=>{console.error(e)}))},components:{YoutubeVue3:T.YoutubeVue3},methods:{getCaptionsInRange(e,t){return e.filter((e=>e.start<=t&&e.end>=t))},replaceNewLineWithBreak(e){return e.replace(/\n/g,"<br>")},getRequest(e){return new Promise(((t,n)=>{const o=new XMLHttpRequest;o.overrideMimeType(` text/plain; charset=${this.ccEncoding}`),o.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&(this.status>=200&&this.status<300?t(o.responseText):n(new Error(`Request failed with status code: ${o.status}`)))},o.open("GET",e,!0),o.send()}))},parseSmiFile(e){const t=new _.WebVTTParser,n=t.parse(e),o=n.cues.map((e=>({start:e.startTime+this.timeSync,end:e.endTime+this.timeSync,text:e.text})));return o},smiToVtt(e){const t=/<sync start=(\d+)><p[^>]*>(.*?)<\/p>/g;let n,o="WEBVTT\n\n";while(null!==(n=t.exec(e))){const e=this.convertMillisecondsToVttTime(n[1]),t=n[2].replace(/(<br>)+/gi,"\n"),r=this.convertMillisecondsToVttTime(parseInt(n[1],10)+100*t.length);o+=`${e} --\x3e ${r}\n${t}\n\n`}return o},convertMillisecondsToVttTime(e){const t=Math.floor(e/36e5),n=Math.floor(e/6e4)%60,o=Math.floor(e/1e3)%60,r=(e%1e3).toString().padStart(3,"0");return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}.${r}`},startTimer(){this.timer=setInterval((()=>{this.timerAction()}),this.timeCheck)},stopTimer(){clearTimeout(this.timer)},async timerAction(){const e=await this.$refs.youtube.player.getCurrentTime();if(this.currentTime=e,this.currentCC=[],0!=this.vtt.length){const e=this.getCaptionsInRange(this.vtt,this.currentTime);0!=e.length&&e.map((e=>{this.currentCC.push(e.text)}))}},getQueryParams(){const e={},t=new URLSearchParams(location.search);for(let[n,o]of t.entries())e[n]?Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]:e[n]=o;return e},convertTimeToSeconds(e){const t=e.split(":").map(parseFloat),n=3600*t[0],o=60*t[1],r=t[2]+t[3]/1e3,i=n+o+r;return parseFloat(i.toFixed(5))},applyConfig(){this.video={loop:0,video_id:"iqEr3P78fz8"}},playCurrentVideo(){this.$refs.youtube.player.playVideo()},stopCurrentVideo(){this.$refs.youtube.player.stopVideo()},pauseCurrentVideo(){this.$refs.youtube.player.pauseVideo()},onReady(){console.log("## onReady")},onPlayed(){console.log("## OnPlayed"),this.startTimer(),this.playingFlag=!0},onEnded(){console.log("## OnEnded"),this.stopTimer(),this.playingFlag=!1},onPaused(){console.log("## OnPaused"),this.stopTimer(),this.playingFlag=!1}}},P=n(89);const S=(0,P.Z)(x,[["render",w],["__scopeId","data-v-41d3db6d"]]);var O=S,V=(0,r.aZ)({__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.j4)(O))}});const j=V;var E=j;(0,o.ri)(E).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var c=u(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkmain"]=self["webpackChunkmain"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1656)}));o=n.O(o)})();
//# sourceMappingURL=app.7473ffe6.js.map