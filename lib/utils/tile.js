"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tileFunc = tileFunc;

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _d3GeoTile = require('../library/d3.geo.tile.js');

var _d3GeoTile2 = _interopRequireDefault(_d3GeoTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tileFunc(props) {
  var scale = props.scale,
      translate = props.translate,
      size = props.size,
      zoomDelta = props.zoomDelta;


  var tileFunc;

  tileFunc = (0, _d3GeoTile2.default)();

  if (scale) tileFunc.scale(scale);
  if (translate) tileFunc.translate(translate);
  if (size) tileFunc.size(size);
  if (zoomDelta) tileFunc.zoomDelta(zoomDelta);

  return tileFunc();
}