'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withDrop = withDrop;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _className = require('./className');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withDrop() {
  return function (Comp) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              dropup = _props.dropup,
              dropleft = _props.dropleft,
              dropright = _props.dropright,
              dropdownToggle = _props.dropdownToggle;

          var cn = (0, _className.mergeClassName)(this.props, [dropup ? 'dropup' : '', dropleft ? 'dropleft' : '', dropright ? 'dropright' : '', dropdownToggle ? 'dropdown-toggle' : '']);
          var p = _fsts.JS.lessProps(this.props, ['className', 'dropup', 'dropleft', 'dropright', 'dropdownToggle']);

          return cn ? dropdownToggle ? _react2.default.createElement(
            Comp,
            _extends({}, p, { className: cn, 'data-toggle': 'dropdown' }),
            this.props.children
          ) : _react2.default.createElement(
            Comp,
            _extends({}, p, { className: cn }),
            this.props.children
          ) : _react2.default.createElement(
            Comp,
            p,
            this.props.children
          );
        }
      }]);

      return _class;
    }(_react.Component);
  };
}