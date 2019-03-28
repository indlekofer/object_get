"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(obj, find, def) {
  if (obj === null || _typeof(obj) != 'object') return def;
  var v = obj;

  for (var i = 0, c = find.length; i < c; i++) {
    if (typeof v[find[i]] == "undefined") return def;else v = v[find[i]];
  }

  return v;
};

exports.default = _default;