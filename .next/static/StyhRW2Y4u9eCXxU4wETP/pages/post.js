(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3Hq7":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),u=n.n(i),a=n("o0o1"),c=n.n(a);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(t){return f(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":f(t)})(t)}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?l(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=n("nOHt"),b=n.n(d),m=(n("vcXL"),o.a.createElement);function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,r,o,i=(e=u,function(){var t,n=v(e);if(g()){var r=v(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).state={value:"",results:{}},e.handleChange=e.handleChange.bind(l(e)),e.handleSubmit=e.handleSubmit.bind(l(e)),e}return n=u,(r=[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({value:t.target.value}),b.a.push("/search/[query]","/search/".concat(this.state.value)),t.preventDefault();case 3:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return m("form",{onSubmit:this.handleSubmit},m("label",null,"Name:",m("input",{type:"text",value:this.state.value,onChange:this.handleChange})),m("input",{type:"submit",value:"Submit"}))}}])&&s(n.prototype,r),o&&s(n,o),u}(o.a.Component),S=o.a.createElement,E={marginRight:15},k=function(){return S("div",null,S(u.a,{href:"/"},S("a",{style:E},"Home")),S(w,null))},O=o.a.createElement,R={margin:20,padding:20,border:"1px solid #DDD"};e.a=function(t){return O("div",{style:R},O(k,null),t.children)}},EhLH:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("nOHt"),u=n("3Hq7"),a=o.a.createElement;e.default=function(){var t=Object(i.useRouter)();return a(u.a,null,a("h1",null,t.query.title),a("p",null,"This is the blog post content."))}},MDTK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n("EhLH")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),u=n("Nsbk"),a=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),v=n("g/15"),y=s(n("nOHt"));function d(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var b=new Map,m=window.IntersectionObserver,g={};function w(){return f||(m?f=new m((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var S=function(t){a(s,t);var e,n=(e=s,function(){var t,n=u(e);if(c()){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function s(t){var e;return r(this,s),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:d(t),as:e?d(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,a=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var c=window.location.pathname;u=(0,h.resolve)(c,u),a=a?(0,h.resolve)(c,a):u,t.preventDefault();var s=e.props.scroll;null==s&&(s=a.indexOf("#")<0),y.default[e.props.replace?"replace":"push"](u,a,{shallow:e.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();y.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),p.default.cloneElement(i,u)}}]),s}(p.Component);e.default=S},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["MDTK",0,2,1]]]);