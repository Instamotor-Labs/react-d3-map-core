"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomControl = function (_Component) {
  _inherits(ZoomControl, _Component);

  function ZoomControl(props) {
    _classCallCheck(this, ZoomControl);

    return _possibleConstructorReturn(this, (ZoomControl.__proto__ || Object.getPrototypeOf(ZoomControl)).call(this, props));
  }

  _createClass(ZoomControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          zoomInClick = _props.zoomInClick,
          zoomOutClick = _props.zoomOutClick,
          top = _props.top,
          left = _props.left;


      var zoomControlStyle = {
        left: left,
        top: top,
        position: 'absolute',
        border: '2px solid rgba(0,0,0,0.2)',
        backgroundClip: 'padding-box',
        boxShadow: 'none',
        marginLeft: '10px',
        marginTop: '10px',
        cursor: 'pointer'
      };

      var zoomInStyle = {
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        fontSize: '22px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #CCC',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'black',
        display: 'block'
      };

      var zoomOutStyle = {
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        fontSize: '24px',
        backgroundColor: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'black',
        display: 'block'
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-d3-map-core__zoom-control', style: zoomControlStyle },
        _react2.default.createElement(
          'a',
          { className: 'react-d3-map-core__zoom-control__zoom-in', style: zoomInStyle, onClick: zoomInClick },
          '+'
        ),
        _react2.default.createElement(
          'a',
          { className: 'react-d3-map-core__zoom-control__zoom-out', style: zoomOutStyle, onClick: zoomOutClick },
          '-'
        )
      );
    }
  }]);

  return ZoomControl;
}(_react.Component);

ZoomControl.defaultProps = {
  left: 0,
  top: 0,
  zoomInClick: function zoomInClick() {},
  zoomOutClick: function zoomOutClick() {}
};
ZoomControl.propTypes = {
  left: _propTypes2.default.number.isRequired,
  top: _propTypes2.default.number.isRequired,
  zoomInClick: _propTypes2.default.func.isRequired,
  zoomOutClick: _propTypes2.default.func.isRequired
};
exports.default = ZoomControl;
module.exports = exports['default'];