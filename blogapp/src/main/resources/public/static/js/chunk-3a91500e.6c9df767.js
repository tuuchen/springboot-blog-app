(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a91500e"],{5084:function(t,e,s){"use strict";var n=s("a588"),o=s.n(n);o.a},8660:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"table"},[s("b-container",[s("b-table",{attrs:{selectable:"","select-mode":"single",busy:t.isBusy,hover:"","head-variant":"light",items:t.guestbook,fields:t.fields},on:{"row-selected":t.onRowSelected,"update:busy":function(e){t.isBusy=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-danger my-2"},[s("b-spinner",{staticClass:"align-middle"}),s("strong",[t._v("Loading...")])],1)]},proxy:!0}])})],1),s("b-container",[s("b-button",{staticClass:"mr-3",attrs:{variant:"success",size:"sm"},on:{click:t.showDetails}},[t._v("View post")]),s("b-button",{staticClass:"my-3",attrs:{variant:t.deleteBtnColor,size:"sm"},on:{click:t.deleteRow}},[t._v("Delete post")])],1)],1)])},o=[],i=s("be3b"),a={name:"Guestbook",data:function(){return{selected:[],fields:[{key:"username",sortable:!0},{key:"country",sortable:!0},{key:"date",sortable:!0},{key:"title",sortable:!0}]}},methods:{onRowSelected:function(t){this.selected=t,this.$store.state.details=t},deleteRow:function(){var t=this;if(this.selected.length>0){var e=this.selected[0].id;i["a"].deleteRow(e).then((function(e){t.$store.state.guestbook=e.data}))}},showDetails:function(){this.selected.length>0&&this.$router.push("/details")}},computed:{deleteBtnColor:function(){return this.selected.length>0?"danger":null},guestbook:function(){return this.$store.state.guestbook},isBusy:function(){return this.$store.state.busy}}},l=a,r=(s("5084"),s("2877")),c=Object(r["a"])(l,n,o,!1,null,"b469477c",null);e["default"]=c.exports},a588:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3a91500e.6c9df767.js.map