(function(t){function e(e){for(var a,o,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],n[o]&&d.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},c=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d2294a0":"2c0b85ec"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,a){r=n[t]=[e,a]});e.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t),c=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+c+")");o.type=a,o.request=c,r[1](o)}n[t]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/store-example/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1d0a":function(t,e,r){},"35ee":function(t,e,r){"use strict";var a=r("8757"),n=r.n(a);n.a},"561b":function(t,e,r){"use strict";var a=r("90e6"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],o=(r("c796"),r("2877")),i={},s=Object(o["a"])(i,n,c,!1,null,null,null),u=s.exports,l=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("cart-drawer"),r("div",{staticClass:"catalog"},t._l(t.catalogData,function(t,e){return r("catalog-category",{key:e,attrs:{"category-data":t}})}),1)],1)},d=[],p=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),m=r("2f62"),b="getGoods",g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catalog-category"},[r("div",{staticClass:"catalog-category__name"},[t._v("\n    "+t._s(t.categoryData.G)+"\n  ")]),r("div",{staticClass:"catalog-category__products"},t._l(t.categoryData.B,function(t,e){return r("catalog-product",{key:e,attrs:{id:e,name:t.N,count:t.T,price:t.C}})}),1)])},v=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"catalog-product"},[a("div",{staticClass:"catalog-product__name"},[t._v("\n    "+t._s(t.name)+" "+t._s(t.count?"("+t.count+")":"")+"\n  ")]),a("div",{staticClass:"catalog-product__price"},[t.price?a("span",{class:t.catalogProductClass},[t._v("\n      "+t._s(t._f("formatPrice")(t.price*t.exchangeRate.current))+"\n    ")]):a("span",[t._v("-")])]),a("div",{staticClass:"catalog-product__add"},[t.price?a("img",{staticClass:"catalog-product__add-icon",attrs:{src:r("daca"),alt:""},on:{click:function(e){return t.addCartItem({id:t.id,name:t.name,price:t.price})}}}):t._e()])])},O=[];r("c5f6");function h(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RU-ru",r=new Intl.NumberFormat(e,{currency:"RUB",style:"currency",minimumFractionDigits:2});return r.format(t)}var j="setStore",w="setExchangeRate",C="addCartItem",P="removeCartItem",D="setCartItemCount",T="setCartSummary";function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(r,!0).forEach(function(e){Object(p["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var k={name:"CatalogProduct",filters:{formatPrice:_},props:{id:{type:String,default:""},name:{type:String,default:"",required:!0},count:{type:Number,default:0},price:{type:Number,default:0,required:!0}},computed:x({},Object(m["e"])(["exchangeRate"]),{},Object(m["c"])(["getDifference"]),{catalogProductClass:function(){return{"catalog-product__price-highlight":!0,"catalog-product__price-highlight_red":"up"===this.getDifference,"catalog-product__price-highlight_green":"down"===this.getDifference}}}),methods:x({},Object(m["d"])("cart",[C]))},S=k,E=(r("561b"),Object(o["a"])(S,y,O,!1,null,null,null)),R=E.exports,B={name:"CatalogCategory",components:{CatalogProduct:R},props:{categoryData:{type:Object,default:function(){}}}},G=B,I=(r("af04"),Object(o["a"])(G,g,v,!1,null,null,null)),M=I.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("transition",{attrs:{name:"slide-fade"}},[t.visible?r("div",{staticClass:"cart__drawer"},[r("div",{staticClass:"cart__drawer-title"},[t._v("\n        Корзина\n      ")]),Object.keys(t.cartData).length?r("div",{staticClass:"cart__drawer-list"},t._l(t.cartData,function(t,e){return r("cart-drawer-item",{key:e,attrs:{"product-data":t}})}),1):r("div",{staticClass:"cart__drawer-empty"},[t._v("\n        Корзина пуста\n      ")]),Object.keys(t.cartData).length?r("div",{staticClass:"cart__drawer-summary"},[t._v("\n        Общая стоимость: "+t._s(t._f("formatPrice")(t.summary*t.exchangeRate.current))+"\n      ")]):t._e()]):t._e()]),r("div",{staticClass:"cart__mini",on:{click:function(e){t.visible=!t.visible}}},[Object.keys(t.cartData).length?r("div",{staticClass:"cart__mini-count"},[t._v("\n      "+t._s(Object.keys(t.cartData).length)+"\n    ")]):t._e(),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",stroke:"#ffffff","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"9",cy:"21",r:"1"}}),r("circle",{attrs:{cx:"20",cy:"21",r:"1"}}),r("path",{attrs:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}})])])],1)},q=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-item"},[a("div",{staticClass:"cart-item__name"},[t._v("\n    "+t._s(t.productData.name)+"\n  ")]),a("div",{staticClass:"cart-item__price"},[t._v("\n    "+t._s(t._f("formatPrice")(t.productData.price*t.exchangeRate.current*t.productData.count))+"\n  ")]),a("label",{staticClass:"cart-item__count"},[a("input",{staticClass:"cart-item__count-input",attrs:{type:"number",min:"1"},domProps:{value:t.productData.count},on:{keypress:t.isNumber,input:function(e){return t.setCartItemCount({value:e.target.value,id:t.productData.id})}}})]),a("div",{staticClass:"cart-item__delete"},[a("img",{staticClass:"cart-item__delete-icon",attrs:{src:r("af22"),alt:""},on:{click:function(e){return t.removeCartItem(t.productData.id)}}})])])},V=[];function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(r,!0).forEach(function(e){Object(p["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var H={name:"CartDrawerItem",filters:{formatPrice:_},props:{productData:{type:Object,default:function(){}}},computed:F({},Object(m["e"])(["exchangeRate"]),{},Object(m["c"])(["getDifference"])),methods:F({},Object(m["d"])("cart",[P,D]),{isNumber:function(t){/\d/.test(t.key)||t.preventDefault()}})},L=H,U=(r("7909"),Object(o["a"])(L,J,V,!1,null,null,null)),W=U.exports;function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(r,!0).forEach(function(e){Object(p["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var K={name:"CartDrawer",filters:{formatPrice:_},components:{CartDrawerItem:W},data:function(){return{visible:!1}},computed:z({},Object(m["e"])("cart",{cartData:"data",summary:"summary"}),{},Object(m["e"])(["exchangeRate"]),{},Object(m["c"])(["getDifference"]))},Q=K,Y=(r("35ee"),Object(o["a"])(Q,$,q,!1,null,null,null)),Z=Y.exports;function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(r,!0).forEach(function(e){Object(p["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var rt={name:"Home",components:{CartDrawer:Z,CatalogCategory:M},data:function(){return{notificationVisible:!1}},computed:et({},Object(m["e"])("catalog",{catalogData:"data"})),created:function(){this[b]()},mounted:function(){var t=this;setInterval(function(){t[b](),t.notificationVisible=!0},15e3)},methods:et({},Object(m["b"])("catalog",[b]))},at=rt,nt=(r("cccb"),Object(o["a"])(at,f,d,!1,null,null,null)),ct=nt.exports;a["a"].use(l["a"]);var ot,it=new l["a"]({mode:"history",base:"/store-example/",routes:[{path:"/",name:"home",component:ct}]}),st={namespaced:!0,state:{data:{1:{G:"Книги",B:{1:{N:"Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.",T:1},2:{N:"Совершенный код. Стив Макконнелл.",T:1},3:{N:"JavaScript. Подробное руководство. Дэвид Флэнаган.",T:1}}},2:{G:"Еда",C:2,B:{7:{N:"Овсяные пирожные с шоколадной прослойкой",T:3},8:{N:"Суп с пекинской капустой",T:3},85:{N:"Вишня в коньяке",T:3},86:{N:"Постный фаршированный перец",T:3},109:{N:"Салат Подсолнух",T:null},110:{N:"Форель «Эрланген»",T:null},111:{N:"Салат с морепродуктами",T:3},112:{N:"Тёртый пирог",T:3},115:{N:"Свинина, маринованная в красном вине, с кориандром",T:null},116:{N:"Салат с черносливом и ветчиной",T:null},125:{N:"Болгарский перец и цуккини на гриле",T:3},126:{N:"Салат «Букет нарциссов»",T:3},127:{N:"Салат из морепродуктов, с огурцами, рукколой и оливками",T:3}}},5:{G:"Спорт",C:2,B:{184:{N:"Беговая дорожка",T:1},185:{N:"Гантели съемные",T:1},186:{N:"Ружьё охотничье",T:1},187:{N:"Велотренажер",T:1}}},8:{G:"Сантехника",C:3,B:{4:{N:"Акриловая ванна Alpen Mars ",T:1},5:{N:"Смеситель Sturm Classica",T:1},6:{N:"Тумба с раковиной Tiffany World ",T:1}}},10:{G:"Запчасти для машин",C:3,B:{191:{N:"Амортизатор задний CX-5 ",T:3},192:{N:"Пружина амортизатора ",T:3},193:{N:"Корпус воздушного фильтра ",T:3},194:{N:"Ремень приводной",T:3},195:{N:"Диффузор радиатора",T:1},196:{N:"Фильтр АКПП",T:3}}},15:{G:"Сувениры",C:2,B:{11:{N:"Набор для рисования Пастель",T:3},12:{N:"Брелок-рулетка",T:3},63:{N:"Брелок-открывалка",T:3},64:{N:"Ручка-стилус шариковая",T:3},146:{N:"Браслет",T:3},147:{N:"Чехол для очков",T:3},148:{N:"Сумка для выставок",T:3}}}}},mutations:Object(p["a"])({},j,function(t,e){e.forEach(function(e){a["a"].set(t.data[e.G].B[e.T],"T",e.P),a["a"].set(t.data[e.G].B[e.T],"C",e.C)})}),actions:Object(p["a"])({},b,function(t){var e=t.commit;return r.e("chunk-2d2294a0").then(r.t.bind(null,"dd8b",3)).then(function(t){e(w,null,{root:!0}),e(j,t.Value.Goods)})})},ut={namespaced:!0,state:{data:{},summary:null},mutations:(ot={},Object(p["a"])(ot,C,function(t,e){var r=Object.assign({},e);t.data[e.id]?(t.data[e.id].count+=1,r.count=t.data[e.id].count):r.count=1,a["a"].set(t.data,[e.id],r),this.commit("cart/".concat(T))}),Object(p["a"])(ot,P,function(t,e){a["a"].delete(t.data,e),this.commit("cart/".concat(T))}),Object(p["a"])(ot,D,function(t,e){a["a"].set(t.data[e.id],"count",parseInt(e.value,10)),this.commit("cart/".concat(T))}),Object(p["a"])(ot,T,function(t){var e=0;Object.keys(t.data).forEach(function(r){e+=t.data[r].price*t.data[r].count}),a["a"].set(t,"summary",e)}),ot)};a["a"].use(m["a"]);var lt=new m["a"].Store({state:{exchangeRate:{current:0,previous:0}},getters:{getDifference:function(t){var e="";return e=0===t.exchangeRate.previous?"none":t.exchangeRate.current>t.exchangeRate.previous?"up":"down",e}},mutations:Object(p["a"])({},w,function(t){a["a"].set(t.exchangeRate,"previous",t.exchangeRate.current),a["a"].set(t.exchangeRate,"current",h(20,80))}),modules:{catalog:st,cart:ut}});a["a"].config.productionTip=!1,new a["a"]({router:it,store:lt,render:function(t){return t(u)}}).$mount("#app")},7909:function(t,e,r){"use strict";var a=r("d24e"),n=r.n(a);n.a},8757:function(t,e,r){},"90e6":function(t,e,r){},af04:function(t,e,r){"use strict";var a=r("1d0a"),n=r.n(a);n.a},af22:function(t,e,r){t.exports=r.p+"img/trash.2c47055a.svg"},c796:function(t,e,r){"use strict";var a=r("dd6b"),n=r.n(a);n.a},cccb:function(t,e,r){"use strict";var a=r("d563"),n=r.n(a);n.a},d24e:function(t,e,r){},d563:function(t,e,r){},daca:function(t,e,r){t.exports=r.p+"img/cart.1b7d8e62.svg"},dd6b:function(t,e,r){}});
//# sourceMappingURL=app.fc537b3c.js.map