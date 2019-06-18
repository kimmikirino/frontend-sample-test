webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommitsList.js":
/*!***********************************!*\
  !*** ./components/CommitsList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CommitsListCss.scss */ "./components/CommitsListCss.scss");









var CommitsList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitsList, _React$Component);

  function CommitsList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommitsList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommitsList).call(this, props));
    _this.commitPosition = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommitsList, [{
    key: "handleScroll",
    value: function handleScroll() {
      window.scrollTo(0, this.commitPosition.current.offsetTop);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log(this.props.commits, 'props', prevProps.commits, 'prev');

      if (this.props.commits !== prevProps.commits) {
        this.handleScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var sha = this.props.sha;
      var repo = this.props.repo;
      var commits = this.props.commits;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: this.commitPosition,
        className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "commits-list"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "commits-list"
      }, commits != '' ? commits.map(function (commit) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: commit.node_id,
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "commits-list-box"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, "Quem commitou?"), " ", commit.commit.author.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, "Quando commitou?"), " ", commit.commit.author.date), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "jsx-".concat(_components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
        }, "Mensagem:"), " ", commit.commit.message));
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"].__hash
      }, _components_CommitsListCss_scss__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
  }]);

  return CommitsList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommitsList);

/***/ })

})
//# sourceMappingURL=index.js.0b0561d9da6eab2a1c6d.hot-update.js.map