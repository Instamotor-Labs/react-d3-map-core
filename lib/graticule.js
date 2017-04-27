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

var _graticule = require('./utils/graticule');

var _tooltipUpdate = require('./utils/tooltipUpdate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graticule = function (_Component) {
  _inherits(Graticule, _Component);

  function Graticule(props) {
    _classCallCheck(this, Graticule);

    return _possibleConstructorReturn(this, (Graticule.__proto__ || Object.getPrototypeOf(Graticule)).call(this, props));
  }

  _createClass(Graticule, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkGraticule',
    value: function _mkGraticule(dom) {
      var _props = this.props,
          graticuleClass = _props.graticuleClass,
          geoPath = _props.geoPath,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver;


      var grati = _d2.default.select(dom);

      grati.datum((0, _graticule.graticule)(this.props)).attr('class', graticuleClass + ' graticule').attr('d', geoPath).style('fill', 'none').style('stroke', '#777').style('stroke-opacity', .5).style('stroke-width', '.5px');

      if (onMouseOut) grati.on("mouseover", function (d, i) {
        return onMouseOver(this, d, i);
      });

      if (onMouseOver) grati.on("mouseout", function (d, i) {
        return onMouseOut(this, d, i);
      });

      return grati;
    }
  }, {
    key: 'render',
    value: function render() {
      var graticuleGroup = _reactFauxDom2.default.createElement('path');
      var chart = this._mkGraticule(graticuleGroup);

      return chart.node().toReact();
    }
  }]);

  return Graticule;
}(_react.Component);

Graticule.defaultProps = {
  graticuleClass: 'react-d3-map-core__graticule'
};
Graticule.propTypes = {
  geoPath: _propTypes2.default.func.isRequired,
  graticuleClass: _propTypes2.default.string
};
exports.default = Graticule;
module.exports = exports['default'];