(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],s=(n("034f"),n("2877")),o={},u=Object(s["a"])(o,a,i,!1,null,null,null),c=u.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-input-group",{staticClass:"mt-3",staticStyle:{width:"50rem",margin:"0 auto 3rem auto"}},[n("b-form-input",{staticClass:"mr-sm-2",attrs:{"aria-describedby":"input-live-help input-live-feedback",size:"lg",placeholder:"Hae paikkakuntaa"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getWeather(e.text))}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("b-input-group-append",[n("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return e.getWeather(e.text)}}},[e._v("Haku")])],1)],1),n("div",{staticStyle:{margin:"0 auto","max-width":"100rem"}},[n("b-row",[e.weather.name?n("b-col",{attrs:{lg:""}},[n("b-container",{staticStyle:{"max-width":"40rem"}},[n("H4",[e._v("Säätiedot nyt:")]),n("b-card",{staticClass:"mb-3",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[n("b-row",[n("b-col",[n("div",[n("h5",{staticClass:"mt-3"},[e._v(e._s(e.weather.name))])])]),n("b-col",[n("div")]),n("b-col",[n("div",[n("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+e.weather.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)])],1)]},proxy:!0}],null,!1,645103161)},[n("b-media",[n("b-row",[n("b-col",[n("div",[e._v("Lämpötila: "+e._s(e.weather.main.temp)+"c")]),n("div",[e._v("Tuntuu kuin: "+e._s(e.weather.main.feels_like)+"c")]),n("div",[e._v("Minimi: "+e._s(e.weather.main.temp_min)+"c")]),n("div",[e._v("Maksimi: "+e._s(e.weather.main.temp_max)+"c")]),n("div",[e._v("Tuulen nopeus: "+e._s(e.weather.wind.speed)+"m/s")])]),n("b-col",[n("div",[e._v('Säätila: "'+e._s(e.weather.weather[0].description)+'"')]),n("div",[e._v("Pilvisyys: "+e._s(e.weather.clouds.all)+"%")]),n("div",[e._v("Aurinko nousee: "+e._s(e.sunrise))]),n("div",[e._v("Aurinko laskee: "+e._s(e.sunset))])])],1)],1)],1)],1)],1):e._e(),e.forecast.list?n("b-col",{attrs:{lg:""}},[n("b-container",{staticStyle:{"max-width":"40rem"}},[n("H4",[e._v("Tuleva sää:")]),n("div",{staticStyle:{"overflow-y":"scroll",height:"40rem"}},e._l(e.forecast.list,(function(t,r){return n("b-card",{key:r,staticClass:"mb-4",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[n("b-row",[n("b-col",[n("div",[n("h5",{staticClass:"mt-3"},[e._v(e._s(t.dt_txt))])])])],1)]},proxy:!0}],null,!0)},[n("b-media",[n("b-row",[n("b-col",[n("div",[e._v("Lämpötila: "+e._s(t.main.temp)+"c")]),n("div",[e._v("Tuntuu kuin: "+e._s(t.main.feels_like)+"c")]),n("div",[e._v("Minimi: "+e._s(t.main.temp_min)+"c")]),n("div",[e._v("Maksimi: "+e._s(t.main.temp_max)+"c")]),n("div",[e._v("Tuulen nopeus: "+e._s(t.wind.speed)+"m/s")])]),n("b-col",[n("div",[e._v('Säätila: "'+e._s(t.weather[0].description)+'"')]),n("div",[e._v("Pilvisyys: "+e._s(t.clouds.all)+"%")]),n("div",[e._v("Aurinko nousee: "+e._s(e.sunrise))]),n("div",[e._v("Aurinko laskee: "+e._s(e.sunset))])])],1)],1)],1)})),1)],1)],1):e._e()],1)],1)],1)},p=[],f=n("bc3a"),v=n.n(f),h=v.a.create({baseURL:"/api",timeout:5e3}),m={getResponse:function(e,t){return h.get("/"+e+"/"+t)}},_={name:"Weather",data:function(){return{text:"",weather:[],forecast:[],errors:[]}},methods:{getWeather:function(e){var t=this;m.getResponse("weather",e).then((function(e){t.weather=e.data})).catch((function(e){t.errors.push(e)})),m.getResponse("forecast",e).then((function(e){t.forecast=e.data})).catch((function(e){t.errors.push(e)})),this.text=""}},computed:{sunrise:function(){var e=new Date(1e3*this.weather.sys.sunrise),t=e.getHours(),n=e.getMinutes();return t+":"+n},sunset:function(){var e=new Date(1e3*this.weather.sys.sunset),t=e.getHours(),n=e.getMinutes();return t+":"+n}},mounted:function(){this.getWeather("helsinki")}},b=_,w=(n("d30f"),Object(s["a"])(b,d,p,!1,null,"34cb187a",null)),y=w.exports;r["default"].use(l["a"]);var g=[{path:"/",name:"Home",component:y}],k=new l["a"]({mode:"history",base:"/",routes:g}),x=k,S=(n("f9e3"),n("2dd8"),n("5f5b")),O=n("b1e0");r["default"].use(S["a"]),r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({router:x,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},b0c3:function(e,t,n){},d30f:function(e,t,n){"use strict";var r=n("b0c3"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6dc1400d.js.map