(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3Hq7":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),c=n("o0o1"),u=n.n(c);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(t){return f(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":f(t)})(t)}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?l(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=n("nOHt"),m=n.n(v),b=(n("vcXL"),o.a.createElement);function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,r,o,i=(e=a,function(){var t,n=y(e);if(g()){var r=y(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t)).state={value:"",results:{}},e.handleChange=e.handleChange.bind(l(e)),e.handleSubmit=e.handleSubmit.bind(l(e)),e}return n=a,(r=[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({value:t.target.value}),m.a.push("/search/[query]","/search/".concat(this.state.value)),t.preventDefault();case 3:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return b("form",{onSubmit:this.handleSubmit},b("label",null,"Name:",b("input",{type:"text",value:this.state.value,onChange:this.handleChange})),b("input",{type:"submit",value:"Submit"}))}}])&&s(n.prototype,r),o&&s(n,o),a}(o.a.Component),k=o.a.createElement,O={marginRight:15},S=function(){return k("div",null,k(a.a,{href:"/"},k("a",{style:O},"Home")),k(w,null))},E=o.a.createElement,R={margin:20,padding:20,border:"1px solid #DDD"};e.a=function(t){return E("div",{style:R},E(S,null),t.children)}},JOdp:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),i=n("q1tI"),a=n.n(i),c=n("3Hq7"),u=n("vcXL"),s=n.n(u),l=n("YFqc"),f=n.n(l),p=a.a.createElement,h=function(t){return p(c.a,null,p("h1",null,t.location.name),p("p",null,"Type: ",t.location.type),p("p",null,"Dimension: ",t.location.dimension),p("h2",null," Residents"),t.residents.map((function(t){return p("li",{key:t.id},p(f.a,{href:"/character/[cid]",as:"/character/".concat(t.id)},p("a",null,t.name)))})))};h.getInitialProps=function(t){var e,n,r,i,a,c;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=t.query.lid,u.next=3,o.a.awrap(s()("https://rickandmortyapi.com/api/location/".concat(e)).then((function(t){return t.json()})));case 3:for(n=u.sent,r=[],i=0;i<n.residents.length;i++)a=n.residents[i].split("/"),r.push(a[a.length-1]);return u.next=9,o.a.awrap(s()("https://rickandmortyapi.com/api/character/".concat(r)).then((function(t){return t.json()})));case 9:return c=u.sent,u.abrupt("return",{location:n,residents:c});case 11:case"end":return u.stop()}}),null,null,null,Promise)},e.default=h},Y0wO:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/location/[lid]",function(){return n("JOdp")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),c=n("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),y=n("g/15"),d=s(n("nOHt"));function v(t){return t&&"object"===typeof t?(0,y.formatWithValidation)(t):t}var m=new Map,b=window.IntersectionObserver,g={};function w(){return f||(b?f=new b((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){c(s,t);var e,n=(e=s,function(){var t,n=a(e);if(u()){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function s(t){var e;return r(this,s),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:v(t),as:e?v(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,y.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),c=c?(0,h.resolve)(u,c):a,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](a,c,{shallow:e.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),s}(p.Component);e.default=k},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["Y0wO",0,2,1]]]);