(function(){"use strict";var e={3733:function(e,o,n){var t=n(9242),r=n(3396),i=n(7139);const u={key:0,style:{"background-color":"#fafafa","border-top":"1px solid #ddd",padding:"8px 16px"}},d=(0,r._)("label",null,"재생 시간",-1);function a(e,o,n,t,a,l){const s=(0,r.up)("YoutubeVue3");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r.Wm)(s,{ref:"youtube",controls:1,videoid:a.video.video_id,loop:a.video.loop,width:480,height:320,onEnded:l.onEnded,onPaused:l.onPaused,onPlayed:l.onPlayed},null,8,["videoid","loop","onEnded","onPaused","onPlayed"])]),a.debug?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",null,[d,(0,r._)("div",null,(0,i.zw)(a.currentTime),1)]),(0,r._)("button",{onClick:o[0]||(o[0]=(...e)=>l.applyConfig&&l.applyConfig(...e))},"Apply"),(0,r._)("button",{onClick:o[1]||(o[1]=(...e)=>l.playCurrentVideo&&l.playCurrentVideo(...e))},"Play"),(0,r._)("button",{onClick:o[2]||(o[2]=(...e)=>l.stopCurrentVideo&&l.stopCurrentVideo(...e))},"Stop"),(0,r._)("button",{onClick:o[3]||(o[3]=(...e)=>l.pauseCurrentVideo&&l.pauseCurrentVideo(...e))},"Pause")])):(0,r.kq)("",!0)],64)}var l=n(9900),s={name:"App",data(){return{debug:!0,video:{video_id:"",loop:1},currentTime:0,timeCheck:291,timer:void 0}},mounted(){this.video.video_id=location.hash.substring(1,99),this.video.loop=1},components:{YoutubeVue3:l.YoutubeVue3},methods:{startTimer(){this.timer=setInterval((()=>{this.timerAction()}),this.timeCheck)},stopTimer(){clearTimeout(this.timer)},async timerAction(){const e=await this.$refs.youtube.player.getCurrentTime();this.currentTime=e},convertTimeToSeconds(e){const o=e.split(":").map(parseFloat),n=3600*o[0],t=60*o[1],r=o[2]+o[3]/1e3,i=n+t+r;return parseFloat(i.toFixed(5))},applyConfig(){this.video={loop:0,video_id:"hlNWfslbSGA"}},playCurrentVideo(){this.$refs.youtube.player.playVideo()},stopCurrentVideo(){this.$refs.youtube.player.stopVideo()},pauseCurrentVideo(){this.$refs.youtube.player.pauseVideo()},onPlayed(){console.log("## OnPlayed"),this.startTimer()},onEnded(){console.log("## OnEnded"),this.stopTimer()},onPaused(){console.log("## OnPaused"),this.stopTimer()}}},p=n(89);const c=(0,p.Z)(s,[["render",a]]);var f=c,v=(0,r.aZ)({__name:"App",setup(e){return(e,o)=>((0,r.wg)(),(0,r.j4)(f))}});const y=v;var h=y;(0,t.ri)(h).mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var d=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[a])}))?t.splice(a--,1):(d=!1,i<u&&(u=i));if(d){e.splice(s--,1);var l=r();void 0!==l&&(o=l)}}return o}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,i,u=t[0],d=t[1],a=t[2],l=0;if(u.some((function(o){return 0!==e[o]}))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(a)var s=a(n)}for(o&&o(t);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},t=self["webpackChunkmain"]=self["webpackChunkmain"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(3733)}));t=n.O(t)})();
//# sourceMappingURL=app.0df191f5.js.map