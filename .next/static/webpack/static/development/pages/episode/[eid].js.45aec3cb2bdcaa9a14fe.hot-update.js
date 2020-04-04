webpackHotUpdate("static/development/pages/episode/[eid].js",{

/***/ "./pages/episode/[eid].js":
/*!********************************!*\
  !*** ./pages/episode/[eid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/episode/[eid].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Episode = function Episode(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h1", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, props.episode.name), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 1
    }
  }, "Release date: ", props.episode.air_date), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Episdode Code: ", props.episode.episode), __jsx("h2", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, " Characters in this episode"), props.characters.map(function (character) {
    return __jsx("li", {
      key: character.id,
      className: "jsx-2059263984",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/character/[cid]",
      as: "/character/".concat(character.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-2059263984",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, character.name)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2059263984",
    __self: _this
  }, "h1.jsx-2059263984,a.jsx-2059263984{font-family:'Arial';}ul.jsx-2059263984{padding:0;}li.jsx-2059263984{list-style:none;margin:5px 0;}a.jsx-2059263984{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2059263984:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9lcGlzb2RlL1tlaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCbUIsQUFJeUIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZGllZ28vR29vZ2xlIERyaXZlL1BVQy8yMDIwL1RhbGxlciBkZSBJbnRlZ3JhY2lvbi9UYXJlYS9UMS9pbnRlZ3JhdGlvbjEvcGFnZXMvZXBpc29kZS9bZWlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEVwaXNvZGUgPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPntwcm9wcy5lcGlzb2RlLm5hbWV9PC9oMT5cbjxwPlJlbGVhc2UgZGF0ZToge3Byb3BzLmVwaXNvZGUuYWlyX2RhdGV9PC9wPlxuICAgIDxwPkVwaXNkb2RlIENvZGU6IHtwcm9wcy5lcGlzb2RlLmVwaXNvZGV9PC9wPlxuICAgIDxoMj4gQ2hhcmFjdGVycyBpbiB0aGlzIGVwaXNvZGU8L2gyPlxuICAgIHtwcm9wcy5jaGFyYWN0ZXJzLm1hcChjaGFyYWN0ZXIgPT4gKFxuICAgICAgICA8bGkga2V5PXtjaGFyYWN0ZXIuaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhcmFjdGVyL1tjaWRdXCIgYXM9e2AvY2hhcmFjdGVyLyR7Y2hhcmFjdGVyLmlkfWB9PlxuICAgICAgICAgICAgPGE+e2NoYXJhY3Rlci5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgICA8c3R5bGUganN4PntgXG4gIGgxLFxuICBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkVwaXNvZGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICBjb25zdCB7IGVpZCB9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLyR7ZWlkfWApLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgKVxuICBjb25zdCBjaWRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSByZXMuY2hhcmFjdGVyc1tpXS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGlkID0gY2hhcmFjdGVyW2NoYXJhY3Rlci5sZW5ndGgtMV1cbiAgICBjaWRzLnB1c2goaWQpO1xuICB9O1xuICBjb25zdCBjaGFyYWN0ZXJzX2FyciA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2NpZHN9YCkudGhlbihcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcblxuXG4gIHJldHVybiB7IGVwaXNvZGU6IHJlcywgY2hhcmFjdGVyczogY2hhcmFjdGVyc19hcnIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGU7Il19 */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/episode/[eid].js */"));
};

Episode.getInitialProps = function _callee(context) {
  var eid, res, cids, i, character, id, characters_arr;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          eid = context.query.eid;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/episode/".concat(eid)).then(function (response) {
            return response.json();
          }));

        case 3:
          res = _context.sent;
          cids = [];

          for (i = 0; i < res.characters.length; i++) {
            character = res.characters[i].split('/');
            id = character[character.length - 1];
            cids.push(id);
          }

          ;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/character/".concat(cids)).then(function (response) {
            return response.json();
          }));

        case 9:
          characters_arr = _context.sent;
          return _context.abrupt("return", {
            episode: res,
            characters: characters_arr
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Episode);

/***/ })

})
//# sourceMappingURL=[eid].js.45aec3cb2bdcaa9a14fe.hot-update.js.map