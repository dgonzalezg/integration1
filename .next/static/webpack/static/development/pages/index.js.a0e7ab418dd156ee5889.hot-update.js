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
    className: "jsx-157550089",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Rick and Morty Episodes"), __jsx("ul", {
    className: "jsx-157550089",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.episodes.map(function (episode) {
    return __jsx("li", {
      key: episode.id,
      className: "jsx-157550089",
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
      className: "jsx-157550089",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, episode.name)), __jsx("p", {
      className: "jsx-157550089",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, "Release Date: ", episode.air_date));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "157550089",
    __self: _this
  }, "h1.jsx-157550089,a.jsx-157550089{font-family:'Arial';}ul.jsx-157550089{padding:0;}li.jsx-157550089{list-style:none;margin:5px 0;text-align:center;}a.jsx-157550089{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-157550089:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBSXlCLEFBSVYsQUFJTSxBQU1LLEFBS1QsVUFkZCxFQWVBLElBWGUsSUFSZixTQVNvQixrQkFDcEIsR0FJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5SaWNrIGFuZCBNb3J0eSBFcGlzb2RlczwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLmVwaXNvZGVzLm1hcChlcGlzb2RlID0+IChcbiAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lcGlzb2RlL1tlaWRdXCIgYXM9e2AvZXBpc29kZS8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICA8YT57ZXBpc29kZS5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICA8cD5SZWxlYXNlIERhdGU6IHtlcGlzb2RlLmFpcl9kYXRlfTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICBoMSxcbiAgYSB7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gXG4gY29uc3QgZWlkcyA9IEFycmF5LmZyb20oQXJyYXkoMzEpLmtleXMoKSk7XG4gIGNvbnN0IG5laWRzID0gZWlkcy5tYXAoaSA9PiB7XG4gICAgIHJldHVybiBpKzE7XG4gICB9KTtcbiAgIGNvbnN0IGVyZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvJHtuZWlkc31gKS50aGVuKFxuICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICB9XG4gICApXG4gIFxuICBcbiAgcmV0dXJuIHtcbiAgICBlcGlzb2RlczogZXJlc3BvbnNlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/index.js */"));
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
//# sourceMappingURL=index.js.a0e7ab418dd156ee5889.hot-update.js.map