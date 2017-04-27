
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

var Centroid = function (_Component) {
  _inherits(Centroid, _Component);

  function Centroid(props) {
    _classCallCheck(this, Centroid);

    return _possibleConstructorReturn(this, (Centroid.__proto__ || Object.getPrototypeOf(Centroid)).call(this, props));
  }

  _createClass(Centroid, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkCentroid',
    value: function _mkCentroid(dom) {
      var _props = this.props,
          data = _props.data,
          centroidClass = _props.centroidClass,
          text = _props.text,
          dy = _props.dy,
          geoPath = _props.geoPath,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver;


      var centroid = _d2.default.select(dom);

      centroid.datum(data).attr('class', centroidClass + ' centroid').attr("transform", function (d) {
        return 'translate(' + geoPath.centroid(d) + ')';
      }).attr("dy", dy).text(text).on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      }).on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      return centroid;
    }
  }, {
    key: 'render',
    value: function render() {
      var centroidGroup = _reactFauxDom2.default.createElement('text');
      var chart = this._mkCentroid(centroidGroup);

      return chart.node().toReact();
    }
  }]);

  return Centroid;
}(_react.Component);

Centroid.defaultProps = {
  centroidClass: 'react-d3-map-core__centroid',
  dy: '.35em',
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
Centroid.propTypes = {
  data: _propTypes2.default.object.isRequired,
  geoPath: _propTypes2.default.func.isRequired,
  centroidClass: _propTypes2.default.string
};
exports.default = Centroid;
module.exports = exports['default'];