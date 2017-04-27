"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _svg = require('./container/svg');

var _svg2 = _interopRequireDefault(_svg);

var _title = require('./container/title');

var _title2 = _interopRequireDefault(_title);

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _tooltipUpdate = require('./utils/tooltipUpdate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartContainer = function (_Component) {
  _inherits(ChartContainer, _Component);

  function ChartContainer(props) {
    _classCallCheck(this, ChartContainer);

    return _possibleConstructorReturn(this, (ChartContainer.__proto__ || Object.getPrototypeOf(ChartContainer)).call(this, props));
  }

  _createClass(ChartContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          title = _props.title;


      var chartTitle;

      var divStyle = {
        width: width,
        position: 'relative'
      };

      if (title) chartTitle = _react2.default.createElement(_title2.default, this.props);

      return _react2.default.createElement(
        'div',
        { style: divStyle },
        chartTitle,
        _react2.default.createElement(_svg2.default, this.props)
      );
    }
  }]);

  return ChartContainer;
}(_react.Component);

ChartContainer.defaultProps = _commonProps2.default;
exports.default = ChartContainer;
module.exports = exports['default'];