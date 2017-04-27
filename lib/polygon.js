"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _tooltipUpdate = require('./utils/tooltipUpdate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = function (_Component) {
  _inherits(Polygon, _Component);

  function Polygon(props) {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, props));
  }

  _createClass(Polygon, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkPolygon',
    value: function _mkPolygon(dom) {
      var _props = this.props,
          id = _props.id,
          data = _props.data,
          polygonClass = _props.polygonClass,
          geoPath = _props.geoPath,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver,
          onClick = _props.onClick;


      var polygon = _d2.default.select(dom);

      polygon.datum(data).attr('class', polygonClass + ' polygon').attr("d", geoPath);

      if (id) polygon.attr('id', id);

      if (onMouseOver) polygon.on("mouseover", function (d, i) {
        return onMouseOver(this, d, id);
      });

      if (onMouseOut) polygon.on("mouseout", function (d, i) {
        return onMouseOut(this, d, id);
      });

      if (onClick) polygon.on("click", function (d, i) {
        return onClick(this, d, id);
      });

      return polygon;
    }
  }, {
    key: 'render',
    value: function render() {
      var poly = _reactFauxDom2.default.createElement('path');
      var chart = this._mkPolygon(poly);

      return chart.node().toReact();
    }
  }]);

  return Polygon;
}(_react.Component);

Polygon.defaultProps = {
  polygonClass: 'react-d3-map-core__polygon'
};
Polygon.propTypes = {
  data: _propTypes2.default.object.isRequired,
  geoPath: _propTypes2.default.func.isRequired,
  polygonClass: _propTypes2.default.string
};
exports.default = Polygon;
module.exports = exports['default'];