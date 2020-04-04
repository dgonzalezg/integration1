webpackHotUpdate("static/development/pages/location/[lid].js",{

/***/ "./pages/location/[lid].js":
/*!*********************************!*\
  !*** ./pages/location/[lid].js ***!
  \*********************************/
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
    _jsxFileName = "/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/location/[lid].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Location = function Location(props) {
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
  }, props.location.name), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 1
    }
  }, "Type: ", props.location.type), __jsx("p", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Dimension: ", props.location.dimension), __jsx("h2", {
    className: "jsx-2059263984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, " Residents"), props.residents.map(function (resident) {
    return __jsx("li", {
      key: resident.id,
      className: "jsx-2059263984",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/character/[cid]",
      as: "/character/".concat(resident.id),
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
    }, resident.name)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2059263984",
    __self: _this
  }, "h1.jsx-2059263984,a.jsx-2059263984{font-family:'Arial';}ul.jsx-2059263984{padding:0;}li.jsx-2059263984{list-style:none;margin:5px 0;}a.jsx-2059263984{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2059263984:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWVnby9Hb29nbGUgRHJpdmUvUFVDLzIwMjAvVGFsbGVyIGRlIEludGVncmFjaW9uL1RhcmVhL1QxL2ludGVncmF0aW9uMS9wYWdlcy9sb2NhdGlvbi9bbGlkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm1CLEFBSXlCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2RpZWdvL0dvb2dsZSBEcml2ZS9QVUMvMjAyMC9UYWxsZXIgZGUgSW50ZWdyYWNpb24vVGFyZWEvVDEvaW50ZWdyYXRpb24xL3BhZ2VzL2xvY2F0aW9uL1tsaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTG9jYXRpb24gPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPntwcm9wcy5sb2NhdGlvbi5uYW1lfTwvaDE+XG48cD5UeXBlOiB7cHJvcHMubG9jYXRpb24udHlwZX08L3A+XG4gICAgPHA+RGltZW5zaW9uOiB7cHJvcHMubG9jYXRpb24uZGltZW5zaW9ufTwvcD5cbiAgICA8aDI+IFJlc2lkZW50czwvaDI+XG4gICAge3Byb3BzLnJlc2lkZW50cy5tYXAocmVzaWRlbnQgPT4gKFxuICAgICAgICA8bGkga2V5PXtyZXNpZGVudC5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFyYWN0ZXIvW2NpZF1cIiBhcz17YC9jaGFyYWN0ZXIvJHtyZXNpZGVudC5pZH1gfT5cbiAgICAgICAgICAgIDxhPntyZXNpZGVudC5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICAgICA8c3R5bGUganN4PntgXG4gIGgxLFxuICBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkxvY2F0aW9uLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgY29uc3QgeyBsaWQgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vJHtsaWR9YCkudGhlbihcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICApXG4gIGNvbnN0IHJpZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMucmVzaWRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVzaWRlbnQgPSByZXMucmVzaWRlbnRzW2ldLnNwbGl0KCcvJyk7XG4gICAgcmlkcy5wdXNoKHJlc2lkZW50W3Jlc2lkZW50Lmxlbmd0aC0xXSk7XG4gIH07XG5cbiAgY29uc3QgcmVzaWRlbnRzX2FyciA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke3JpZHN9YCkudGhlbihcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcblxuICByZXR1cm4geyBsb2NhdGlvbjogcmVzLCByZXNpZGVudHM6IHJlc2lkZW50c19hcnIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyJdfQ== */\n/*@ sourceURL=/Users/diego/Google Drive/PUC/2020/Taller de Integracion/Tarea/T1/integration1/pages/location/[lid].js */"));
};

Location.getInitialProps = function _callee(context) {
  var lid, res, rids, i, resident, residents_arr;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lid = context.query.lid;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/location/".concat(lid)).then(function (response) {
            return response.json();
          }));

        case 3:
          res = _context.sent;
          rids = [];

          for (i = 0; i < res.residents.length; i++) {
            resident = res.residents[i].split('/');
            rids.push(resident[resident.length - 1]);
          }

          ;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://rickandmortyapi.com/api/character/".concat(rids)).then(function (response) {
            return response.json();
          }));

        case 9:
          residents_arr = _context.sent;
          return _context.abrupt("return", {
            location: res,
            residents: residents_arr
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ })

})
//# sourceMappingURL=[lid].js.a67b5c4446c8b8dc282b.hot-update.js.map