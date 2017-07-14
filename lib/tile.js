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

var _tooltipUpdate = require('./utils/tooltipUpdate');

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_Component) {
  _inherits(Tile, _Component);

  function Tile(props) {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, props));
  }

  _createClass(Tile, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          scale = _props.scale,
          translate = _props.translate,
          tiles = _props.tiles,
          tileClass = _props.tileClass,
          onLoad = _props.onLoad;


      var transform = "scale(" + scale + ")translate(" + translate + ")";
      var tilesGroup = tiles.map(function (t, i) {

        var id = 'react-d3-map-core__tiles__' + t.join('-');

        var c = t.slice();

        var minCol = 0;
        var maxCol = Math.pow(2, t[2]);

        while (c[0] < minCol) {
          c[0] += maxCol;
        }while (c[0] >= maxCol) {
          c[0] -= maxCol;
        }var z = c[2];
        var y = c[1];
        var x = c[0];
        var xlink;

        if (y >= maxCol || c[2] === 0 && y > 0 || y < minCol) {
          xlink = null;
        } else {
          xlink = "//a.tile.openstreetmap.org/" + z + "/" + x + "/" + y + ".png";
        }

        return _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { key: t.join('-'), classNames: 'tiles', timeout: 100 },
          _react2.default.createElement('image', {
            className: tileClass + ' tile',
            id: id,
            xlinkHref: xlink,
            width: 1,
            height: 1,
            x: t[0],
            y: t[1],
            onLoad: onLoad
          })
        );
      });

      return _react2.default.createElement(
        'g',
        {
          transform: transform
        },
        _react2.default.createElement(
          ReactCSSTransitionGroup,
          { component: 'g' },
          tilesGroup
        )
      );
    }
  }]);

  return Tile;
}(_react.Component);

Tile.defaultProps = {
  tileClass: 'react-d3-map-core__tile'
};
Tile.propTypes = {
  tiles: _propTypes2.default.array.isRequired,
  tileClass: _propTypes2.default.string,
  scale: _propTypes2.default.number.isRequired,
  translate: _propTypes2.default.array.isRequired
};
exports.default = Tile;
module.exports = exports['default'];