webpackJsonp(["fi-FI-translations"],{

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(t.ReactIntlLocaleData=t.ReactIntlLocaleData||{},t.ReactIntlLocaleData.fi=e())}(this,function(){"use strict";return[{locale:"fi",pluralRuleFunction:function(t,e){var n=!String(t).split(".")[1];return e?"other":1==t&&n?"one":"other"},fields:{year:{displayName:"vuosi",relative:{0:"tänä vuonna",1:"ensi vuonna","-1":"viime vuonna"},relativeTime:{future:{one:"{0} vuoden päästä",other:"{0} vuoden päästä"},past:{one:"{0} vuosi sitten",other:"{0} vuotta sitten"}}},month:{displayName:"kuukausi",relative:{0:"tässä kuussa",1:"ensi kuussa","-1":"viime kuussa"},relativeTime:{future:{one:"{0} kuukauden päästä",other:"{0} kuukauden päästä"},past:{one:"{0} kuukausi sitten",other:"{0} kuukautta sitten"}}},day:{displayName:"päivä",relative:{0:"tänään",1:"huomenna",2:"ylihuomenna","-2":"toissa päivänä","-1":"eilen"},relativeTime:{future:{one:"{0} päivän päästä",other:"{0} päivän päästä"},past:{one:"{0} päivä sitten",other:"{0} päivää sitten"}}},hour:{displayName:"tunti",relative:{0:"tämän tunnin aikana"},relativeTime:{future:{one:"{0} tunnin päästä",other:"{0} tunnin päästä"},past:{one:"{0} tunti sitten",other:"{0} tuntia sitten"}}},minute:{displayName:"minuutti",relative:{0:"tämän minuutin aikana"},relativeTime:{future:{one:"{0} minuutin päästä",other:"{0} minuutin päästä"},past:{one:"{0} minuutti sitten",other:"{0} minuuttia sitten"}}},second:{displayName:"sekunti",relative:{0:"nyt"},relativeTime:{future:{one:"{0} sekunnin päästä",other:"{0} sekunnin päästä"},past:{one:"{0} sekunti sitten",other:"{0} sekuntia sitten"}}}}}]});


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = __webpack_require__(46);

var _fi = __webpack_require__(1225);

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.Clinical.ActionHeader.close": "Kiinni",
  "Terra.Clinical.ActionHeader.back": "Takaisin",
  "Terra.Clinical.ActionHeader.previous": "Edellinen",
  "Terra.Clinical.ActionHeader.next": "Seuraava",
  "Terra.Clinical.ActionHeader.maximize": "Maksimoida",
  "Terra.Clinical.ActionHeader.minimize": "Minimoida",
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~",
  "Terra.Overlay.loading": "Lataamalla..."
};
var areTranslationsLoaded = true;
var locale = 'fi-FI';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;

/***/ })

});
//# sourceMappingURL=fi-FI-translations.js.map