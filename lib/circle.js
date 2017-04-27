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

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _tooltipUpdate = require('./utils/tooltipUpdate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle(props) {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, props));
  }

  _createClass(Circle, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkCircle',
    value: function _mkCircle(dom) {
      var _props = this.props,
          data = _props.data,
          circleClass = _props.circleClass,
          geoPath = _props.geoPath,
          r = _props.r,
          x = _props.x,
          y = _props.y,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver;


      var circle = _d2.default.select(dom);

      circle.datum(data).attr('class', circleClass + ' bubble').attr("transform", function (d) {
        return 'translate(' + x + ', ' + y + ')';
      }).attr("r", r).on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      }).on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      return circle;
    }
  }, {
    key: 'render',
    value: function render() {
      var circle = _reactFauxDom2.default.createElement('circle');
      var chart = this._mkCircle(circle);

      return chart.node().toReact();
    }
  }]);

  return Circle;
}(_react.Component);

Circle.defaultProps = {
  centroidClass: 'react-d3-map-core__centroid',
  dy: '.35em',
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
Circle.propTypes = {
  data: _propTypes2.default.object.isRequired,
  geoPath: _propTypes2.default.func.isRequired,
  circleClass: _propTypes2.default.string
};
exports.default = Circle;
module.exports = exports['default'];