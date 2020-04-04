webpackHotUpdate("static/development/pages/character/[cid].js",{

/***/ "./pages/character/[cid].js":
/*!**********************************!*\
  !*** ./pages/character/[cid].js ***!
  \**********************************/
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
    _jsxFileName = "/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/character/[cid].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Character = function Character(props) {
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
  }, props.character.name), props.character.image ? __jsx("img", {
    src: props.character.image,
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 30
    }
  }) : null, __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  }, "Status: ", props.character.status), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Specie: ", props.character.species), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }
  }, props.character.type ? "Type: ".concat(props.character.type) : null), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 1
    }
  }, "Gender: ", props.character.gender), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 1
    }
  }, "Origin: ", props.character.origin.url ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/location/[lid]",
    as: "/location/".concat(props.origin.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 42
    }
  }, __jsx("a", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, props.character.origin.name)) : 'unkown'), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }, "Location: ", props.character.location.url ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/location/[lid]",
    as: "/location/".concat(props.location.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 46
    }
  }, __jsx("a", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, props.character.location.name)) : 'unkown'), __jsx("h2", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Episodes"), props.episodes.map(function (episode) {
    return __jsx("li", {
      key: episode.id,
      className: "jsx-2059263984",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/episode/[eid]",
      as: "/episode/".concat(episode.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-2059263984",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, episode.name)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2059263984",
    __self: _this
  }, "h1.jsx-2059263984,a.jsx-2059263984{font-family:'Arial';}ul.jsx-2059263984{padding:0;}li.jsx-2059263984{list-style:none;margin:5px 0;}a.jsx-2059263984{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2059263984:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9jaGFyYWN0ZXIvW2NpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJtQixBQUl5QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9jaGFyYWN0ZXIvW2NpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDaGFyYWN0ZXIgPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPntwcm9wcy5jaGFyYWN0ZXIubmFtZX08L2gxPlxuICAgIHtwcm9wcy5jaGFyYWN0ZXIuaW1hZ2UgPyA8aW1nIHNyYz17cHJvcHMuY2hhcmFjdGVyLmltYWdlfSAvPiA6IG51bGx9XG48cD5TdGF0dXM6IHtwcm9wcy5jaGFyYWN0ZXIuc3RhdHVzfTwvcD5cbiAgICA8cD5TcGVjaWU6IHtwcm9wcy5jaGFyYWN0ZXIuc3BlY2llc308L3A+XG48cD57cHJvcHMuY2hhcmFjdGVyLnR5cGUgPyBgVHlwZTogJHtwcm9wcy5jaGFyYWN0ZXIudHlwZX1gOiBudWxsfTwvcD5cbjxwPkdlbmRlcjoge3Byb3BzLmNoYXJhY3Rlci5nZW5kZXJ9PC9wPlxuPHA+T3JpZ2luOiB7cHJvcHMuY2hhcmFjdGVyLm9yaWdpbi51cmwgPyA8TGluayBocmVmPVwiL2xvY2F0aW9uL1tsaWRdXCIgYXM9e2AvbG9jYXRpb24vJHtwcm9wcy5vcmlnaW4uaWR9YH0+XG4gICAgICAgICAgICA8YT57cHJvcHMuY2hhcmFjdGVyLm9yaWdpbi5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+IDogJ3Vua293bid9PC9wPlxuPHA+TG9jYXRpb246IHtwcm9wcy5jaGFyYWN0ZXIubG9jYXRpb24udXJsID8gPExpbmsgaHJlZj1cIi9sb2NhdGlvbi9bbGlkXVwiIGFzPXtgL2xvY2F0aW9uLyR7cHJvcHMubG9jYXRpb24uaWR9YH0+XG4gICAgICAgICAgICA8YT57cHJvcHMuY2hhcmFjdGVyLmxvY2F0aW9uLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz4gOiAndW5rb3duJ308L3A+XG4gICAgICA8aDI+RXBpc29kZXM8L2gyPlxuICAgICAge3Byb3BzLmVwaXNvZGVzLm1hcChlcGlzb2RlID0+IChcbiAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lcGlzb2RlL1tlaWRdXCIgYXM9e2AvZXBpc29kZS8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICA8YT57ZXBpc29kZS5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgICA8c3R5bGUganN4PntgXG4gIGgxLFxuICBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkNoYXJhY3Rlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHsgY2lkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2NpZH1gKS50aGVuKFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gIClcbiAgbGV0IG9yaWdpbl9yZXMgPSBudWxsO1xuICBpZiAocmVzLm9yaWdpbi51cmwpIHtcbiAgICBvcmlnaW5fcmVzID0gYXdhaXQgZmV0Y2gocmVzLm9yaWdpbi51cmwpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgbGV0IGxvY2F0aW9uX3JlcyA9IG51bGw7XG4gIGlmIChyZXMubG9jYXRpb24udXJsKSB7XG4gICAgbG9jYXRpb25fcmVzID0gYXdhaXQgZmV0Y2gocmVzLmxvY2F0aW9uLnVybCkudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGVpZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5lcGlzb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZXBpc29kZSA9IHJlcy5lcGlzb2RlW2ldLnNwbGl0KCcvJyk7XG4gICAgZWlkcy5wdXNoKGVwaXNvZGVbZXBpc29kZS5sZW5ndGgtMV0pO1xuICB9O1xuICBcbiAgbGV0IGVwaXNvZGVzX2FyciA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvJHtlaWRzfWApLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xuICAgIGlmIChlaWRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBlcGlzb2Rlc19hcnIgPSBbZXBpc29kZXNfYXJyXVxuICAgIH1cblxuICByZXR1cm4geyBjaGFyYWN0ZXI6IHJlcywgZXBpc29kZXM6IGVwaXNvZGVzX2Fyciwgb3JpZ2luOiBvcmlnaW5fcmVzLCBsb2NhdGlvbjogbG9jYXRpb25fcmVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il19 */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/character/[cid].js */"));
};

Character.getInitialProps = function _callee(context) {
  var cid, res, origin_res, location_res, eids, i, episode, episodes_arr;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cid = context.query.cid;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/character/".concat(cid)).then(function (response) {
            return response.json();
          }));

        case 3:
          res = _context.sent;
          origin_res = null;

          if (!res.origin.url) {
            _context.next = 9;
            break;
          }

          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(res.origin.url).then(function (response) {
            return response.json();
          }));

        case 8:
          origin_res = _context.sent;

        case 9:
          location_res = null;

          if (!res.location.url) {
            _context.next = 14;
            break;
          }

          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(res.location.url).then(function (response) {
            return response.json();
          }));

        case 13:
          location_res = _context.sent;

        case 14:
          eids = [];

          for (i = 0; i < res.episode.length; i++) {
            episode = res.episode[i].split('/');
            eids.push(episode[episode.length - 1]);
          }

          ;
          _context.next = 19;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/episode/".concat(eids)).then(function (response) {
            return response.json();
          }));

        case 19:
          episodes_arr = _context.sent;

          if (eids.length == 1) {
            episodes_arr = [episodes_arr];
          }

          return _context.abrupt("return", {
            character: res,
            episodes: episodes_arr,
            origin: origin_res,
            location: location_res
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ })

})
//# sourceMappingURL=[cid].js.09518db78527696723b2.hot-update.js.map