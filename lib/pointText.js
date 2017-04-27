
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

var PointText = function (_Component) {
  _inherits(PointText, _Component);

  function PointText(props) {
    _classCallCheck(this, PointText);

    return _possibleConstructorReturn(this, (PointText.__proto__ || Object.getPrototypeOf(PointText)).call(this, props));
  }

  _createClass(PointText, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkPointText',
    value: function _mkPointText(dom) {
      var _props = this.props,
          data = _props.data,
          pointTextClass = _props.pointTextClass,
          text = _props.text,
          x = _props.x,
          dy = _props.dy,
          textAnchor = _props.textAnchor,
          projection = _props.projection,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver;


      var pointText = _d2.default.select(dom);

      pointText.datum(data).attr('class', pointTextClass + ' pointText').attr("transform", function (d) {
        return 'translate(' + projection(d.geometry.coordinates) + ')';
      }).attr("dy", dy).attr("x", x).style("text-anchor", textAnchor).text(text).on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      }).on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      return pointText;
    }
  }, {
    key: 'render',
    value: function render() {
      var pointTextGroup = _reactFauxDom2.default.createElement('text');
      var chart = this._mkPointText(pointTextGroup);

      return chart.node().toReact();
    }
  }]);

  return PointText;
}(_react.Component);

PointText.defaultProps = {
  pointTextClass: 'react-d3-map-core__pointText',
  dy: '.35em',
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
PointText.propTypes = {
  data: _propTypes2.default.object.isRequired,
  projection: _propTypes2.default.func.isRequired,
  pointTextClass: _propTypes2.default.string
};
exports.default = PointText;
module.exports = exports['default'];