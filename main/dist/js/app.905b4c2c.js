(function(){var t={5281:function(t,e,n){var o={"./ass.js":8415,"./json.js":6129,"./lrc.js":5061,"./sbv.js":3079,"./smi.js":3088,"./srt.js":4255,"./ssa.js":8726,"./sub.js":3944,"./vtt.js":2661};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=5281},3779:function(t,e,n){"use strict";var o=n(9242),i=n(3396),r=n(7139);const s={key:0,style:{"z-index":"1",position:"fixed",top:"0",left:"0","background-color":"#fafafa","border-top":"1px solid #ddd",padding:"8px 16px"}},u=(0,i._)("label",null,"재생 시간",-1),l=(0,i._)("br",null,null,-1),a=(0,i._)("hr",null,null,-1),c=(0,i._)("br",null,null,-1),d=(0,i._)("br",null,null,-1),p=(0,i._)("br",null,null,-1),f=(0,i._)("br",null,null,-1),h=(0,i._)("br",null,null,-1),g=(0,i._)("br",null,null,-1),v={key:1,style:{"z-index":"2",position:"fixed",bottom:"10%",left:"0",right:"0"}},m={style:{position:"absolute",bottom:"0",left:"50%","font-size":"24px",transform:"translateX(-50%)"},class:"ccarea"},y=["innerHTML"];function b(t,e,n,o,b,w){const T=(0,i.up)("YoutubeVue3");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(T,{style:{"z-index":"1",position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},ref:"youtube",controls:1,videoid:b.video.video_id,loop:b.video.loop,width:b.window.innerWidth,height:b.window.innerHeight,onEnded:w.onEnded,onPaused:w.onPaused,onPlayed:w.onPlayed},null,8,["videoid","loop","width","height","onEnded","onPaused","onPlayed"]),b.debug?((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",null," 디버그 모드 : "+(0,r.zw)(b.debug),1),(0,i._)("div",null,[u,(0,i._)("div",null," ("+(0,r.zw)(w.convertMillisecondsToVttTime(1e3*b.currentTime))+") ",1)]),l,a,(0,i._)("div",null,[(0,i.Uk)(" 비디오 상태 : "+(0,r.zw)(b.video),1),c,(0,i.Uk)(" 갱신 주기 : "+(0,r.zw)(b.timeCheck),1),d,(0,i.Uk)(" 타이머 아이디 : "+(0,r.zw)(b.timer),1),p,(0,i.Uk)(" 타임 싱크 : "+(0,r.zw)(b.timeSync),1),f,(0,i.Uk)(" 자막 경로 : "+(0,r.zw)(b.ccPath),1),h,(0,i.Uk)(" 자막 인코딩 : "+(0,r.zw)(b.ccEncoding),1),g]),(0,i._)("div",null," 실시간 자막 : "+(0,r.zw)(b.currentCC),1),(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>w.applyConfig&&w.applyConfig(...t))},"적용"),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>w.playCurrentVideo&&w.playCurrentVideo(...t))},"재생"),(0,i._)("button",{onClick:e[2]||(e[2]=(...t)=>w.stopCurrentVideo&&w.stopCurrentVideo(...t))},"중지"),(0,i._)("button",{onClick:e[3]||(e[3]=(...t)=>w.pauseCurrentVideo&&w.pauseCurrentVideo(...t))},"정지")])):(0,i.kq)("",!0),b.playingFlag?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.currentCC,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("p",{style:{background:"rgb(0 0 0 / 69%)",color:"#fafafa"},innerHTML:t},null,8,y)])))),128))])])):(0,i.kq)("",!0)],64)}n(7658);var w=n(9900),T=n(3547),C=n(4471),_=n.n(C),k={name:"App",data(){return{window:window,debug:!0,playingFlag:!1,video:{video_id:"",loop:1},currentTime:0,timeCheck:1e3/60,timer:void 0,vtt:[],currentCC:[],timeSync:0,ccEncoding:"utf-8",ccPath:"https://raw.githubusercontent.com/rkdmf0000/cc-collection/main/back%20number%20-%20%E6%B0%B4%E5%B9%B3%E7%B7%9A.srt"}},mounted(){this.video.video_id=location.hash.substring(1,99),this.video.loop=1,this.getRequest(this.ccPath).then((t=>{const e=_().convert(t,{format:"vtt",fps:25}),n=this.parseSmiFile(e);this.vtt=n})).catch((t=>{console.error(t)}))},components:{YoutubeVue3:w.YoutubeVue3},methods:{getCaptionsInRange(t,e){return t.filter((t=>t.start<=e&&t.end>=e))},getRequest(t){return new Promise(((e,n)=>{const o=new XMLHttpRequest;o.overrideMimeType(` text/plain; charset=${this.ccEncoding}`),o.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&(this.status>=200&&this.status<300?e(o.responseText):n(new Error(`Request failed with status code: ${o.status}`)))},o.open("GET",t,!0),o.send()}))},parseSmiFile(t){const e=new T.WebVTTParser,n=e.parse(t),o=n.cues.map((t=>({start:t.startTime+this.timeSync,end:t.endTime+this.timeSync,text:t.text})));return o},smiToVtt(t){const e=/<sync start=(\d+)><p[^>]*>(.*?)<\/p>/g;let n,o="WEBVTT\n\n";while(null!==(n=e.exec(t))){const t=this.convertMillisecondsToVttTime(n[1]),e=n[2].replace(/(<br>)+/gi,"\n"),i=this.convertMillisecondsToVttTime(parseInt(n[1],10)+100*e.length);o+=`${t} --\x3e ${i}\n${e}\n\n`}return o},convertMillisecondsToVttTime(t){const e=Math.floor(t/36e5),n=Math.floor(t/6e4)%60,o=Math.floor(t/1e3)%60,i=(t%1e3).toString().padStart(3,"0");return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}.${i}`},startTimer(){this.timer=setInterval((()=>{this.timerAction()}),this.timeCheck)},stopTimer(){clearTimeout(this.timer)},async timerAction(){const t=await this.$refs.youtube.player.getCurrentTime();if(this.currentTime=t,this.currentCC=[],0!=this.vtt.length){const t=this.getCaptionsInRange(this.vtt,this.currentTime);0!=t.length&&t.map((t=>{this.currentCC.push(t.text)}))}},convertTimeToSeconds(t){const e=t.split(":").map(parseFloat),n=3600*e[0],o=60*e[1],i=e[2]+e[3]/1e3,r=n+o+i;return parseFloat(r.toFixed(5))},applyConfig(){this.video={loop:0,video_id:"iqEr3P78fz8"}},playCurrentVideo(){this.$refs.youtube.player.playVideo()},stopCurrentVideo(){this.$refs.youtube.player.stopVideo()},pauseCurrentVideo(){this.$refs.youtube.player.pauseVideo()},onPlayed(){console.log("## OnPlayed"),this.startTimer(),this.playingFlag=!0},onEnded(){console.log("## OnEnded"),this.stopTimer(),this.playingFlag=!1},onPaused(){console.log("## OnPaused"),this.stopTimer(),this.playingFlag=!1}}},x=n(89);const V=(0,x.Z)(k,[["render",b]]);var O=V,S=(0,i.aZ)({__name:"App",setup(t){return(t,e)=>((0,i.wg)(),(0,i.j4)(O))}});const j=S;var P=j;(0,o.ri)(P).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(u=!1,r<s&&(s=r));if(u){t.splice(c--,1);var a=i();void 0!==a&&(e=a)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],u=o[1],l=o[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(l)var c=l(n)}for(e&&e(o);a<s.length;a++)r=s[a],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkmain"]=self["webpackChunkmain"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3779)}));o=n.O(o)})();
//# sourceMappingURL=app.905b4c2c.js.map