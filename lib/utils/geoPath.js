"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geoPath = geoPath;

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function geoPath(proj, props) {
  props = props || {};

  var _props = props,
      pointRadius = _props.pointRadius;


  var geoPath = _d2.default.geo.path();

  geoPath.projection(proj);

  if (pointRadius) geoPath.pointRadius(pointRadius);

  return geoPath;
}