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

var Sphere = function (_Component) {
  _inherits(Sphere, _Component);

  function Sphere(props) {
    _classCallCheck(this, Sphere);

    return _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, props));
  }

  _createClass(Sphere, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkGraticule',
    value: function _mkGraticule(dom) {
      var _props = this.props,
          sphereClass = _props.sphereClass,
          geoPath = _props.geoPath,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver;


      var sphere = _d2.default.select(dom);

      sphere.datum({ type: "Sphere" }).attr('class', sphereClass + ' sphere').attr('d', geoPath).on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      }).on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      return sphere;
    }
  }, {
    key: 'render',
    value: function render() {
      var sphereGroup = _reactFauxDom2.default.createElement('path');
      var chart = this._mkGraticule(sphereGroup);

      return chart.node().toReact();
    }
  }]);

  return Sphere;
}(_react.Component);

Sphere.defaultProps = {
  sphereClass: 'react-d3-map-core__sphere',
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
Sphere.propTypes = {
  geoPath: _propTypes2.default.func.isRequired,
  sphereClass: _propTypes2.default.string
};
exports.default = Sphere;
module.exports = exports['default'];