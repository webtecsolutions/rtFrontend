(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d64a2d13"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},"20cf":function(t,e,a){},"39e5":function(t,e,a){"use strict";var n=a("20cf"),r=a.n(n);r.a},4164:function(t,e,a){},"53d7":function(t,e,a){"use strict";var n=a("01f7"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[t.showDrawer?n("nav-drawer",{attrs:{items:t.navItems},on:{showDrawer:t.transitionend}}):t._e(),n("v-app-bar",{staticClass:"pt-4",attrs:{app:"",color:"#FFFFFF",tile:"",height:"70px",fixed:""}},[n("v-container",{staticClass:"d-flex align-center"},[t.$vuetify.breakpoint.mdAndDown?n("v-app-bar-nav-icon",{on:{click:function(e){t.showDrawer=!0}}},[t._t("default",[n("v-icon",{attrs:{size:"32",color:"primary"}},[t._v(t._s(t.mdiText))])])],2):t._e(),n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[n("v-img",{attrs:{src:a("d8f7"),width:t.$vuetify.breakpoint.smAndDown?100:200}})],1),n("div",{staticClass:"hidden-sm-and-down ml-md-14"},t._l(t.navItems,(function(e,a){return e.isMainNavItem?n("a",{key:a,staticClass:"nav-link pr-md-8",on:{click:function(a){return t.$router.push({name:e.linkTo,params:{id:e.linkParams}})}}},[t._v(" "+t._s(e.title)+" ")]):t._e()})),0),n("v-spacer"),n("a",{staticClass:"sign-in-link mr-8 hidden-xs-only"},[t._v(" Sign In ")]),n("primary-btn",{on:{click:function(e){return t.$router.push({name:"about",params:{navigateToFormOnMobile:!0}})}}})],1)],1),n("v-main",[n("router-view")],1),n("footer-comp",{attrs:{items:t.navItems}})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{temporary:"",app:"",width:"100%"},on:{transitionend:t.closeDrawer},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-icon",{attrs:{size:"35",color:"primary"},on:{click:t.closeDrawer}},[t._v(" "+t._s(t.mdiClose)+" ")]),a("v-layout",{attrs:{"justify-center":"","align-center":"","fill-height":"",column:""}},[a("ul",t._l(t.$attrs.items,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.$router.push({name:e.linkTo,params:{id:e.linkParams}})}}},[t._v(" "+t._s(e.title)+" ")])})),0),a("div",{staticClass:"btn-container"},[a("primary-btn",{attrs:{width:"100%"}})],1),a("a",[t._v("Sign In")])])],1)},s=[],l=a("94ed"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{color:"primary",height:"42",width:t.width,text:!t.backgroundColor,outlined:t.outlined,disabled:t.disabled,loading:t.loading},on:{click:t.btnClicked}},[t._v(" "+t._s(t.text)+" ")])},u=[],d={props:{text:{type:String,default:"Get started"},backgroundColor:{type:Boolean,default:!0},outlined:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},width:{type:String,default:"140"}},methods:{btnClicked:function(){this.$emit("click")}}},v=d,p=(a("f489"),a("2877")),m=a("6544"),f=a.n(m),h=a("8336"),_=Object(p["a"])(v,c,u,!1,null,null,null),w=_.exports;f()(_,{VBtn:h["a"]});var b={components:{PrimaryBtn:w},data:function(){return{drawer:!0,mdiClose:l["a"]}},methods:{closeDrawer:function(){this.$emit("showDrawer",!1)}}},y=b,g=(a("39e5"),a("132d")),k=a("a722"),x=a("f774"),C=Object(p["a"])(y,i,s,!1,null,null,null),A=C.exports;f()(C,{VIcon:g["a"],VLayout:k["a"],VNavigationDrawer:x["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"footer-with-nav",attrs:{color:"transparent"}},[n("v-container",[n("v-row",{staticClass:"sitemap-row",class:t.$vuetify.breakpoint.smAndDown?"":"pb-12",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"tagline-col",attrs:{sm:"12",md:"4",cols:"12"}},[n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[n("v-img",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":"",attrs:{src:a("d8f7"),width:"110",height:"42"}})],1),n("p",{staticClass:"mt-4 text-justify"},[t._v(" Record TIME is a mobile docketing system, that will replace your tedious paper systems and allow you to spend less time chasing paper docket approvals. ")]),n("p",{class:t.$vuetify.breakpoint.smAndDown?"text-center":""},[t._v("Support: 0421 955 630")])]),n("v-col",{staticClass:"sitemap-col hidden-sm-and-down",attrs:{sm:"12",md:"2",offset:t.$vuetify.breakpoint.xsOnly?0:1,cols:"12"}},[n("h3",[t._v("Company")]),n("ul",{staticClass:"mt-6"},[n("li",[t._v("About Us")]),n("li",[t._v("FAQ")]),n("li",[t._v("Our Blogs")])])]),n("v-col",{staticClass:"sitemap-col hidden-sm-and-down",attrs:{sm:"12",md:"2",cols:"12"}},[n("h3",[t._v("Resource")]),n("ul",{staticClass:"mt-6"},[n("li",[t._v("FAQs")]),n("li",[t._v("Contact Us")]),n("li",[t._v("Terms of Use")]),n("li",[t._v("License Agreement")]),n("li",[t._v("How To's")])])]),n("v-col",{staticClass:"sitemap-col hidden-sm-and-down",attrs:{sm:"12",md:"3",cols:"12"}},[n("h3",[t._v("Our Address")]),n("p",{staticClass:"mt-6"},[t._v(" ABN: 99 604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609 Support: 0421 955 630 ")]),n("div",{staticClass:"mt-10"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-avatar",{attrs:{size:"40"}},[n("v-icon",{attrs:{color:a?"#00c8d8":"#8298a8",size:"30"}},[t._v(t._s(t.mdiFacebook))])],1)]}}])}),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-avatar",{staticClass:"mx-4",attrs:{size:"40"}},[n("v-icon",{attrs:{color:a?"#00c8d8":"#8298a8",size:"30"}},[t._v(t._s(t.mdiGoogle))])],1)]}}])}),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-avatar",{attrs:{size:"40"}},[n("v-icon",{attrs:{color:a?"#00c8d8":"#8298a8",size:"30"}},[t._v(t._s(t.mdiTwitter))])],1)]}}])})],1)]),n("v-col",{staticClass:"sitemap-col hidden-md-and-up",attrs:{sm:"12",md:"3",cols:"12"}},[n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"pl-0",attrs:{"expand-icon":t.mdiPlus}},[t._v(" Company ")]),n("v-expansion-panel-content",[n("ul",[n("li",[t._v("About Us")]),n("li",[t._v("FAQ")]),n("li",[t._v("Our Blogs")])])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"pl-0",attrs:{"expand-icon":t.mdiPlus}},[t._v(" Resource ")]),n("v-expansion-panel-content",[n("ul",[n("li",[t._v("FAQs")]),n("li",[t._v("Contact Us")]),n("li",[t._v("Terms of Use")]),n("li",[t._v("License Agreement")]),n("li",[t._v("How To's")])])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"pl-0",attrs:{"expand-icon":t.mdiPlus}},[t._v(" Our Address ")]),n("v-expansion-panel-content",[n("p",[t._v(" ABN: 99 604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609 Support: 0421 955 630 ")]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"text-center":"mt-10"},[n("v-avatar",{attrs:{size:"40"}},[n("v-icon",{attrs:{color:"#8298a8",size:"30"}},[t._v(t._s(t.mdiFacebook))])],1),n("v-avatar",{staticClass:"mx-4",attrs:{size:"40"}},[n("v-icon",{attrs:{color:"#8298a8",size:"30"}},[t._v(t._s(t.mdiGoogle))])],1),n("v-avatar",{attrs:{size:"40"}},[n("v-icon",{attrs:{color:"#8298a8",size:"30"}},[t._v(t._s(t.mdiTwitter))])],1)],1)])],1)],1)],1)],1),n("v-row",{staticClass:"copyright-row pt-4",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[t._v(" © 2015-2020 Record Time Pty Ltd. All rights reserved. ")]),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[t._v("Privacy Policy")])],1)],1)],1)},P=[],V={data:function(){return{mdiFacebook:l["b"],mdiGoogle:l["c"],mdiTwitter:l["f"],mdiPlus:l["d"]}}},O=V,F=(a("53d7"),a("8212")),I=a("62ad"),$=a("a523"),S=a("cd55"),D=a("49e2"),j=a("c865"),B=a("0393"),z=a("553a"),M=a("ce87"),E=a("adda"),N=a("0fd9"),U=Object(p["a"])(O,T,P,!1,null,null,null),L=U.exports;f()(U,{VAvatar:F["a"],VCol:I["a"],VContainer:$["a"],VExpansionPanel:S["a"],VExpansionPanelContent:D["a"],VExpansionPanelHeader:j["a"],VExpansionPanels:B["a"],VFooter:z["a"],VHover:M["a"],VIcon:g["a"],VImg:E["a"],VRow:N["a"]});var H={components:{NavDrawer:A,PrimaryBtn:w,FooterComp:L},data:function(){return{showDrawer:!1,mdiText:l["e"],navItems:[{title:"Home",isMainNavItem:!0,linkTo:"home"},{title:"About Us",isMainNavItem:!0,linkTo:"about"},{title:"Features",isMainNavItem:!0,linkTo:"about"},{title:"Pricing",isMainNavItem:!0,linkTo:"about"},{title:"FAQs",isMainNavItem:!0,linkTo:"about"},{title:"Support",isMainNavItem:!0,linkTo:"about"}]}},methods:{transitionend:function(){this.showDrawer=!1}}},Q=H,R=(a("5c0b"),a("7496")),G=a("40dc"),J=a("5bc1"),q=a("f6c4"),K=a("2fa4"),W=Object(p["a"])(Q,r,o,!1,null,null,null),X=W.exports;f()(W,{VApp:R["a"],VAppBar:G["a"],VAppBarNavIcon:J["a"],VContainer:$["a"],VIcon:g["a"],VImg:E["a"],VMain:q["a"],VSpacer:K["a"]});var Y=a("8c4f");n["a"].use(Y["a"]);var Z=[{path:"/",name:"home",component:function(){return a.e("about").then(a.bind(null,"bb51"))}}],tt=new Y["a"]({mode:"history",routes:Z}),et=tt,at=a("f309"),nt=a("58ca");n["a"].use(at["a"]),n["a"].use(nt["a"]);var rt=new at["a"]({theme:{dark:!1,themes:{light:{primary:"#00C8D8",secondary:"#021222"}}}});n["a"].config.productionTip=!1,new n["a"]({router:et,vuetify:rt,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(t,e,a){},d8f7:function(t,e,a){t.exports=a.p+"img/logo-light.6f760af2.webp"},f489:function(t,e,a){"use strict";var n=a("4164"),r=a.n(n);r.a}});