(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4,5,7],{380:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("1b4a73b8",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("799232c4",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";n.r(e);var r={computed:{date:function(){return(new Date).getFullYear()}}},o=(n(387),n(92)),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("footer",{staticClass:"w-100 bg-pallet text-center d-flex justify-content-center align-items-center footer"},[t._v("\n   Copyright © "+t._s(t.date)+" -  Lucas Freitas\n")])}),[],!1,null,"d2ca2e0a",null);e.default=component.exports;installComponents(component,{Footer:n(382).default})},383:function(t,e,n){"use strict";n.r(e);var r={props:{active:{type:String}}},o=(n(385),n(92)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg bg-pallet"},[e("div",{staticClass:"container-fluid d-flex justify-content-between"},[e("NuxtLink",{staticClass:"navbar-brand text-white",attrs:{to:"/about"}},[t._v("Palleteria")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"}})])]),t._v(" "),e("b-collapse",{staticClass:"flex-grow-0",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"me-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"home"==t.active},attrs:{"aria-current":"page",to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"subscribe"==t.active},attrs:{"aria-current":"page",to:"/subscribe"}},[t._v("Cadastrar")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"subscriptions"==t.active},attrs:{"aria-current":"page",to:"/subscriptions"}},[t._v("Cadastros")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",class:{active:"about"==t.active},attrs:{"aria-current":"page",to:"/about"}},[t._v("Sobre")])],1)])],1)],1)])}),[],!1,null,"556a5477",null);e.default=component.exports},384:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("3603e5b0",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(380)},386:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".bg-pallet[data-v-556a5477]{background-color:#f2cf63}.nav-link[data-v-556a5477]{color:#885f12}.nav-link[data-v-556a5477]:hover{background-color:#e3bb72;border-radius:8px;color:#533909}.active[data-v-556a5477]{color:#442f08!important}.active[data-v-556a5477]:hover{color:#533909!important}a[data-v-556a5477]{font-weight:700}.navbar[data-v-556a5477]{border-bottom:1px solid rgba(219,166,68,.357);position:fixed;top:0;transition:.3s ease;width:100%;z-index:9999}.navbar-brand[data-v-556a5477]{font-size:1.25rem;padding:8px!important}",""]),r.locals={},t.exports=r},387:function(t,e,n){"use strict";n(381)},388:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".footer[data-v-d2ca2e0a]{position:relative}.footer-fixed[data-v-d2ca2e0a]{bottom:0!important;position:fixed!important}.bg-pallet[data-v-d2ca2e0a]{background-color:#f2cf63;color:#fff;font-size:1rem;font-weight:700;height:2rem}",""]),r.locals={},t.exports=r},389:function(t,e,n){"use strict";n(384)},390:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".footer-fixed[data-v-7df69905]{bottom:0!important;position:fixed!important}.scrolled[data-v-7df69905]{margin-top:-100%}",""]),r.locals={},t.exports=r},392:function(t,e,n){"use strict";n.r(e);n(383);var r={name:"Layout",props:{page:{type:String,default:"home"}},mounted:function(){var t=this.$refs.navbar.$el.clientHeight,e=this.$refs.footer.$el.clientHeight,n=this.$refs.receiver;n instanceof HTMLElement&&(n.style.paddingTop="".concat(t,"px"),n.style.paddingBottom="".concat(e,"px"));var footer=this.$refs.footer;document.documentElement.scrollHeight>document.documentElement.clientHeight?footer.$el.classList.remove("footer-fixed"):footer.$el.classList.add("footer-fixed");var r=this.$refs.navbar,o=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;r.$el.style.top=o>t||0===t?"0":"-".concat(r.$el.offsetHeight,"px"),o=t}}},o=(n(389),n(92)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{ref:"navbar",attrs:{active:t.page}}),t._v(" "),e("div",{ref:"receiver",staticClass:"w-100 mt-3",attrs:{id:"main-slot-page"}},[t._t("default")],2),t._v(" "),e("Footer",{ref:"footer"})],1)}),[],!1,null,"7df69905",null);e.default=component.exports;installComponents(component,{Navbar:n(383).default,Footer:n(382).default})},396:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("108bffe5",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n(396)},402:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".card[data-v-3f620a49]{max-width:90%;padding:1rem}@media (max-width:600px){.btn[data-v-3f620a49]{font-size:large;font-weight:bolder;padding:.5rem 1.5rem}}@media (min-width:601px){.btn[data-v-3f620a49]{font-size:large;font-weight:bolder;padding:.7rem 5rem}}@media (min-width:900px){.btn[data-v-3f620a49]{font-size:large;font-weight:bolder;padding:.7rem 5rem}.card[data-v-3f620a49]{max-width:70%;padding:1rem}}",""]),r.locals={},t.exports=r},406:function(t,e,n){"use strict";n.r(e);n(25),n(35),n(32);var r={data:function(){return{imagePreview:null,cpfMask:"",telefoneMask:"",email:"",image:""}},watch:{cpfMask:function(t){this.cpfMask=t.replace(/\D/g,"").replace(/(\d{11})(\d+)/g,"$1").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")},telefoneMask:function(t){this.telefoneMask=t.replace(/\D/g,"").replace(/(\d{10})(\d+)/g,"$1").replace(/^(\d{2})(\d{4,5})(\d{4})$/,"($1) $2-$3")}},methods:{previewImage:function(t){var e=this,img=t.target.files[0],n=img;this.image=img;var r=new FileReader;r.onload=function(t){e.imagePreview=t.target.result},r.readAsDataURL(n)},submitForm:function(){var t=this,e=this.cpfMask.replace(/\D/g,""),n=this.telefoneMask.replace(/\D/g,""),r=this.email,image=this.image,form=new FormData;form.append("cpf",e),form.append("telefone",n),form.append("email",r),form.append("imagem",image),this.$axios.post("/petiko-submit-form",form).then((function(e){console.log(e.data),t.alerts(e.data.mensagem,"success"),t.imagePreview=null,t.cpfMask="",t.telefoneMask="",t.email="",t.image="",document.getElementById("image").innerHTML=""})).catch((function(e){console.log(e),t.alerts("um erro ocorreu, tente novamente","danger")}))},alerts:function(t,e){var n=document.getElementById("liveAlertPlaceholder");!function(t,e){var r=document.createElement("div");r.innerHTML=['<div class="alert alert-'.concat(e,' alert-dismissible" role="alert">'),"   <div>".concat(t,"</div>"),'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),n.append(r)}(t,e)}}},o=(n(401),n(92)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card container"},[e("div",{attrs:{id:"liveAlertPlaceholder"}}),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"input-group mb-3"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cpfMask,expression:"cpfMask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"CPF","aria-label":"CPF","aria-describedby":"basic-addon2",required:""},domProps:{value:t.cpfMask},on:{input:function(e){e.target.composing||(t.cpfMask=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.telefoneMask,expression:"telefoneMask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Telefone","aria-label":"Telefone",required:""},domProps:{value:t.telefoneMask},on:{input:function(e){e.target.composing||(t.telefoneMask=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group mb-3"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",name:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"image"}},[t._v("Foto")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"file",id:"image"},on:{change:t.previewImage}}),t._v(" "),t.imagePreview?e("div",{staticClass:"mt-2"},[e("img",{staticClass:"img-thumbnail",attrs:{width:"200px",src:t.imagePreview,alt:"Image preview"}})]):t._e()]),t._v(" "),t._m(3)])])}),[function(){var t=this._self._c;return t("span",{staticClass:"input-group-text"},[t("i",{staticClass:"bi bi-person-circle"})])},function(){var t=this._self._c;return t("span",{staticClass:"input-group-text"},[t("i",{staticClass:"bi bi-telephone-fill"})])},function(){var t=this._self._c;return t("span",{staticClass:"input-group-text"},[t("i",{staticClass:"bi bi-envelope"})])},function(){var t=this._self._c;return t("div",{staticClass:"container-fluid d-flex justify-content-center"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[this._v("Enviar")])])}],!1,null,"3f620a49",null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{page:"subscribe"}}},o=n(92),component=Object(o.a)(r,(function(){var t=this._self._c;return t("Layout",{attrs:{page:this.page}},[t("SubscribeForm")],1)}),[],!1,null,"79570741",null);e.default=component.exports;installComponents(component,{SubscribeForm:n(406).default,Layout:n(392).default})}}]);