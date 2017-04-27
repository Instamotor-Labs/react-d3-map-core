"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartSvg = function (_Component) {
  _inherits(ChartSvg, _Component);

  function ChartSvg(props) {
    _classCallCheck(this, ChartSvg);

    return _possibleConstructorReturn(this, (ChartSvg.__proto__ || Object.getPrototypeOf(ChartSvg)).call(this, props));
  }

  _createClass(ChartSvg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height,
          scaleExtent = _props.scaleExtent,
          projection = _props.projection,
          onZoom = _props.onZoom,
          onZoomStart = _props.onZoomStart,
          onZoomEnd = _props.onZoomEnd,
          center = _props.center;


      var tau = 2 * Math.PI;

      // implement zoom if xscale and y scale is set!
      if (projection && onZoom) {
        var center = projection(center);

        var zoom = _d2.default.behavior.zoom().scale(projection.scale() * tau).translate([width - center[0], height - center[1]]);

        if (scaleExtent) zoom.scaleExtent([scaleExtent[0] * tau, scaleExtent[1] * tau]);

        if (onZoom) zoom.on("zoom", function () {
          onZoom.call(_this2, zoom.scale(), zoom.translate());
        });

        if (onZoomStart) zoom.on("zoomstart", function () {
          onZoomStart.call(_this2, zoom.scale(), zoom.translate());
        });

        if (onZoomEnd) zoom.on("zoomend", function () {
          onZoomEnd.call(_this2, zoom.scale(), zoom.translate());
        });

        _d2.default.select(_reactDom2.default.findDOMNode(this.refs.svgContainer)).call(zoom);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          height = _props2.height,
          width = _props2.width,
          svgClassName = _props2.svgClassName,
          id = _props2.id,
          children = _props2.children;


      return _react2.default.createElement(
        'svg',
        {
          height: height,
          width: width,
          className: svgClassName,
          ref: 'svgContainer'
        },
        _react2.default.createElement(
          'g',
          null,
          children
        )
      );
    }
  }]);

  return ChartSvg;
}(_react.Component);

ChartSvg.defaultProps = Object.assign(_commonProps2.default, {
  svgClassName: 'react-d3-map-core__container_svg',
  scaleExtent: [1 << 12, 1 << 28]
});
ChartSvg.propTypes = {
  id: _propTypes2.default.string,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  svgClassName: _propTypes2.default.string.isRequired
};
exports.default = ChartSvg;
module.exports = exports['default'];