(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var appendChildren = function appendChildren(children, node) {
  children.forEach(function (child) {
    if (typeof child === 'function') {
      node.appendChild(child(node));
      return false;
    }

    if (child === undefined || typeof child === 'boolean') {
      return false;
    }

    if (Array.isArray(child)) {
      appendChildren(child, node);
      return false;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      var textNode = document.createTextNode(child.toString());
      node.appendChild(textNode);
      return false;
    }

    node.appendChild(child);
  });
};

var createElement = function createElement(component, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof component === 'function') {
    return component({ ...props
    }, children);
  }

  var node = document.createElement(component);
  appendChildren(children, node);

  if (!props) {
    return node;
  }

  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key === 'onDidMount') {
      value(node, props, children);
    }

    if (key.indexOf('on') === 0) {
      var eventName = key.replace('on', '').toLowerCase();
      node.addEventListener(eventName, value);
      return false;
    }

    node.setAttribute(key, value);
  });
  return node;
};

exports.default = createElement;

},{}],2:[function(require,module,exports){
"use strict";

var _createElement = require("./createElement");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = function Data(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data;
  return (0, _createElement2.default)("div", null, data.map(function (_, i) {
    return (0, _createElement2.default)("p", null, i);
  }));
};

var Query = function Query() {
  return (0, _createElement2.default)("div", null, function (node) {
    setTimeout(function () {
      node.replaceWith((0, _createElement2.default)(Data, {
        data: [1, 2, 3]
      }));
    }, 3000);
    return (0, _createElement2.default)("p", null, "Loading...");
  });
};

var state = 0;

var Wow = function Wow(_ref2) {
  var text = _ref2.text;
  return (0, _createElement2.default)("div", null, function (node) {
    var onClick = function onClick(e) {
      node.replaceWith((0, _createElement2.default)(Wow, {
        text: ++state
      }));
    };

    return (0, _createElement2.default)("h1", {
      onClick: onClick
    }, text);
  });
};

var App = function App() {
  return (0, _createElement2.default)("div", null, (0, _createElement2.default)(Wow, {
    text: state
  }), (0, _createElement2.default)("p", null, "Hello world"), (0, _createElement2.default)("div", null, (0, _createElement2.default)("div", null, (0, _createElement2.default)("h2", null, "Test"), (0, _createElement2.default)("h3", null, "This is a h3")), Array.from(new Array(10)).map(function (_, i) {
    return (0, _createElement2.default)("p", null, i);
  })), (0, _createElement2.default)(Query, {
    title: "Test"
  }));
};

document.getElementById('root').appendChild((0, _createElement2.default)(App, null));

},{"./createElement":1}]},{},[2]);
