(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5],{380:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("0ce79897",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("25b12613",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";n.r(e);var r={computed:{date:function(){return(new Date).getFullYear()}}},o=(n(386),n(92)),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("footer",{staticClass:"w-100 bg-pallet text-center d-flex justify-content-center align-items-center"},[t._v("\n   Copyright © "+t._s(t.date)+" -  Lucas Freitas\n")])}),[],!1,null,"7f3edf57",null);e.default=component.exports;installComponents(component,{Footer:n(382).default})},383:function(t,e,n){"use strict";n.r(e);var r={props:{active:{type:String}}},o=(n(384),n(92)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg bg-pallet"},[e("div",{staticClass:"container-fluid d-flex justify-content-between"},[e("NuxtLink",{staticClass:"navbar-brand text-white",attrs:{to:"/about"}},[t._v("Palleteria")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"}})])]),t._v(" "),e("b-collapse",{staticClass:"flex-grow-0",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"me-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"home"==t.active},attrs:{"aria-current":"page",to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"subscribe"==t.active},attrs:{"aria-current":"page",to:"/subscribe"}},[t._v("Cadastrar")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"subscriptions"==t.active},attrs:{"aria-current":"page",to:"/subscriptions"}},[t._v("Cadastros")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"about"==t.active},attrs:{"aria-current":"page",to:"/about"}},[t._v("Sobre")])],1)])],1)],1)])}),[],!1,null,"86a9cd3e",null);e.default=component.exports},384:function(t,e,n){"use strict";n(380)},385:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".bg-pallet[data-v-86a9cd3e]{background-color:#f2cf63}.nav-link[data-v-86a9cd3e]{color:#885f12}.nav-link[data-v-86a9cd3e]:hover{background-color:#e3bb72;border-radius:8px;color:#533909}.active[data-v-86a9cd3e]{color:#442f08!important}.active[data-v-86a9cd3e]:hover{color:#533909!important}a[data-v-86a9cd3e]{font-weight:700}.navbar[data-v-86a9cd3e]{border-bottom:1px solid rgba(219,166,68,.357);position:fixed;top:0;width:100%;z-index:9999}.navbar-brand[data-v-86a9cd3e]{font-size:1.25rem;padding:8px!important}",""]),r.locals={},t.exports=r},386:function(t,e,n){"use strict";n(381)},387:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".bg-pallet[data-v-7f3edf57]{background-color:#f2cf63;bottom:0;color:#fff;font-size:1rem;height:2rem;position:fixed;z-index:99}",""]),r.locals={},t.exports=r},389:function(t,e,n){"use strict";n.r(e);n(383);var r={name:"Layout",props:{page:{type:String,default:"home"}},mounted:function(){var t=this.$refs.navbar.$el.clientHeight,e=this.$refs.footer.$el.clientHeight,n=this.$refs.receiver;n instanceof HTMLElement&&(n.style.paddingTop="".concat(t,"px"),n.style.paddingBottom="".concat(e,"px"))}},o=n(92),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{ref:"navbar",attrs:{active:t.page}}),t._v(" "),e("div",{ref:"receiver",staticClass:"w-100 mt-3",attrs:{id:"main-slot-page"}},[t._t("default")],2),t._v(" "),e("Footer",{ref:"footer"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(383).default,Footer:n(382).default})}}]);