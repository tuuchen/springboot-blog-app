(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6d03c1c"],{"25f0":function(t,e,r){"use strict";var o=r("6eeb"),a=r("825a"),n=r("d039"),s=r("ad6d"),i="toString",u=RegExp.prototype,m=u[i],c=n((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),l=m.name!=i;(c||l)&&o(RegExp.prototype,i,(function(){var t=a(this),e=String(t.source),r=t.flags,o=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?s.call(t):r);return"/"+e+"/"+o}),{unsafe:!0})},"6fea":function(t,e,r){"use strict";var o=r("e2ca"),a=r.n(o);a.a},"7e55":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add"},[r("b-container",[r("b-card",{attrs:{title:"P1: Guestbook application form","bg-variant":"light"}},[r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Enter name"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Country:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter country"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Your Message:","label-for":"input-3"}},[r("b-form-textarea",{attrs:{required:"","label-for":"input-3",id:"input-2",placeholder:"Enter message...",rows:"3","max-rows":"6"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),r("b-button",{staticClass:"mr-3",attrs:{type:"submit",variant:"success"}},[t._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1),t.submittedForm?r("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[r("pre",{staticClass:"m-0"},[t._v(t._s(t.submittedForm))])]):t._e()],1)],1)],1)},a=[],n=(r("d3b7"),r("25f0"),r("be3b")),s={name:"Add",data:function(){return{form:{id:"",username:"",country:"",date:"",message:""},submittedForm:""}},methods:{onSubmit:function(t){t.preventDefault(),this.form.id=(this.$store.state.guestbook.length+1).toString(),this.form.date=(new Date).toString(),n["a"].postForm(JSON.stringify(this.form)).then((function(t){return console.log(t)+"\n"(t.data)})),this.resetForm()},onReset:function(t){t.preventDefault(),this.resetForm()},resetForm:function(){this.form.id="",this.form.username="",this.form.country="",this.form.date="",this.form.message=""}}},i=s,u=(r("6fea"),r("2877")),m=Object(u["a"])(i,o,a,!1,null,"7aedc6fd",null);e["default"]=m.exports},ad6d:function(t,e,r){"use strict";var o=r("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},e2ca:function(t,e,r){}}]);
//# sourceMappingURL=chunk-f6d03c1c.f3675a29.js.map