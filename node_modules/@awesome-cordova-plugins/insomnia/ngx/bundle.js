'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Insomnia = /** @class */ (function (_super) {
    tslib.__extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return core.cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return core.cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia.decorators = [
        { type: core$1.Injectable }
    ];
    return Insomnia;
}(core.AwesomeCordovaNativePlugin));

exports.Insomnia = Insomnia;
