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
    className: "jsx-853945634",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Rick and Morty Episodes"), __jsx("ul", {
    className: "jsx-853945634",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.episodes.map(function (episode) {
    return __jsx("li", {
      key: episode.id,
      className: "jsx-853945634",
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
      className: "jsx-853945634",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, episode.name)), __jsx("p", {
      className: "jsx-853945634",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, "Release Date: ", episode.air_date), __jsx("p", {
      className: "jsx-853945634",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, "Episdode Code: ", episode.episode));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "853945634",
    __self: _this
  }, "h1.jsx-853945634,a.jsx-853945634{font-family:'Arial';}ul.jsx-853945634{padding:0;}li.jsx-853945634{list-style:none;margin:5px 0;}a.jsx-853945634{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-853945634:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBSXlCLEFBSVYsQUFJTSxBQU1LLEFBS1QsVUFkZCxFQWVBLElBWGUsSUFSZixTQVNGLHFCQUtlLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2RpZWdvL0dvb2dsZSBEcml2ZS9QVUMvMjAyMC9UYWxsZXIgZGUgSW50ZWdyYWNpb24vVGFyZWEvVDEvaW50ZWdyYXRpb24xL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlJpY2sgYW5kIE1vcnR5IEVwaXNvZGVzPC9oMT5cbiAgICA8dWw+XG4gICAgICB7cHJvcHMuZXBpc29kZXMubWFwKGVwaXNvZGUgPT4gKFxuICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2VwaXNvZGUvW2VpZF1cIiBhcz17YC9lcGlzb2RlLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPntlcGlzb2RlLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDxwPlJlbGVhc2UgRGF0ZToge2VwaXNvZGUuYWlyX2RhdGV9PC9wPlxuICAgICAgPHA+RXBpc2RvZGUgQ29kZToge2VwaXNvZGUuZXBpc29kZX08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgaDEsXG4gIGEge1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gXG4gY29uc3QgZWlkcyA9IEFycmF5LmZyb20oQXJyYXkoMzEpLmtleXMoKSk7XG4gIGNvbnN0IG5laWRzID0gZWlkcy5tYXAoaSA9PiB7XG4gICAgIHJldHVybiBpKzE7XG4gICB9KTtcbiAgIGNvbnN0IGVyZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvJHtuZWlkc31gKS50aGVuKFxuICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICB9XG4gICApXG4gIFxuICBcbiAgcmV0dXJuIHtcbiAgICBlcGlzb2RlczogZXJlc3BvbnNlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/index.js */"));
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
//# sourceMappingURL=index.js.95125aeafd8fa7662c4d.hot-update.js.map