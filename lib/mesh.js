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

var Mesh = function (_Component) {
  _inherits(Mesh, _Component);

  function Mesh(props) {
    _classCallCheck(this, Mesh);

    return _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this, props));
  }

  _createClass(Mesh, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: '_mkMesh',
    value: function _mkMesh(dom) {
      var _props = this.props,
          data = _props.data,
          meshClass = _props.meshClass,
          geoPath = _props.geoPath,
          onMouseOut = _props.onMouseOut,
          onMouseOver = _props.onMouseOver,
          onClick = _props.onClick,
          id = _props.id;


      var mesh = _d2.default.select(dom);

      mesh.datum(data).attr('class', meshClass + ' mesh').attr("d", geoPath).style('fill', 'none').style('stroke', '#CCC').style('stroke-width', '.5px');

      if (id) mesh.attr('id', id);

      if (onMouseOver) mesh.on("mouseover", function (d, i) {
        return onMouseOver(this, d, id);
      });

      if (onMouseOut) mesh.on("mouseout", function (d, i) {
        return onMouseOut(this, d, id);
      });

      if (onClick) mesh.on("click", function (d, i) {
        return onClick(this, d, id);
      });

      return mesh;
    }
  }, {
    key: 'render',
    value: function render() {
      var meshGroup = _reactFauxDom2.default.createElement('path');
      var chart = this._mkMesh(meshGroup);

      return chart.node().toReact();
    }
  }]);

  return Mesh;
}(_react.Component);

Mesh.defaultProps = {
  meshClass: 'react-d3-map-core__mesh',
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
};
Mesh.propTypes = {
  data: _propTypes2.default.object.isRequired,
  geoPath: _propTypes2.default.func.isRequired,
  meshClass: _propTypes2.default.string
};
exports.default = Mesh;
module.exports = exports['default'];