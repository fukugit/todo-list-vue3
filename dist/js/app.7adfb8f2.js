(function(){"use strict";var e={9531:function(e,t,n){var o=n(9242),a=n(3396),l=n(4870);const r=e=>((0,a.dD)("data-v-572d2f49"),e=e(),(0,a.Cn)(),e),s={class:"main-header"},u=r((()=>(0,a._)("h1",null,"This is Header",-1))),i=[u];function c(e,t){return(0,a.wg)(),(0,a.iD)("div",s,i)}var d=n(89);const v={},f=(0,d.Z)(v,[["render",c],["__scopeId","data-v-572d2f49"]]);var g=f,m=(n(7658),n(7139)),p={__name:"TodoInput",emits:["set-message"],setup(e,{emit:t}){let n=(0,l.iH)("hello");const r=()=>{if(null==n.value&&""==n.value)return;let e=JSON.parse(localStorage.getItem("message"));null==e&&(e=[]),e.push(n.value),localStorage.setItem("message",JSON.stringify(e)),t("set-message",n)};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.dq)(n)?n.value=e:n=e)},null,512),[[o.nr,(0,l.SU)(n),void 0,{lazy:!0}]]),(0,a._)("p",null,"Your input : "+(0,m.zw)((0,l.SU)(n)),1),(0,a._)("button",{type:"button",onClick:r},"Add")]))}};const _=(0,d.Z)(p,[["__scopeId","data-v-7078a61c"]]);var w=_,h=n(505);const y={class:"li"},D={class:"red"},k={key:0};var S={__name:"TodoList",props:{message:{type:String,requirerd:!0},isRemovedFlag:{type:Boolean,default:!1,requirerd:!1}},setup(e,{expose:t}){const n=e,r=(0,l.iH)({oldMessages:[]});r.value.oldMessages=JSON.parse(localStorage.getItem("message"));let s=(0,a.Fl)((()=>n.message));const u=()=>{null==r.value.oldMessages&&(r.value.oldMessages=[]);let e=JSON.parse(localStorage.getItem("message"));r.value.oldMessages.slice(0,r.value.oldMessages.length),r.value.oldMessages=e};t({showTodoList:u});const i=e=>{const t=(0,h.i)(e,{type:"highlight",color:"#FFFF00",animationDuration:800});t.show()};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",null,[(0,a._)("ul",D,[(0,a.Wm)(o.uT,{onAfterEnter:i},{default:(0,a.w5)((()=>[""!=(0,l.SU)(s)?((0,a.wg)(),(0,a.iD)("li",k,"Your latest input : "+(0,m.zw)((0,l.SU)(s)),1)):(0,a.kq)("",!0)])),_:1})])]),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,(e=>((0,a.wg)(),(0,a.iD)("ul",{key:e},[(0,a._)("li",null,(0,m.zw)(e),1)])))),128))])))),128))])]))}};const b=(0,d.Z)(S,[["__scopeId","data-v-6f281ba6"]]);var O=b;const F={key:0};var T={__name:"TodoRemove",emits:["set-message"],setup(e,{emit:t}){const n=(0,l.iH)(!1),r=()=>{localStorage.removeItem("message"),n.value=!0,t("all-message-removed")};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{onClick:r},"Delete All"),(0,a.Wm)(o.uT,{name:"fade"},{default:(0,a.w5)((()=>[n.value?((0,a.wg)(),(0,a.iD)("p",F,"All TODOs were removed!")):(0,a.kq)("",!0)])),_:1})]))}};const I=(0,d.Z)(T,[["__scopeId","data-v-66eaf659"]]);var H=I;const M=e=>((0,a.dD)("data-v-347dd1c5"),e=e(),(0,a.Cn)(),e),W=M((()=>(0,a._)("h1",null,"This is Footer",-1))),A=[W];function C(e,t){return(0,a.wg)(),(0,a.iD)("footer",null,A)}const j={},L=(0,d.Z)(j,[["render",C],["__scopeId","data-v-347dd1c5"]]);var q=L;const x={key:0},U={key:0,class:"circle"};var E={__name:"AnimeSample",setup(e){const t=(0,l.iH)(!1),n=()=>{},r=()=>{},s=e=>{const t=(0,h.i)(e,{type:"highlight",color:"#FFFF00",animationDuration:100});t.show()},u=()=>{},i=()=>{},c=()=>{},d=()=>{},v=()=>{};return(e,l)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{onClick:l[0]||(l[0]=e=>t.value=!t.value)},"Show"),(0,a.Wm)(o.uT,{name:"fade"},{default:(0,a.w5)((()=>[t.value?((0,a.wg)(),(0,a.iD)("p",x,"hello")):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(o.uT,{onBeforeEnter:n,onEnter:r,onAfterEnter:s,onEnterCanceled:u,onBeforeLeave:i,onLeave:c,onAfterLeave:d,onLeaveCanceled:v},{default:(0,a.w5)((()=>[t.value?((0,a.wg)(),(0,a.iD)("div",U)):(0,a.kq)("",!0)])),_:1})]))}};const R=(0,d.Z)(E,[["__scopeId","data-v-5d16f877"]]);var Z=R;const z={class:"wrapper"},J={class:"main"};var N={__name:"App",setup(e){let t=(0,l.iH)(""),n=(0,l.iH)(!1);const o=(0,l.iH)(),r=e=>{null!=e&&(t.value=e.value,n.value=!1,u())},s=()=>{n.value=!0,u()},u=()=>{o.value.showTodoList()};return(e,u)=>((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("header",null,[(0,a.Wm)(g)]),(0,a._)("div",J,[(0,a._)("article",null,[(0,a.Wm)(w,{onSetMessage:r}),(0,a.Wm)(H,{onAllMessageRemoved:s})]),(0,a._)("aside",null,[(0,a.Wm)(O,{ref_key:"todoListRef",ref:o,message:(0,l.SU)(t),isRemovedFlag:(0,l.SU)(n)},null,8,["message","isRemovedFlag"])])]),(0,a.Wm)(q),(0,a.Wm)(Z)]))}};const Y=N;var B=Y;const K=(0,o.ri)(B);K.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],l=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,r=o[0],s=o[1],u=o[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(o);i<r.length;i++)l=r[i],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunksample_project"]=self["webpackChunksample_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9531)}));o=n.O(o)})();
//# sourceMappingURL=app.7adfb8f2.js.map