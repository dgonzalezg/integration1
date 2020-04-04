webpackHotUpdate("static/development/pages/search/[query].js",{

/***/ "./pages/search/[query].js":
/*!*********************************!*\
  !*** ./pages/search/[query].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/search/[query].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Results = function Results(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 1
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, "Results"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, props.episodes.map(function (episode) {
    return __jsx("li", {
      key: episode.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/episode/[eid]",
      as: "/episode/".concat(episode.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, episode.name)));
  }), props.characters.map(function (character) {
    return __jsx("li", {
      key: character.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/character/[cid]",
      as: "/character/".concat(character.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, character.name)));
  }), props.locations.map(function (location) {
    return __jsx("li", {
      key: location.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/location/[lid]",
      as: "/location/".concat(location.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, location.name)));
  })));
};

Results.getInitialProps = function _callee(context) {
  var query, episodes, characters, locations, eurl, eresponse, cids, ncids, cresponse, lurl, lresponse;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = context.query.query;
          episodes = [];
          characters = [];
          locations = [];
          eurl = 'https://rickandmortyapi.com/api/episode/';

        case 5:
          if (false) {}

          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(eurl).then(function (response) {
            return response.json();
          }));

        case 8:
          eresponse = _context.sent;
          eresponse.results.forEach(function (episode) {
            if (episode.name.toLowerCase().match('/' + query.toLowerCase() + '/')) {
              episodes.push(episode);
            }
          });

          if (!(eresponse.info.next != '')) {
            _context.next = 14;
            break;
          }

          eurl = eresponse.info.next;
          _context.next = 15;
          break;

        case 14:
          return _context.abrupt("break", 17);

        case 15:
          _context.next = 5;
          break;

        case 17:
          cids = Array.from(Array(493).keys());
          ncids = cids.map(function (i) {
            return i + 1;
          });
          _context.next = 21;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://rickandmortyapi.com/api/character/".concat(ncids)).then(function (response) {
            return response.json();
          }));

        case 21:
          cresponse = _context.sent;
          console.log(cresponse);
          lurl = 'https://rickandmortyapi.com/api/location/';

        case 24:
          if (false) {}

          _context.next = 27;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(lurl).then(function (response) {
            return response.json();
          }));

        case 27:
          lresponse = _context.sent;
          lresponse.results.forEach(function (location) {
            if (location.name.toLowerCase().match('/' + query.toLowerCase() + '/')) {
              locations.push(location);
            }
          });

          if (!(lresponse.info.next != '')) {
            _context.next = 33;
            break;
          }

          lurl = lresponse.info.next;
          _context.next = 34;
          break;

        case 33:
          return _context.abrupt("break", 37);

        case 34:
          return _context.abrupt("return", {
            episodes: episodes,
            characters: characters,
            locations: locations
          });

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ })

})
//# sourceMappingURL=[query].js.7a90a11a8eb4f2233779.hot-update.js.map