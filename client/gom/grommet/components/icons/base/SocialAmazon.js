'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-amazon', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-amazon');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#F90', fillRule: 'evenodd', d: 'M11.9924596,23.9397465 C8.83711397,23.9185077 6.03567124,22.8789612 3.53203329,20.9850151 C2.63838806,20.3088366 1.82646601,19.5437784 1.08564773,18.7032301 C1.0593301,18.6732188 1.01408224,18.6445926 1.01108111,18.6122727 C0.999538287,18.4963828 1.00253942,18.3793386 1,18.2627561 C1.10019169,18.278916 1.21815932,18.2662189 1.29780479,18.3156222 C1.96751928,18.7327798 2.61183957,19.1935692 3.29817573,19.5802537 C5.2872347,20.7005999 7.41480753,21.4266434 9.67581537,21.7720046 C10.8557226,21.9520726 12.0409395,22.0114027 13.2256946,21.9426075 C15.4894728,21.8114811 17.6530592,21.2481914 19.7120677,20.2936001 C20.0373444,20.1428508 20.3561571,19.9780193 20.6756624,19.8152656 C20.8303362,19.7363127 20.9829323,19.7039928 21.1142896,19.8425066 C21.2530343,19.9886387 21.247032,20.165013 21.1503032,20.3279977 C21.0948977,20.4217254 21.0106351,20.5020634 20.9279885,20.5757066 C19.0869085,22.2092467 16.9334797,23.2123179 14.5316495,23.6788787 C13.7001046,23.8404782 12.8480135,23.8958838 12.0051567,24 C12.0010013,23.9799155 11.996615,23.959831 11.9924596,23.9397465 M20.882048,18.8454608 C20.4263375,18.8890927 19.9207619,18.9387268 19.4149554,18.9848981 C19.3041444,18.9950558 19.1914864,19.0015197 19.0806753,18.9948249 C18.9532426,18.9872066 18.9329272,18.9087155 19.0026459,18.8159112 C19.0442,18.7605056 19.1065313,18.718028 19.1653996,18.6783207 C19.7005248,18.3191081 20.3062921,18.1618949 20.9339907,18.0787866 C21.5298312,17.9998337 22.124979,18.0183022 22.7074298,18.1743612 C23.1005783,18.2796317 23.186226,18.3269573 23.1569073,18.7845147 C23.0793395,19.9902778 22.691039,21.086615 21.8167857,21.9673322 C21.7719996,22.0125801 21.7297528,22.0707559 21.6743473,22.0926873 C21.6004732,22.1217752 21.5148255,22.1213135 21.4342566,22.1335489 C21.4361035,22.0601365 21.4208669,21.9809528 21.4427983,21.9142353 C21.6512617,21.2800727 21.8689593,20.6489112 22.0762683,20.0145177 C22.1178225,19.8873158 22.1335207,19.750418 22.1494498,19.6165213 C22.2002382,19.1887443 22.0291736,18.9735861 21.575079,18.9070995 C21.3631528,18.8761647 21.1479946,18.8683156 20.882048,18.8454608 M13.9965473,9.42010077 C13.1377614,9.41525279 12.3166051,9.45242067 11.5310007,9.71582785 C11.142931,9.84603088 10.7495517,10.0110932 10.4155024,10.2426422 C9.49276931,10.8818837 9.25267863,11.8334739 9.32863039,12.8935666 C9.36879941,13.4550094 9.53755546,13.9746672 9.95171189,14.381898 C10.5401649,14.9604242 11.5307698,15.0363759 12.3260702,14.5663522 C13.0193321,14.1565821 13.4325651,13.5242663 13.7008203,12.7873726 C14.0960465,11.7021166 13.9716148,10.5713818 13.9965473,9.42010077 M14.6290939,15.7725771 C14.3204389,16.0535293 14.0353312,16.3183217 13.744683,16.5768809 C12.627107,17.5707178 11.3066083,18.0146547 9.82427914,18.0444352 C9.01951364,18.0605951 8.22929209,17.9998799 7.47600757,17.7023059 C6.13427002,17.1720287 5.2787161,16.1915815 4.93173889,14.8002098 C4.5009608,13.0722494 4.64640035,11.4084672 5.66886346,9.89797358 C6.4246874,8.7815519 7.51779258,8.11783967 8.77988467,7.71153236 C9.86283216,7.36293915 10.983871,7.2101122 12.1092961,7.08406459 C12.726837,7.01480766 13.3450705,6.953169 13.9928536,6.88506635 C13.9734617,6.11169732 14.0833494,5.33578887 13.8116313,4.5880449 C13.5708481,3.92571782 13.0622714,3.58520459 12.3976357,3.43283935 C11.3913326,3.20221378 10.250671,3.57758633 9.70977435,4.37103986 C9.52624349,4.64044931 9.41404727,4.9684963 9.31547158,5.28407703 C9.17649601,5.72870651 8.97195721,5.87345349 8.51024436,5.81850966 C7.60782659,5.71162313 6.70333111,5.62297427 5.80091334,5.51747288 C5.35328272,5.46483761 5.17575413,5.20997212 5.26301786,4.77503861 C5.65986006,2.79567561 6.80629307,1.4123839 8.67207471,0.684262729 C10.8742142,-0.174984891 13.1252952,-0.241702398 15.3569843,0.578992199 C17.2063751,1.25909523 18.2221434,2.61445331 18.3574252,4.59243118 C18.402904,5.26006796 18.4093679,5.9311676 18.4121382,6.60088209 C18.4192948,8.33299786 18.4276056,10.0651136 18.4093679,11.7969985 C18.3992103,12.7615167 18.6667729,13.6175323 19.2531482,14.3791277 C19.3939706,14.5624277 19.5366399,14.7461894 19.6559926,14.9433408 C19.8538366,15.2702335 19.8009705,15.5181733 19.5149394,15.7649588 C18.7780456,16.4007374 18.0425371,17.0383629 17.3074902,17.67645 C16.9027989,18.0275826 16.6223083,18.0227347 16.2153085,17.6799129 C15.679029,17.2281268 15.2385549,16.6964645 14.8583344,16.1110126 C14.7890775,16.0043569 14.715896,15.9002407 14.6290939,15.7725771', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialAmazon';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];