"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graticule = graticule;

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function graticule(props) {

  var graticule = _d2.default.geo.graticule();

  return graticule;
}