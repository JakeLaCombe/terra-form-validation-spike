webpackJsonp(["de-translations"],{

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.de=t())}(this,function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,t){var n=!String(e).split(".")[1];return t?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]});


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = __webpack_require__(46);

var _de = __webpack_require__(1224);

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menü ein-/ausblenden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menü",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Benutzerdaten",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto ändern",
  "Terra.applicationLayout.utilityDefaults.settings": "Einstellungen",
  "Terra.applicationLayout.utilityDefaults.appearance": "Erscheinungsbild",
  "Terra.applicationLayout.utilityDefaults.security": "Berechtigung",
  "Terra.applicationLayout.utilityDefaults.help": "Hilfe",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Erste Schritte",
  "Terra.applicationLayout.utilityDefaults.about": "Info über",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Nutzungsbestimmungen",
  "Terra.applicationLayout.utilityDefaults.logOut": "Abmelden",
  "Terra.application.tabs.more": "Mehr",
  "Terra.application.utility.close": "Schließen",
  "Terra.application.utility.back": "Zurück",
  "Terra.application.utility.button": "Schaltfläche „Dienstprogramm“",
  "Terra.application.utility.menu": "Menü „Dienstprogramm“",
  "Terra.Clinical.ActionHeader.close": "Schließen",
  "Terra.Clinical.ActionHeader.back": "Zurück",
  "Terra.Clinical.ActionHeader.previous": "Vorherige",
  "Terra.Clinical.ActionHeader.next": "Nächste",
  "Terra.Clinical.ActionHeader.maximize": "Maximieren",
  "Terra.Clinical.ActionHeader.minimize": "Minimieren",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.Overlay.loading": "Ladevorgang..."
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;

/***/ })

});
//# sourceMappingURL=de-translations.js.map