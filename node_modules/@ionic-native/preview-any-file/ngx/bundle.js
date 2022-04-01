'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PreviewAnyFile = /** @class */ (function (_super) {
    tslib.__extends(PreviewAnyFile, _super);
    function PreviewAnyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFile.prototype.preview = function (url) { return core.cordova(this, "preview", {}, arguments); };
    PreviewAnyFile.prototype.previewBase64 = function (base64, options) { return core.cordova(this, "previewBase64", {}, arguments); };
    PreviewAnyFile.prototype.previewPath = function (url, options) { return core.cordova(this, "previewPath", {}, arguments); };
    PreviewAnyFile.prototype.previewAsset = function (url, options) { return core.cordova(this, "previewAsset", {}, arguments); };
    PreviewAnyFile.pluginName = "PreviewAnyFile";
    PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFile.pluginRef = "PreviewAnyFile";
    PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFile.install = "";
    PreviewAnyFile.installVariables = [];
    PreviewAnyFile.platforms = ["Android", "iOS"];
    PreviewAnyFile.decorators = [
        { type: core$1.Injectable }
    ];
    return PreviewAnyFile;
}(core.IonicNativePlugin));

exports.PreviewAnyFile = PreviewAnyFile;
