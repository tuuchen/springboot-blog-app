(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-12a977fe":"d97892a6","chunk-1c029b06":"a51b860f","chunk-d71a9744":"2d155027"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1c029b06":1,"chunk-d71a9744":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-12a977fe":"31d6cfe0","chunk-1c029b06":"a91c2398","chunk-d71a9744":"4db1092a"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},3903:function(e,t,n){"use strict";var r=n("a99d"),o=n.n(r);o.a},4307:function(e,t,n){"use strict";var r=n("e70c"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{"router-link":"",to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{"router-link":"",to:"/guestbook"}},[e._v("View guestbook")]),n("b-nav-item",{attrs:{"router-link":"",to:"/add"}},[e._v("Add entry")])],1)],1),n("router-view")],1)},a=[],u={name:"App",mounted:function(){}},s=u,i=(n("034f"),n("2877")),c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("b-container",[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoaded,expression:"!isLoaded"}]},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoaded,expression:"isLoaded"}]},[r("img",{attrs:{alt:"Vue logo",src:n("aba8")},on:{load:e.onImgLoad}})]),r("HelloWorld",{attrs:{msg:"Welcome to Vue.js Express app"}})],1)],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},h=[],v={name:"HelloWorld",props:{msg:String}},b=v,g=(n("3903"),Object(i["a"])(b,m,h,!1,null,"2506b2d0",null)),y=g.exports,k={name:"Home",components:{HelloWorld:y},data:function(){return{isLoaded:!1}},methods:{onImgLoad:function(){this.isLoaded=!0}}},w=k,_=(n("4307"),Object(i["a"])(w,f,p,!1,null,"20660b6c",null)),j=_.exports;r["default"].use(d["a"]);var x=[{path:"/",name:"Home",component:j},{path:"/add",name:"Add",component:function(){return Promise.all([n.e("chunk-12a977fe"),n.e("chunk-d71a9744")]).then(n.bind(null,"7e55"))}},{path:"/guestbook",name:"Guestbook",component:function(){return Promise.all([n.e("chunk-12a977fe"),n.e("chunk-1c029b06")]).then(n.bind(null,"8660"))}},{path:"*",redirect:"/"}],O=new d["a"]({mode:"history",base:"/",routes:x}),E=O,L=n("2f62");r["default"].use(L["a"]);var P=new L["a"].Store({state:{guestbook:[],busy:!0},mutations:{},actions:{},modules:{}}),S=n("5f5b"),A=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(S["a"]),r["default"].use(A["a"]),r["default"].config.productionTip=!1,new r["default"]({router:E,store:P,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},a99d:function(e,t,n){},aba8:function(e,t,n){e.exports=n.p+"static/img/express.58180938.png"},e70c:function(e,t,n){}});
//# sourceMappingURL=app.47d831bb.js.map