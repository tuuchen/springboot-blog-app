(function(e){function t(t){for(var s,i,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},n=[],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,r,n,!1,null,null,null),d=c.exports,l=a("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{attrs:{okVariant:"danger",size:"lg",id:"modalPopover",title:"Error log",scrollable:"","ok-only":""}},e._l(e.errors,(function(t,s){return a("p",{key:s},[e._v(e._s(t))])})),0),a("b-input-group",{staticClass:"mb-4",staticStyle:{"max-width":"50rem",margin:"0 auto"}},[a("b-form-input",{staticClass:"mr-sm-2",attrs:{"aria-describedby":"input-live-help input-live-feedback",state:e.nameState,size:"lg",placeholder:"Hae paikkakuntaa"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getWeather(e.text))},click:e.clearState},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),a("b-input-group-append",[a("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return e.getWeather(e.text)}}},[e._v("Haku")]),e.errors.length>0?a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalPopover",modifiers:{modalPopover:!0}}],attrs:{size:"md",variant:"outline-danger"}},[e._v("Error log")]):e._e()],1),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v("Syötä haku")])],1),a("div",{staticStyle:{margin:"0 auto","max-width":"100rem"}},[a("b-row",[e.weather.name?a("b-col",{attrs:{lg:""}},[a("b-container",{staticStyle:{"max-width":"40rem"}},[a("H4",[e._v("Säätiedot nyt:")]),a("b-card",{staticClass:"mb-3",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[a("b-row",[a("b-col",[a("div",[a("h5",{staticClass:"mt-3"},[e._v(e._s(e.weather.name))])])]),a("b-col",[a("div",[a("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+e.weather.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)])],1)]},proxy:!0}],null,!1,515825739)},[a("b-media",[a("b-row",[a("b-col",[a("div",[e._v("Lämpötila: "+e._s(e.weather.main.temp)+"c")]),a("div",[e._v("Tuntuu kuin: "+e._s(e.weather.main.feels_like)+"c")]),a("div",[e._v("Minimi: "+e._s(e.weather.main.temp_min)+"c")]),a("div",[e._v("Maksimi: "+e._s(e.weather.main.temp_max)+"c")]),a("div",[e._v("Tuulen nopeus: "+e._s(e.weather.wind.speed)+"m/s")])]),a("b-col",[a("div",[e._v("Säätila: "+e._s(e.weather.weather[0].description))]),a("div",[e._v("Pilvisyys: "+e._s(e.weather.clouds.all)+"%")]),a("div",[e._v("Aurinko nousee: "+e._s(e._f("moment")(e.weather.sys.sunrise,"HH:mm")))]),a("div",[e._v("Aurinko laskee: "+e._s(e._f("moment")(e.weather.sys.sunset,"HH:mm")))])])],1)],1)],1)],1)],1):e._e(),e.forecast.list?a("b-col",{attrs:{lg:""}},[a("b-container",{staticStyle:{"max-width":"40rem"}},[a("H4",[e._v("Ennuste:")]),a("div",{staticStyle:{"overflow-y":"scroll",height:"40rem"}},e._l(e.forecast.list,(function(t,s){return a("b-card",{key:s,staticClass:"mb-4",attrs:{"header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[a("b-row",[a("b-col",[a("div",[a("h5",{staticClass:"mt-3"},[e._v(e._s(e._f("moment")(t.dt,"DD.MM.YYYY, HH:mm")))])])]),a("b-col",[a("b-container",{attrs:{fluid:""}},[a("b-img",{attrs:{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png","blank-color":"#ccc",fluid:""}})],1)],1)],1)]},proxy:!0}],null,!0)},[a("b-media",[a("b-row",[a("b-col",[a("div",[e._v("Lämpötila: "+e._s(t.main.temp)+"c")]),a("div",[e._v("Tuntuu kuin: "+e._s(t.main.feels_like)+"c")]),a("div",[e._v("Minimi: "+e._s(t.main.temp_min)+"c")]),a("div",[e._v("Maksimi: "+e._s(t.main.temp_max)+"c")])]),a("b-col",[a("div",[e._v("Säätila: "+e._s(t.weather[0].description))]),a("div",[e._v("Pilvisyys: "+e._s(t.clouds.all)+"%")]),a("div",[e._v("Tuulen nopeus: "+e._s(t.wind.speed)+"m/s")])])],1)],1)],1)})),1)],1)],1):e._e()],1)],1)],1)},f=[],b=(a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("ddb0"),a("3835")),m=a("bc3a"),j=a.n(m),p=j.a.create({baseURL:"/api",timeout:5e3}),h={getResponse:function(e,t){return p.get("/"+e+"/"+t)}},v=a("c1df"),_=a.n(v),k={name:"Weather",data:function(){return{nameState:null,text:"",weather:[],forecast:[],errors:[]}},methods:{getWeather:function(e){var t=this;/^\s/.test(e)||""==e?this.nameState=!1:(e=e.replace(/\s+$/,""),Promise.all([h.getResponse("weather",e),h.getResponse("forecast",e)]).then((function(e){var a=Object(b["a"])(e,2),s=a[0],r=a[1];"200"==s.data.cod?(t.forecast=r.data,t.weather=s.data):t.errorHandler(s)})).catch((function(e){t.errors.push(_()(new Date).format("DD.MM.YYYY, HH:mm")+" "+e.toString()),t.showError(e.toString())}))),this.text=""},showError:function(e){var t=this;this.$bvModal.msgBoxOk(e,{id:"alert",title:"",size:"lg",okTitle:"Ok",okVariant:"danger",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0"}),setTimeout((function(){t.$bvModal.hide("alert")}),5e3)},errorHandler:function(e){this.errors.push(_()(new Date).format("DD.MM.YYYY, HH:mm")+" Error: "+e.data.cod+", "+e.data.message+" from "+e.config.url),this.showError("Kaupunkia ei löytynyt!")},clearState:function(){this.nameState=null}},mounted:function(){this.getWeather("Helsinki")}},g=k,y=Object(i["a"])(g,u,f,!1,null,"031cf430",null),w=y.exports;s["default"].use(l["a"]);var x=[{path:"/",name:"Home",component:w},{path:"*",redirect:"/"}],z=new l["a"]({mode:"history",base:"/",routes:x}),S=z,O=(a("f9e3"),a("2dd8"),a("5f5b")),H=a("b1e0");s["default"].use(a("2ead")),s["default"].use(O["a"]),s["default"].use(H["a"]),s["default"].config.productionTip=!1,new s["default"]({router:S,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.1f0d6e5a.js.map