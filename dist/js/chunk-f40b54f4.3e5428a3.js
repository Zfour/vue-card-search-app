(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f40b54f4"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),a=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2735:function(t,e,n){},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),a="String Iterator",c=i.set,s=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},4671:function(t,e,n){},4972:function(t,e,n){},"498c":function(t,e,n){"use strict";n("adc6")},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),a=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,p,b=i(t),v="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,y=void 0!==m,g=u(b),w=0;if(y&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==g||v==Array&&a(g))for(e=c(b.length),n=new v(e);e>w;w++)p=y?m(b[w],w):b[w],s(n,w,p);else for(f=g.call(b),d=f.next,n=new v;!(l=d.call(f)).done;w++)p=y?o(f,m,[l.value,w],!0):l.value,s(n,w,p);return n.length=w,n}},"50b6":function(t,e,n){"use strict";n("2735")},5884:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("新闻")])]),n("div",{staticClass:"news-nav-post-control"},[n("tab-control",{attrs:{titles:["公告","活动","版本"]},on:{tabclick:t.tabclick}})],1),n("scroll",{ref:"listscroll",staticClass:"news-list-scroll",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentscroll,pullingUp:t.loadmore}},[n("news-list",{attrs:{listdata:t.switchtype},on:{finalPushItemImageLoad:t.refresh}})],1),n("transition",{attrs:{name:"fade"}},[n("back-to-top",{directives:[{name:"show",rawName:"v-show",value:t.backtotopdisplay,expression:"backtotopdisplay"}],nativeOn:{click:function(e){return t.backtotop(e)}}})],1)],1)},i=[];function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return o(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function s(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||c(t)||s(t)||u()}var f=n("1bab");function d(t,e){return Object(f["a"])({url:"https://www.mxnzp.com/apinews/list",params:{app_id:"tkilvmkqykbpjode",app_secret:"Vk0xY0hOVTN5eTh5ZVo0SzBNQ0Z2UT09",typeId:t,page:e}})}var p=n("8700"),b=n("a7ac"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-list"},t._l(t.listdata,(function(e,r){return n("news-list-item",{key:r,attrs:{listdataitem:e},on:{itemImageLoad:t.pushItemImageLoad}})})),1)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-list-item"},[n("p",{staticClass:"new-list-time"},[t._v(t._s(t.listdataitem.postTime))]),n("div",{staticClass:"news-cell"},[n("img",{attrs:{src:t.listdataitem.imgList[0]},on:{load:function(e){return t.imageLoad()}}}),n("p",{staticClass:"new-list-title"},[t._v(t._s(t.listdataitem.title))])])])},y=[],g={name:"NewsListItem",props:["listdataitem"],methods:{debounce:function(t,e){var n=null;return function(){for(var r=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,o)}),e)}},imageLoad:function(){this.$emit("itemImageLoad")}}},w=g,S=(n("fa4e"),n("2877")),L=Object(S["a"])(w,m,y,!1,null,"1df81d44",null),O=L.exports,x={name:"NewsList",components:{NewsListItem:O},props:["listdata"],methods:{pushItemImageLoad:function(){this.$emit("finalPushItemImageLoad")}}},T=x,k=(n("498c"),Object(S["a"])(T,v,h,!1,null,"0a5907c2",null)),A=k.exports,_=n("f7ac"),C=n("5d17"),N={name:"News",components:{Scroll:C["a"],BackToTop:_["a"],NewsList:A,NavBar:b["a"],TabControl:p["a"]},data:function(){return{currenttype:"notice",backtotopdisplay:!1,newslist:{notice:{id:515,page:0,list:[]},activity:{id:511,page:0,list:[]},release:{id:509,page:0,list:[]}}}},created:function(){this.getNewsData("notice"),this.getNewsData("activity"),this.getNewsData("release")},computed:{switchtype:function(){return this.newslist[this.currenttype].list}},methods:{loadmore:function(){this.getNewsData(this.currenttype)},refresh:function(){this.$refs.listscroll.Refresh()},contentscroll:function(t){this.backtotopdisplay=-t.y>900},backtotop:function(){this.$refs.listscroll.Scroll.scrollTo(0,0,500)},tabclick:function(t){switch(t){case 0:this.currenttype="notice",this.$refs.listscroll.Scroll.scrollTo(0,0,200);break;case 1:this.currenttype="activity",this.$refs.listscroll.Scroll.scrollTo(0,0,200);break;case 2:this.currenttype="release",this.$refs.listscroll.Scroll.scrollTo(0,0,200)}},gettype:function(){},getNewsData:function(t){var e=this,n=this.newslist[t].page+1;d(this.newslist[t].id,n).then((function(n){var r;console.log(n),(r=e.newslist[t].list).push.apply(r,l(n.data)),e.newslist[t].page+=1,e.$refs.listscroll.Finishpullup()})).catch()}}},j=N,I=(n("b112"),Object(S["a"])(j,r,i,!1,null,"644e9cb2",null));e["default"]=I.exports},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7aa7":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},8700:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{staticClass:"tab-control-item",class:{active:r===t.currentindex},on:{click:function(e){return t.active(r)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],o={name:"TabControl",props:["titles"],data:function(){return{currentindex:0}},methods:{active:function(t){this.currentindex=t,this.$emit("tabclick",t)}}},a=o,c=(n("50b6"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,"b70bce20",null);e["a"]=s.exports},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){throw i(t),a}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),v=n("7b0b"),h=n("fc6a"),m=n("c04e"),y=n("5c6c"),g=n("7c73"),w=n("df75"),S=n("241c"),L=n("057f"),O=n("7418"),x=n("06cf"),T=n("9bf2"),k=n("d1e7"),A=n("9112"),_=n("6eeb"),C=n("5692"),N=n("f772"),j=n("d012"),I=n("90e3"),E=n("b622"),$=n("e538"),P=n("746f"),M=n("d44e"),D=n("69f3"),V=n("b727").forEach,R=N("hidden"),F="Symbol",B="prototype",G=E("toPrimitive"),H=D.set,J=D.getterFor(F),U=Object[B],q=i.Symbol,z=o("JSON","stringify"),Q=x.f,Z=T.f,W=L.f,Y=k.f,K=C("symbols"),X=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=i.QObject,it=!rt||!rt[B]||!rt[B].findChild,ot=c&&l((function(){return 7!=g(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(U,e);r&&delete U[e],Z(t,e,n),r&&t!==U&&Z(U,e,r)}:Z,at=function(t,e){var n=K[t]=g(q[B]);return H(n,{type:F,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===U&&st(X,e,n),b(t);var r=m(e,!0);return b(n),f(K,r)?(n.enumerable?(f(t,R)&&t[R][r]&&(t[R][r]=!1),n=g(n,{enumerable:y(0,!1)})):(f(t,R)||Z(t,R,y(1,{})),t[R][r]=!0),ot(t,r,n)):Z(t,r,n)},ut=function(t,e){b(t);var n=h(e),r=w(n).concat(bt(n));return V(r,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},ft=function(t){var e=m(t,!0),n=Y.call(this,e);return!(this===U&&f(K,e)&&!f(X,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,R)&&this[R][e])||n)},dt=function(t,e){var n=h(t),r=m(e,!0);if(n!==U||!f(K,r)||f(X,r)){var i=Q(n,r);return!i||!f(K,r)||f(n,R)&&n[R][r]||(i.enumerable=!0),i}},pt=function(t){var e=W(h(t)),n=[];return V(e,(function(t){f(K,t)||f(j,t)||n.push(t)})),n},bt=function(t){var e=t===U,n=W(e?X:h(t)),r=[];return V(n,(function(t){!f(K,t)||e&&!f(U,t)||r.push(K[t])})),r};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===U&&n.call(X,t),f(this,R)&&f(this[R],e)&&(this[R][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot(U,e,{configurable:!0,set:n}),at(e,t)},_(q[B],"toString",(function(){return J(this).tag})),_(q,"withoutSetter",(function(t){return at(I(t),t)})),k.f=ft,T.f=st,x.f=dt,S.f=L.f=pt,O.f=bt,$.f=function(t){return at(E(t),t)},c&&(Z(q[B],"description",{configurable:!0,get:function(){return J(this).description}}),a||_(U,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),V(w(nt),(function(t){P(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),z){var vt=!s||l((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,z.apply(null,i)}})}q[B][G]||A(q[B],G,q[B].valueOf),M(q,F),j[R]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},adc6:function(t,e,n){},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b112:function(t,e,n){"use strict";n("4972")},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,b,v,h){for(var m,y,g=o(p),w=i(g),S=r(b,v,3),L=a(w.length),O=0,x=h||c,T=e?x(p,L):n?x(p,0):void 0;L>O;O++)if((d||O in w)&&(m=w[O],y=S(m,O,g),t))if(e)T[O]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:s.call(T,m)}else if(l)return!1;return f?-1:u||l?l:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bbff:function(t,e,n){t.exports=n.p+"img/rocket.b7d1c5fe.png"},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),a=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),l=o.values;for(var f in i){var d=r[f],p=d&&d.prototype;if(p){if(p[s]!==l)try{a(p,s,l)}catch(v){p[s]=l}if(p[u]||a(p,u,f),i[f])for(var b in o)if(p[b]!==o[b])try{a(p,b,o[b])}catch(v){p[b]=o[b]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var p=d.prototype=l.prototype;p.constructor=d;var b=p.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(a(f,t))return"";var n=v?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f7ac:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-to-top"},[r("img",{attrs:{src:n("bbff")}})])}],o={name:"BackToTop"},a=o,c=(n("fb38"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,"cdf29328",null);e["a"]=s.exports},fa4e:function(t,e,n){"use strict";n("4671")},fb38:function(t,e,n){"use strict";n("7aa7")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),a=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=n("ae40"),p=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),h=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!p||!b},{slice:function(t,e){var n,r,l,f=s(this),d=c(f.length),p=a(t,d),b=a(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(f,p,b);for(r=new(void 0===n?Array:n)(m(b-p,0)),l=0;p<b;p++,l++)p in f&&u(r,l,f[p]);return r.length=l,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-f40b54f4.3e5428a3.js.map