(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d7fd1b"],{"5f7a":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-shelf"},[s("shelf-title",{attrs:{title:t.$t("shelf.title")}}),s("scroll",{ref:"scroll",staticClass:"store-shelf-scroll-wrapper",attrs:{top:0,bottom:t.scrollBottom},on:{onScroll:t.onScroll}},[s("shelf-search"),s("shelf-list",{attrs:{data:t.shelfList}})],1),s("shelf-footer")],1)},i=[],a=s("0093"),l=s("ac0d"),n=s("6701"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shelf-search-wrapper",class:{"search-top":t.ifInputClicked,"hide-shadow":t.ifHideShadow}},[s("div",{staticClass:"shelf-search",class:{"search-top":t.ifInputClicked}},[s("div",{staticClass:"search-wrapper"},[t._m(0),s("div",{staticClass:"search-input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:t.$t("shelf.search")},domProps:{value:t.searchText},on:{click:t.onSearchClick,input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchText.length>0,expression:"searchText.length > 0"}],staticClass:"icon-clear-wrapper",on:{click:t.clearSearchText}},[s("span",{staticClass:"icon-close-circle-fill"})])]),t.ifInputClicked?s("div",{staticClass:"cancel-btn-wrapper",on:{click:t.onCancelClick}},[s("span",{staticClass:"cancel-text"},[t._v(t._s(t.$t("shelf.cancel")))])]):s("div",{staticClass:"icon-locale-wrapper",on:{click:t.switchLocale}},["cn"===t.lang?s("span",{staticClass:"icon-cn icon"}):s("span",{staticClass:"icon-en icon"})])]),s("transition",{attrs:{name:"hot-search-move"}},[t.ifInputClicked?s("div",{staticClass:"shelf-search-tab-wrapper"},t._l(t.tabs,(function(e){return s("div",{key:e.id,staticClass:"shelf-search-tab-item",on:{click:function(s){return t.onTabClick(e.id)}}},[s("span",{staticClass:"shelf-search-tab-text",class:{"is-selected":e.id===t.selectedTab}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-search-wrapper"},[s("span",{staticClass:"icon-search icon"})])}],h=s("5657"),f={mixins:[l["c"]],computed:{lang:function(){return this.$i18n.locale},tabs:function(){return[{id:1,text:this.$t("shelf.default")},{id:2,text:this.$t("shelf.progress")},{id:3,text:this.$t("shelf.purchase")}]}},watch:{offsetY:function(t){t>0&&this.ifInputClicked?this.ifHideShadow=!1:this.ifHideShadow=!0}},data:function(){return{ifInputClicked:!1,searchText:"",selectedTab:1,ifHideShadow:!0}},methods:{onSearchClick:function(){this.ifInputClicked=!0,this.setShelfTitleVisible(!1)},onCancelClick:function(){this.ifInputClicked=!1,this.setShelfTitleVisible(!0)},switchLocale:function(){"en"===this.lang?this.$i18n.locale="cn":this.$i18n.locale="en",Object(h["t"])("locale",this.$i18n.locale)},clearSearchText:function(){this.searchText=""},onTabClick:function(t){this.selectedTab=t}}},d=f,u=(s("c169"),s("4023")),p=Object(u["a"])(d,r,o,!1,null,"61355900",null),C=p.exports,v=s("b1a9"),w=s("c447"),m={mixins:[l["c"]],components:{Scroll:n["a"],ShelfTitle:a["a"],ShelfSearch:C,ShelfList:v["a"],shelfFooter:w["a"]},watch:{isEditMode:function(t){var e=this;this.scrollBottom=t?48:0,this.$nextTick((function(){e.$refs.scroll.refresh()}))}},data:function(){return{scrollBottom:0}},methods:{onScroll:function(t){this.setOffsetY(t)}},mounted:function(){this.getShelfList(),this.setShelfCategory([]),this.setCurrentType(1)}},k=m,x=(s("6b92"),Object(u["a"])(k,c,i,!1,null,"5275c31e",null));e["default"]=x.exports},"6b92":function(t,e,s){"use strict";var c=s("6de2"),i=s.n(c);i.a},"6de2":function(t,e,s){},c169:function(t,e,s){"use strict";var c=s("c4d8"),i=s.n(c);i.a},c4d8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-66d7fd1b.ce4f53ee.js.map