webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("h1", {
    className: "jsx-3677946590",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Rick and Morty Episodes"), __jsx("ul", {
    className: "jsx-3677946590",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.episodes.map(function (episode) {
    return __jsx("li", {
      key: episode.id,
      className: "jsx-3677946590",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/episode/[eid]",
      as: "/episode/".concat(episode.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-3677946590",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, episode.name)), __jsx("p", {
      className: "jsx-3677946590",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, "Release Date: ", episode.air_date));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3677946590",
    __self: _this
  }, "h1.jsx-3677946590,a.jsx-3677946590{font-family:'Arial';}ul.jsx-3677946590{padding:0;}li.jsx-3677946590{list-style:none;margin:5px 0;}a.jsx-3677946590{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3677946590:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBSXlCLEFBSVYsQUFJTSxBQU1LLEFBS1QsVUFkZCxFQWVBLElBWGUsSUFSZixTQVVBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2RpZWdvL0dvb2dsZSBEcml2ZS9QVUMvMjAyMC9UYWxsZXIgZGUgSW50ZWdyYWNpb24vVGFyZWEvVDEvaW50ZWdyYXRpb24xL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlJpY2sgYW5kIE1vcnR5IEVwaXNvZGVzPC9oMT5cbiAgICA8dWw+XG4gICAgICB7cHJvcHMuZXBpc29kZXMubWFwKGVwaXNvZGUgPT4gKFxuICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2VwaXNvZGUvW2VpZF1cIiBhcz17YC9lcGlzb2RlLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPntlcGlzb2RlLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDxwPlJlbGVhc2UgRGF0ZToge2VwaXNvZGUuYWlyX2RhdGV9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gIGgxLFxuICBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuIFxuIGNvbnN0IGVpZHMgPSBBcnJheS5mcm9tKEFycmF5KDMxKS5rZXlzKCkpO1xuICBjb25zdCBuZWlkcyA9IGVpZHMubWFwKGkgPT4ge1xuICAgICByZXR1cm4gaSsxO1xuICAgfSk7XG4gICBjb25zdCBlcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLyR7bmVpZHN9YCkudGhlbihcbiAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgfVxuICAgKVxuICBcbiAgXG4gIHJldHVybiB7XG4gICAgZXBpc29kZXM6IGVyZXNwb25zZVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/index.js */"));
};

Index.getInitialProps = function _callee() {
  var eids, neids, eresponse;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          eids = Array.from(Array(31).keys());
          neids = eids.map(function (i) {
            return i + 1;
          });
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://rickandmortyapi.com/api/episode/".concat(neids)).then(function (response) {
            return response.json();
          }));

        case 4:
          eresponse = _context.sent;
          return _context.abrupt("return", {
            episodes: eresponse
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5404f7cd2c80fcb1e125.hot-update.js.map