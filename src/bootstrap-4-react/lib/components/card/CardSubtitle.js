'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardSubtitle = function (_Component) {
  _inherits(CardSubtitle, _Component);

  function CardSubtitle() {
    _classCallCheck(this, CardSubtitle);

    return _possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).apply(this, arguments));
  }

  _createClass(CardSubtitle, [{
    key: 'render',
    value: function render() {
      var as = this.props.as || 'h5';
      var p = _fsts.JS.lessProps(this.props, 'as');
      return _react2.default.createElement(as, p, p.children);
    }
  }]);

  return CardSubtitle;
}(_react.Component);

exports.default = (0, _utilities.stack)(CardSubtitle, _utilities.domStack.concat((0, _utilities.withClassName)('card-subtitle')));