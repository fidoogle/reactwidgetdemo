"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.parse-int.js");

var _useCryptoData = _interopRequireDefault(require("../hooks/useCryptoData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CryptoItem = props => /*#__PURE__*/React.createElement("div", {
  className: "item"
}, /*#__PURE__*/React.createElement("img", {
  src: props.ImageUrl,
  className: "icon",
  alt: props.Name
}), /*#__PURE__*/React.createElement("div", {
  className: "display-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "name"
}, props.Name), /*#__PURE__*/React.createElement("div", {
  className: "fullname"
}, props.FullName)), /*#__PURE__*/React.createElement("div", {
  className: "price-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "price"
}, props.Price), /*#__PURE__*/React.createElement("div", {
  className: "price-change ".concat(parseInt(props.Change24hr) < 0 ? "danger" : "success")
}, props.Change24hr)));

const CryptoList = () => {
  const {
    cryptoData,
    isLoading
  } = (0, _useCryptoData.default)();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, !isLoading ? cryptoData.map(itemData => /*#__PURE__*/React.createElement(CryptoItem, _extends({
    key: itemData.Id
  }, itemData))) : /*#__PURE__*/React.createElement("p", {
    className: "loading-text"
  }, "Loading Data...")));
};

var _default = CryptoList;
exports.default = _default;