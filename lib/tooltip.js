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

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
  }

  _createClass(Tooltip, [{
    key: '_mkContent',
    value: function _mkContent() {
      var contentTooltip = this.props.contentTooltip;


      var cv = Object.keys(contentTooltip).map(function (d, i) {

        var trStyle = {
          display: 'table-row',
          backgroundImage: 'linear-gradient(#FFF, #EEE)',
          padding: '3px',
          height: '30px'
        };

        var tdStyle = {
          display: 'table-cell',
          padding: '3px',
          verticalAlign: 'middle',
          whiteSpace: 'normal',
          border: '1px solid #D3D3D3',
          maxWidth: '250px'
        };

        var tdHeadStyle = {
          display: 'table-cell',
          padding: '3px',
          verticalAlign: 'middle',
          whiteSpace: 'normal',
          border: '1px solid #D3D3D3',
          backgroundColor: '#555',
          color: '#FFF',
          textTransform: 'capitalize'
        };

        return _react2.default.createElement(
          'div',
          { className: 'tooltip_tr', style: trStyle, key: i },
          _react2.default.createElement(
            'div',
            { className: 'tooltip_td', style: tdHeadStyle, key: i },
            d
          ),
          _react2.default.createElement(
            'div',
            { className: 'tooltip_td', style: tdStyle, key: i.i },
            contentTooltip[d].toString()
          )
        );
      });

      return cv;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          xTooltip = _props.xTooltip,
          yTooltip = _props.yTooltip,
          contentTooltip = _props.contentTooltip,
          dist = _props.dist;


      var style = {
        left: xTooltip ? xTooltip + dist : -100,
        top: yTooltip ? yTooltip + dist : -100,
        position: 'fixed'
      };

      if (contentTooltip) {
        var cvContent = this._mkContent();
      }

      var tableStyle = {
        display: 'table',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSizing: 'border-box'
      };

      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: 'react-d3-map-core__tooltip_utils',
          ref: 'tooltip'
        },
        _react2.default.createElement(
          'div',
          { className: 'tooltip_table', style: tableStyle },
          cvContent
        )
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.defaultProps = {
  gravity: 's',
  dist: 10
};
exports.default = Tooltip;
module.exports = exports['default'];