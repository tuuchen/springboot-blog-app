(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)},i=[],o=(r("034f"),r("2877")),s={},u=Object(o["a"])(s,a,i,!1,null,null,null),c=u.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-input-group",{staticClass:"mb-4",staticStyle:{"max-width":"50rem",margin:"0 auto"}},[r("b-form-input",{staticClass:"mr-sm-2",attrs:{"aria-describedby":"input-live-help input-live-feedback",size:"lg",placeholder:"Hae paikkakuntaa"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getWeather(e.text))}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),r("b-input-group-append",[r("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return e.getWeather(e.text)}}},[e._v("Haku")])],1)],1),r("div",{staticStyle:{margin:"0 auto","max-width":"100rem"}},[r("b-row",[e.weather.name?r("b-col",{attrs:{lg:""}},[r("b-container",{staticStyle:{"max-width":"40rem"}},[r("H4",[e._v("Säätiedot nyt:")]),r("b-card",{staticClass:"mb-3",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("b-row",[r("b-col",[r("div",[r("h5",{staticClass:"mt-3"},[e._v(e._s(e.weather.name))])])]),r("b-col",[r("div",[r("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+e.weather.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)])],1)]},proxy:!0}],null,!1,515825739)},[r("b-media",[r("b-row",[r("b-col",[r("div",[e._v("Lämpötila: "+e._s(e.weather.main.temp)+"c")]),r("div",[e._v("Tuntuu kuin: "+e._s(e.weather.main.feels_like)+"c")]),r("div",[e._v("Minimi: "+e._s(e.weather.main.temp_min)+"c")]),r("div",[e._v("Maksimi: "+e._s(e.weather.main.temp_max)+"c")]),r("div",[e._v("Tuulen nopeus: "+e._s(e.weather.wind.speed)+"m/s")])]),r("b-col",[r("div",[e._v('Säätila: "'+e._s(e.weather.weather[0].description)+'"')]),r("div",[e._v("Pilvisyys: "+e._s(e.weather.clouds.all)+"%")]),r("div",[e._v("Aurinko nousee: "+e._s(e.formatTime(e.weather.sys.sunrise)))]),r("div",[e._v("Aurinko laskee: "+e._s(e.formatTime(e.weather.sys.sunset)))])])],1)],1)],1)],1)],1):e._e(),e.forecast.list?r("b-col",{attrs:{lg:""}},[r("b-container",{staticStyle:{"max-width":"40rem"}},[r("H4",[e._v("Tuleva sää:")]),r("div",{staticStyle:{"overflow-y":"scroll",height:"40rem"}},e._l(e.forecast.list,(function(t,n){return r("b-card",{key:n,staticClass:"mb-4",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("b-row",[r("b-col",[r("div",[r("h5",{staticClass:"mt-3"},[e._v(e._s(t.dt_txt))])])])],1)]},proxy:!0}],null,!0)},[r("b-media",[r("b-row",[r("b-col",[r("div",[e._v("Lämpötila: "+e._s(t.main.temp)+"c")]),r("div",[e._v("Tuntuu kuin: "+e._s(t.main.feels_like)+"c")]),r("div",[e._v("Minimi: "+e._s(t.main.temp_min)+"c")]),r("div",[e._v("Maksimi: "+e._s(t.main.temp_max)+"c")])]),r("b-col",[r("div",[e._v('Säätila: "'+e._s(t.weather[0].description)+'"')]),r("div",[e._v("Pilvisyys: "+e._s(t.clouds.all)+"%")]),r("div",[e._v("Tuulen nopeus: "+e._s(t.wind.speed)+"m/s")])])],1)],1)],1)})),1)],1)],1):e._e()],1)],1)],1)},p=[],f=r("bc3a"),v=r.n(f),m=v.a.create({baseURL:"/api",timeout:5e3}),h={getResponse:function(e,t){return m.get("/"+e+"/"+t)}},_={name:"Weather",data:function(){return{text:"",weather:[],forecast:[],errors:[]}},methods:{getWeather:function(e){var t=this;h.getResponse("weather",e).then((function(e){t.weather=e.data})).catch((function(e){t.errors.push(e)})),h.getResponse("forecast",e).then((function(e){t.forecast=e.data})).catch((function(e){t.errors.push(e)})),this.text=""},formatTime:function(e){var t=new Date(1e3*e),r=t.getHours(),n=t.getMinutes();return r+":"+n}},mounted:function(){this.getWeather("helsinki")}},b=_,w=Object(o["a"])(b,d,p,!1,null,"08d0db80",null),y=w.exports;n["default"].use(l["a"]);var g=[{path:"/",name:"Home",component:y}],k=new l["a"]({mode:"history",base:"/",routes:g}),x=k,S=(r("f9e3"),r("2dd8"),r("5f5b")),O=r("b1e0");n["default"].use(S["a"]),n["default"].use(O["a"]),n["default"].config.productionTip=!1,new n["default"]({router:x,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.b911c5bd.js.map