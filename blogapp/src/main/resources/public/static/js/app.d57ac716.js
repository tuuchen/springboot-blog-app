(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],f=0,u=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("router-view")],1)},n=[],o=(s("034f"),s("2877")),i={},c=Object(o["a"])(i,r,n,!1,null,null,null),d=c.exports,l=s("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{attrs:{okVariant:"danger",size:"lg",id:"modalPopover",title:"Error log",scrollable:"","ok-only":""}},e._l(e.errors,(function(t,a){return s("p",{key:a},[e._v(e._s(t))])})),0),s("b-input-group",{staticClass:"mb-4",staticStyle:{"max-width":"50rem",margin:"0 auto"}},[s("b-form-input",{staticClass:"mr-sm-2",attrs:{"aria-describedby":"input-live-help input-live-feedback",size:"lg",placeholder:"Hae paikkakuntaa"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getWeather(e.text))}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),s("b-input-group-append",[s("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return e.getWeather(e.text)}}},[e._v("Haku")]),e.errors.length>0?s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalPopover",modifiers:{modalPopover:!0}}],attrs:{size:"md",variant:"outline-danger"}},[e._v(e._s(this.errors.length)+" errors")]):e._e()],1)],1),s("div",{staticStyle:{margin:"0 auto","max-width":"100rem"}},[s("b-row",[e.weather.name?s("b-col",{attrs:{lg:""}},[s("b-container",{staticStyle:{"max-width":"40rem"}},[s("H4",[e._v("Säätiedot nyt:")]),s("b-card",{staticClass:"mb-3",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[s("b-row",[s("b-col",[s("div",[s("h5",{staticClass:"mt-3"},[e._v(e._s(e.weather.name))])])]),s("b-col",[s("div",[s("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+e.weather.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)])],1)]},proxy:!0}],null,!1,515825739)},[s("b-media",[s("b-row",[s("b-col",[s("div",[e._v("Lämpötila: "+e._s(e.weather.main.temp)+"c")]),s("div",[e._v("Tuntuu kuin: "+e._s(e.weather.main.feels_like)+"c")]),s("div",[e._v("Minimi: "+e._s(e.weather.main.temp_min)+"c")]),s("div",[e._v("Maksimi: "+e._s(e.weather.main.temp_max)+"c")]),s("div",[e._v("Tuulen nopeus: "+e._s(e.weather.wind.speed)+"m/s")])]),s("b-col",[s("div",[e._v("Säätila: "+e._s(e.weather.weather[0].description))]),s("div",[e._v("Pilvisyys: "+e._s(e.weather.clouds.all)+"%")]),s("div",[e._v("Aurinko nousee: "+e._s(e._f("moment")(e.weather.sys.sunrise,"HH:mm")))]),s("div",[e._v("Aurinko laskee: "+e._s(e._f("moment")(e.weather.sys.sunset,"HH:mm")))])])],1)],1)],1)],1)],1):e._e(),e.forecast.list?s("b-col",{attrs:{lg:""}},[s("b-container",{staticStyle:{"max-width":"40rem"}},[s("H4",[e._v("Ennuste:")]),s("div",{staticStyle:{"overflow-y":"scroll",height:"40rem"}},e._l(e.forecast.list,(function(t,a){return s("b-card",{key:a,staticClass:"mb-4",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[s("b-row",[s("b-col",[s("div",[s("h5",{staticClass:"mt-3"},[e._v(e._s(e._f("moment")(t.dt,"DD.MM.YYYY, HH:mm")))])])]),s("b-col",[s("b-container",{attrs:{fluid:""}},[s("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)],1)],1)]},proxy:!0}],null,!0)},[s("b-media",[s("b-row",[s("b-col",[s("div",[e._v("Lämpötila: "+e._s(t.main.temp)+"c")]),s("div",[e._v("Tuntuu kuin: "+e._s(t.main.feels_like)+"c")]),s("div",[e._v("Minimi: "+e._s(t.main.temp_min)+"c")]),s("div",[e._v("Maksimi: "+e._s(t.main.temp_max)+"c")])]),s("b-col",[s("div",[e._v("Säätila: "+e._s(t.weather[0].description))]),s("div",[e._v("Pilvisyys: "+e._s(t.clouds.all)+"%")]),s("div",[e._v("Tuulen nopeus: "+e._s(t.wind.speed)+"m/s")])])],1)],1)],1)})),1)],1)],1):e._e()],1)],1)],1)},u=[],b=(s("d3b7"),s("25f0"),s("3ca3"),s("ddb0"),s("3835")),m=s("bc3a"),j=s.n(m),h=j.a.create({baseURL:"/api",timeout:5e3}),p={getResponse:function(e,t){return h.get("/"+e+"/"+t)}},v=s("c1df"),_=s.n(v),g={name:"Weather",data:function(){return{text:"",weather:[],forecast:[],errors:[]}},methods:{getWeather:function(e){var t=this;Promise.all([p.getResponse("weather",e),p.getResponse("forecast",e)]).then((function(e){var s=Object(b["a"])(e,2),a=s[0],r=s[1];"200"!=a.data.cod?t.errorHandler(a):(t.forecast=r.data,t.weather=a.data)})).catch((function(e){t.errors.push(_()(new Date).format("DD.MM.YYYY, HH:mm")+" "+e.toString()),t.showError(e.toString())})),this.text=""},showError:function(e){var t=this;this.$bvModal.msgBoxOk(e,{id:"alert",title:"",size:"lg",okTitle:"Ok",okVariant:"danger",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0"}),setTimeout((function(){t.$bvModal.hide("alert")}),4e3)},errorHandler:function(e){this.errors.push(_()(new Date).format("DD.MM.YYYY, HH:mm")+' Error:  "'+e.data.cod+'", "'+e.data.message+'" from city "'+e.config.url+'"'),this.showError(_()(new Date).format("DD.MM.YYYY, HH:mm")+' Error:  "'+e.data.cod+'", "'+e.data.message+'" from city "'+e.config.url+'"')}},mounted:function(){this.getWeather("Helsinki")}},y=g,k=Object(o["a"])(y,f,u,!1,null,"a569f392",null),w=k.exports;a["default"].use(l["a"]);var x=[{path:"/",name:"Home",component:w},{path:"*",redirect:"/"}],z=new l["a"]({mode:"history",base:"/",routes:x}),O=z,H=(s("f9e3"),s("2dd8"),s("5f5b")),M=s("b1e0");a["default"].use(s("2ead")),a["default"].use(H["a"]),a["default"].use(M["a"]),a["default"].config.productionTip=!1,new a["default"]({router:O,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.d57ac716.js.map