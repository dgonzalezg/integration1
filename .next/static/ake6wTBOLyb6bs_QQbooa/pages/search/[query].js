(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"33vZ":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[query]",function(){return n("C03O")}])},"3Hq7":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("o0o1"),u=n.n(c);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(t){return f(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":f(t)})(t)}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?l(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=n("nOHt"),m=n.n(v),b=(n("vcXL"),o.a.createElement);function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,n,r,o,a=(e=i,function(){var t,n=y(e);if(w()){var r=y(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this,t)).state={value:"",results:{}},e.handleChange=e.handleChange.bind(l(e)),e.handleSubmit=e.handleSubmit.bind(l(e)),e}return n=i,(r=[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({value:t.target.value}),m.a.push("/search/[query]","/search/".concat(this.state.value)),t.preventDefault();case 3:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return b("form",{onSubmit:this.handleSubmit},b("label",null,"Name:",b("input",{type:"text",value:this.state.value,onChange:this.handleChange})),b("input",{type:"submit",value:"Submit"}))}}])&&s(n.prototype,r),o&&s(n,o),i}(o.a.Component),k=o.a.createElement,C={marginRight:15},E=function(){return k("div",null,k(i.a,{href:"/"},k("a",{style:C},"Home")),k(g,null))},S=o.a.createElement,O={margin:20,padding:20,border:"1px solid #DDD"};e.a=function(t){return S("div",{style:O},S(E,null),t.children)}},C03O:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("3Hq7"),u=n("YFqc"),s=n.n(u),l=i.a.createElement,f=function(t){return l(c.a,null,l("h1",null,"Results"),l("ul",null,t.episodes.map((function(t){return l("li",{key:t.id},l(s.a,{href:"/episode/[eid]",as:"/episode/".concat(t.id)},l("a",null,t.name)))})),t.characters.map((function(t){return l("li",{key:t.id},l(s.a,{href:"/character/[cid]",as:"/character/".concat(t.id)},l("a",null,t.name)))})),t.locations.map((function(t){return l("li",{key:t.id},l(s.a,{href:"/location/[lid]",as:"/location/".concat(t.id)},l("a",null,t.name)))}))))};f.getInitialProps=function(t){var e,n,r,a,i,c,u,s,l;return o.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return e=t.query.query,n=[],r=[],a=[],i=Array.from(Array(31).keys()),c=i.map((function(t){return t+1})),f.next=8,o.a.awrap(fetch("https://rickandmortyapi.com/api/episode/".concat(c)).then((function(t){return t.json()})));case 8:return f.sent.forEach((function(t){t.name.toLowerCase().split(" ").includes(e.toLowerCase())&&n.push(t)})),u=Array.from(Array(493).keys()),s=u.map((function(t){return t+1})),f.next=14,o.a.awrap(fetch("https://rickandmortyapi.com/api/character/".concat(s)).then((function(t){return t.json()})));case 14:return f.sent.forEach((function(t){t.name.toLowerCase().split(" ").includes(e.toLowerCase())&&r.push(t)})),Array.from(Array(76).keys()),l=u.map((function(t){return t+1})),f.next=20,o.a.awrap(fetch("https://rickandmortyapi.com/api/location/".concat(l)).then((function(t){return t.json()})));case 20:return f.sent.forEach((function(t){t.name.toLowerCase().split(" ").includes(e.toLowerCase())&&a.push(t)})),f.abrupt("return",{episodes:n,characters:r,locations:a});case 23:case"end":return f.stop()}}),null,null,null,Promise)},e.default=f},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),c=n("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),y=n("g/15"),d=s(n("nOHt"));function v(t){return t&&"object"===typeof t?(0,y.formatWithValidation)(t):t}var m=new Map,b=window.IntersectionObserver,w={};function g(){return f||(b?f=new b((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){c(s,t);var e,n=(e=s,function(){var t,n=i(e);if(u()){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function s(t){var e;return r(this,s),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var i=t(o,a);return e=o,n=a,r=i,i}}((function(t,e){return{href:v(t),as:e?v(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,c=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,y.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),c=c?(0,h.resolve)(u,c):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=g();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),s}(p.Component);e.default=k},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["33vZ",0,2,1]]]);