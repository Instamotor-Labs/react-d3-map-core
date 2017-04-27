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

var Point = function (_Component) {
  _inherits(Point, _Component);

  function Point(props) {
    _classCallCheck(this, Point);

    return _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, props));
  }

  _createClass(Point, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkPoint',
    value: function _mkPoint(dom) {
      var _props = this.props,
          id = _props.id,
          data = _props.data,
          pointClass = _props.pointClass,
          geoPath = _props.geoPath,
          onClick = _props.onClick,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver,
          zoomScale = _props.zoomScale,
          zoomTranslate = _props.zoomTranslate;


      var point = _d2.default.select(dom);

      point.datum(data).attr('class', pointClass + ' point').attr("d", geoPath);

      if (id) point.attr('id', id);

      if (onMouseOver) point.on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      });

      if (onMouseOut) point.on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      if (onClick) point.on("click", function (d, i) {
        return onClick(this, d, id);
      });

      if (zoomScale && zoomTranslate) point.attr("transform", "translate(" + zoomTranslate + ")scale(" + zoomScale + ")");

      return point;
    }
  }, {
    key: 'render',
    value: function render() {
      var pointGroup = _reactFauxDom2.default.createElement('path');
      var chart = this._mkPoint(pointGroup);

      return chart.node().toReact();
    }
  }]);

  return Point;
}(_react.Component);

Point.defaultProps = {
  pointClass: 'react-d3-map-core__point'
};
Point.propTypes = {
  data: _propTypes2.default.object.isRequired,
  geoPath: _propTypes2.default.func.isRequired,
  pointClass: _propTypes2.default.string,
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
exports.default = Point;
module.exports = exports['default'];