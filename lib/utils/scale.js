"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scale = scale;

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scale(props) {
  var type = props.type,
      scale = props.scale;


  var func;

  if (scale === 'linear') func = _d2.default.scale.linear();else if (scale === 'identity') func = _d2.default.scale.identity();else if (scale === 'sqrt') func = _d2.default.scale.sqrt();else if (scale === 'pow') func = _d2.default.scale.pow();else if (scale === 'log') func = _d2.default.scale.log();else if (scale === 'quantize') func = _d2.default.scale.quantize();else if (scale === 'quantile') func = _d2.default.scale.quantile();else if (scale === 'ordinal') func = _d2.default.scale.ordinal();else if (scale === 'time') func = _d2.default.time.scale();else new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. ');

  func = _mkScaleSettings(props, func);

  return func;
}

function _mkScaleSettings(props, func) {
  var type = props.type,
      range = props.range,
      domain = props.domain,
      scale = props.scale,
      rangeRoundBands = props.rangeRoundBands;


  if (range) func.range(range);

  if (domain) func.domain(domain);

  if (scale === 'ordinal' && rangeRoundBands) {
    var interval = rangeRoundBands.interval,
        padding = rangeRoundBands.padding,
        outerPadding = rangeRoundBands.outerPadding;


    if (padding && outerPadding) func.rangeRoundBands(interval, padding, outerPadding);else if (padding) func.rangeRoundBands(interval, padding);else func.rangeRoundBands(interval);
  }

  return func;
}