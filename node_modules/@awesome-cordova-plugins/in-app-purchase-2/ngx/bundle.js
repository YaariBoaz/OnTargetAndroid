'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
var InAppPurchase2 = /** @class */ (function (_super) {
    tslib.__extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return core.cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return core.cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return core.cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return core.cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return core.cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return core.cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return core.cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return core.cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return core.cordova(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return core.cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return core.cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return core.cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2.prototype.redeem = function () { return core.cordova(this, "redeem", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageBilling = function () { return core.cordova(this, "manageBilling", { "sync": true }, arguments); };
    InAppPurchase2.prototype.launchPriceChangeConfirmationFlow = function (productId, callback) { return core.cordova(this, "launchPriceChangeConfirmationFlow", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return core.cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { core.cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return core.cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { core.cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return core.cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { core.cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return core.cordovaPropertyGet(this, "INFO"); },
        set: function (value) { core.cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return core.cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { core.cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return core.cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { core.cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return core.cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { core.cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return core.cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { core.cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return core.cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { core.cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return core.cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { core.cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return core.cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { core.cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return core.cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { core.cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return core.cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { core.cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return core.cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { core.cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return core.cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { core.cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return core.cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { core.cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return core.cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { core.cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return core.cordovaPropertyGet(this, "VALID"); },
        set: function (value) { core.cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return core.cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { core.cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return core.cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { core.cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return core.cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { core.cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return core.cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { core.cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return core.cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { core.cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return core.cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { core.cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return core.cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { core.cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return core.cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { core.cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return core.cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { core.cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return core.cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { core.cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return core.cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { core.cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return core.cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { core.cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return core.cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { core.cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return core.cordovaPropertyGet(this, "products"); },
        set: function (value) { core.cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return core.cordovaPropertyGet(this, "validator"); },
        set: function (value) { core.cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return core.cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { core.cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return core.cordovaPropertyGet(this, "log"); },
        set: function (value) { core.cordovaPropertySet(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2.pluginName = "InAppPurchase2";
    InAppPurchase2.plugin = "cordova-plugin-purchase";
    InAppPurchase2.pluginRef = "store";
    InAppPurchase2.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    InAppPurchase2.decorators = [
        { type: core$1.Injectable }
    ];
    return InAppPurchase2;
}(core.AwesomeCordovaNativePlugin));

exports.IAPError = IAPError;
exports.InAppPurchase2 = InAppPurchase2;
