(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/inedx"],{"11e2":function(n,e,t){"use strict";t.r(e);var o=t("8791"),a=t("ae12");for(var c in a)"default"!==c&&function(n){t.d(e,n,(function(){return a[n]}))}(c);t("5625");var r,i=t("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"408ec7eb",null,!1,o["a"],r);e["default"]=u.exports},5625:function(n,e,t){"use strict";var o=t("75ae"),a=t.n(o);a.a},"75ae":function(n,e,t){},8791:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},c=[]},ae12:function(n,e,t){"use strict";t.r(e);var o=t("fc57"),a=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=a.a},fc57:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("a5c8"));function a(n){return n&&n.__esModule?n:{default:n}}var c=function(){t.e("components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip").then(function(){return resolve(t("eed8"))}.bind(null,t)).catch(t.oe)},r={components:{addTip:c},data:function(){return{tip:"点击「添加小程序」，下次访问更便捷",duration:1,scrollTop:0,old:{scrollTop:0},bannerList:[{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner3.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner1.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner2.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner.png"}],categories:[{cuIcon:"hotfill",color:"red",badge:"优惠",mid:"1",name:"学习技术"},{cuIcon:"colorlens",color:"orange",badge:1,mid:"2",name:"需求定制"},{cuIcon:"goodsnewfill",color:"yellow",badge:12,mid:"3",name:"商业项目"},{cuIcon:"calendar",color:"cyan",badge:22,mid:"4",name:"文章资讯"}],curriculum:[{name:"uniapp项目开发",content:"uniapp小程序商城系统开发，实战项目..."},{name:"后台管理系统",content:"vue+iview的后台管理系统建设系统开发..."},{name:"App模板",content:"基于uniapp开发的效率类APP，开发至上线..."},{name:"PC端官网开发",content:"html/css/jQuery建设的PC端官方门户网站..."},{name:"uniapp多端打包",content:"uniapp开发完成上线的打包流程，上架商店等..."}],projectList:o.default}},watch:{},mounted:function(){console.log(this.projectList)},methods:{scroll:function(n){console.log(n),this.old.scrollTop=n.detail.scrollTop},goCategorieslist:function(e){1==e.currentTarget.dataset.mid||2==e.currentTarget.dataset.mid?n.navigateTo({url:"../timeline?mid="+e.currentTarget.dataset.mid}):3==e.currentTarget.dataset.mid&&n.navigateTo({url:"../project/list"})},goProjectList:function(){n.navigateTo({url:"../project/list"})},goProject:function(){n.navigateTo({url:"../project/project"})},goVideo:function(){n.navigateTo({url:"../video"})}}};e.default=r}).call(this,t("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/inedx-create-component',
    {
        'pages/index/inedx-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("11e2"))
        })
    },
    [['pages/index/inedx-create-component']]
]);