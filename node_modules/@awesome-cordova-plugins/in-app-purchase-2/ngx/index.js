import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2 = /** @class */ (function (_super) {
    __extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2.prototype.redeem = function () { return cordova(this, "redeem", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageBilling = function () { return cordova(this, "manageBilling", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
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
        { type: Injectable }
    ];
    return InAppPurchase2;
}(AwesomeCordovaNativePlugin));
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7bUJBRDNDOzs7O0lBNmpCb0Msa0NBQTBCOzs7O0lBb0w1RCwrQ0FBc0I7SUFrQnRCLDRCQUFHLGFBQUMsU0FBaUI7SUFVckIsOEJBQUssYUFBQyxPQUFpQjtJQVF2QixpQ0FBUSxhQUFDLE9BQWdEO0lBVXpELDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFhNUUsNkJBQUksYUFBQyxLQUEwQixFQUFFLEtBQWMsRUFBRSxRQUEyQjtJQVU1RSw0QkFBRyxhQUFDLFFBQWtCO0lBNkJ0Qiw4QkFBSyxhQUFDLE9BQTRCLEVBQUUsY0FBb0I7SUFLeEQsOEJBQUssYUFBQyxRQUFrQjtJQTBDeEIsZ0NBQU87SUFNUCwrQkFBTTtJQUlOLDRDQUFtQjtJQUluQiwrQkFBTTtJQUlOLHNDQUFhOzBCQXJWYixpQ0FBSzs7Ozs7OzBCQUdMLGlDQUFLOzs7Ozs7MEJBR0wsbUNBQU87Ozs7OzswQkFHUCxnQ0FBSTs7Ozs7OzBCQUdKLGlDQUFLOzs7Ozs7MEJBTUwscUNBQVM7Ozs7OzswQkFPVCxrREFBc0I7Ozs7OzswQkFNdEIsbUNBQU87Ozs7OzswQkFPUCxnREFBb0I7Ozs7OzswQkFHcEIsNkNBQWlCOzs7Ozs7MEJBR2pCLDZDQUFpQjs7Ozs7OzBCQUdqQixxREFBeUI7Ozs7OzswQkFHekIsc0NBQVU7Ozs7OzswQkFHViwwQ0FBYzs7Ozs7OzBCQUdkLHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUix3Q0FBWTs7Ozs7OzBCQUdaLDZDQUFpQjs7Ozs7OzBCQUdqQiw4Q0FBa0I7Ozs7OzswQkFHbEIsaURBQXFCOzs7Ozs7MEJBR3JCLCtDQUFtQjs7Ozs7OzBCQUduQixtREFBdUI7Ozs7OzswQkFHdkIsdUNBQVc7Ozs7OzswQkFHWCxnREFBb0I7Ozs7OzswQkFHcEIsa0RBQXNCOzs7Ozs7MEJBR3RCLHNDQUFVOzs7Ozs7MEJBR1YsNkNBQWlCOzs7Ozs7MEJBR2pCLDJEQUErQjs7Ozs7OzBCQUcvQiw2Q0FBaUI7Ozs7OzswQkFHakIsbURBQXVCOzs7Ozs7MEJBR3ZCLDRDQUFnQjs7Ozs7OzBCQUdoQix1Q0FBVzs7Ozs7OzBCQUdYLCtDQUFtQjs7Ozs7OzBCQUduQix3Q0FBWTs7Ozs7OzBCQUdaLGlFQUFxQzs7Ozs7OzBCQUdyQyxzQ0FBVTs7Ozs7OzBCQUdWLG1DQUFPOzs7Ozs7MEJBR1AsaUNBQUs7Ozs7OzswQkFHTCxxQ0FBUzs7Ozs7OzBCQUdULHFDQUFTOzs7Ozs7MEJBR1Qsb0NBQVE7Ozs7OzswQkFHUixvQ0FBUTs7Ozs7OzBCQUdSLGlDQUFLOzs7Ozs7MEJBR0wsdUNBQVc7Ozs7OzswQkFHWCxzQ0FBVTs7Ozs7OzBCQUtWLDJDQUFlOzs7Ozs7MEJBR2YsNkNBQWlCOzs7Ozs7MEJBR2pCLDRDQUFnQjs7Ozs7OzBCQUdoQiw2Q0FBaUI7Ozs7OzswQkFHakIsMENBQWM7Ozs7OzswQkFHZCwwQ0FBYzs7Ozs7OzBCQUdkLG9DQUFROzs7Ozs7MEJBR1IscUNBQVM7Ozs7OzswQkFHVCwrQ0FBbUI7Ozs7OzswQkFRbkIsK0JBQUc7Ozs7Ozs7Ozs7Ozs7Z0JBMUxKLFVBQVU7O3lCQTVqQlg7RUE2akJvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0T3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIGFsaWFzPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlZmVzaFJlc3VsdCB7XG4gIGNhbmNlbGxlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gIGZhaWxlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gIGNvbXBsZXRlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gIGZpbmlzaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgSUFQUHJvZHVjdHMgPSBJQVBQcm9kdWN0W10gJiB7XG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBJRFxuICAgKi9cbiAgYnlJZDogeyBbaWQ6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGJ5IGFsaWFzXG4gICAqL1xuICBieUFsaWFzOiB7IFthbGlhczogc3RyaW5nXTogSUFQUHJvZHVjdCB9O1xuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwcm9kdWN0cyAoZm9yIHRlc3Rpbmcgb25seSkuXG4gICAqL1xuICByZXNldDogKCkgPT4ge307XG59O1xuXG5leHBvcnQgdHlwZSBJQVBRdWVyeUNhbGxiYWNrID0gKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB2b2lkKSB8ICgoZXJyb3I6IElBUEVycm9yKSA9PiB2b2lkKTtcblxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZztcblxuICBhbGlhcz86IHN0cmluZztcblxuICB0eXBlOiBzdHJpbmc7XG5cbiAgc3RhdGU6IHN0cmluZztcblxuICB0aXRsZTogc3RyaW5nO1xuXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgcHJpY2VNaWNyb3M6IG51bWJlcjtcblxuICBwcmljZTogc3RyaW5nO1xuXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG5cbiAgbG9hZGVkOiBib29sZWFuO1xuXG4gIHZhbGlkOiBib29sZWFuO1xuXG4gIGNhblB1cmNoYXNlOiBib29sZWFuO1xuXG4gIG93bmVkOiBib29sZWFuO1xuXG4gIGRvd25sb2FkaW5nPzogYm9vbGVhbjtcblxuICBkb3dubG9hZGVkPzogYm9vbGVhbjtcblxuICBsYXN0UmVuZXdhbERhdGU/OiBEYXRlO1xuXG4gIGV4cGlyeURhdGU/OiBEYXRlO1xuXG4gIGludHJvUHJpY2U/OiBzdHJpbmc7XG5cbiAgaW50cm9QcmljZU1pY3Jvcz86IG51bWJlcjtcblxuICBpbnRyb1ByaWNlTnVtYmVyT2ZQZXJpb2RzPzogbnVtYmVyO1xuXG4gIGludHJvUHJpY2VTdWJzY3JpcHRpb25QZXJpb2Q/OiBzdHJpbmc7XG5cbiAgaW50cm9QcmljZVBheW1lbnRNb2RlPzogc3RyaW5nO1xuXG4gIGluZWxpZ2libGVGb3JJbnRyb1ByaWNlPzogYm9vbGVhbjtcblxuICBiaWxsaW5nUGVyaW9kPzogbnVtYmVyO1xuXG4gIGJpbGxpbmdQZXJpb2RVbml0Pzogc3RyaW5nO1xuXG4gIHRyaWFsUGVyaW9kPzogbnVtYmVyO1xuXG4gIHRyaWFsUGVyaW9kVW5pdD86IHN0cmluZztcblxuICBhZGRpdGlvbmFsRGF0YT86IGFueTtcblxuICB0cmFuc2FjdGlvbj86IFBsYXlTdG9yZVJlY2VpcHQgfCBBcHBTdG9yZVJlY2VpcHQ7XG5cbiAgLyoqXG4gICAqIENhbGwgYHByb2R1Y3QuZmluaXNoKClgIHRvIGNvbmZpcm0gdG8gdGhlIHN0b3JlIHRoYXQgYW4gYXBwcm92ZWQgb3JkZXIgaGFzIGJlZW4gZGVsaXZlcmVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBwcm9kdWN0IHN0YXRlIGZyb20gYEFQUFJPVkVEYCB0byBgRklOSVNIRURgIChzZWUgcHJvZHVjdCBsaWZlLWN5Y2xlKS5cbiAgICpcbiAgICogQXMgbG9uZyBhcyB5b3Uga2VlcCB0aGUgcHJvZHVjdCBpbiBzdGF0ZSBgQVBQUk9WRURgOlxuICAgKlxuICAgKiAgLSB0aGUgbW9uZXkgbWF5IG5vdCBiZSBpbiB5b3VyIGFjY291bnQgKGkuZS4gdXNlciBpc24ndCBjaGFyZ2VkKVxuICAgKiAgLSB5b3Ugd2lsbCByZWNlaXZlIHRoZSBgYXBwcm92ZWRgIGV2ZW50IGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gc3RhcnRzLFxuICAgKiAgICB3aGVyZSB5b3Ugc2hvdWxkIHRyeSBhZ2FpbiB0byBmaW5pc2ggdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIGV4YW1wbGUgdXNlKipcbiAgICpcbiAgICogYGBganNcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAqICAgICAvLyBzeW5jaHJvbm91c1xuICAgKiAgICAgYXBwLnVubG9ja0ZlYXR1cmUoKTtcbiAgICogICAgIHByb2R1Y3QuZmluaXNoKCk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogYGBganNcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAqICAgICAvLyBhc3luY2hyb25vdXNcbiAgICogICAgIGFwcC5kb3dubG9hZEZlYXR1cmUoZnVuY3Rpb24oKSB7XG4gICAqICAgICAgICAgcHJvZHVjdC5maW5pc2goKTtcbiAgICogICAgIH0pO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBmaW5pc2goKTogdm9pZDtcblxuICAvKipcbiAgICogSW5pdGlhdGUgcHVyY2hhc2UgdmFsaWRhdGlvbiBhcyBkZWZpbmVkIGJ5IHRoZSBgc3RvcmUudmFsaWRhdG9yYCBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIHJldHVybiB2YWx1ZSoqXG4gICAqXG4gICAqIEEgUHJvbWlzZSB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcbiAgICpcbiAgICogIC0gYGRvbmUoZnVuY3Rpb24ocHJvZHVjdCl7fSlgXG4gICAqICAgIC0gY2FsbGVkIHdoZXRoZXIgdmVyaWZpY2F0aW9uIGZhaWxlZCBvciBzdWNjZWVkZWQuXG4gICAqICAtIGBleHBpcmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxuICAgKiAgICAtIGNhbGxlZCBpZiB0aGUgcHVyY2hhc2UgZXhwaXJlZC5cbiAgICogIC0gYHN1Y2Nlc3MoZnVuY3Rpb24ocHJvZHVjdCwgcHVyY2hhc2VEYXRhKXt9KWBcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGlzIHZhbGlkIGFuZCB2ZXJpZmllZC5cbiAgICogICAgLSBgcHVyY2hhc2VEYXRhYCBpcyB0aGUgZGV2aWNlIGRlcGVuZGVudCB0cmFuc2FjdGlvbiBkZXRhaWxzXG4gICAqICAgICAgcmV0dXJuZWQgYnkgdGhlIHZhbGlkYXRvciwgd2hpY2ggeW91IGNhbiBtb3N0IHByb2JhYmx5IGlnbm9yZS5cbiAgICogIC0gYGVycm9yKGZ1bmN0aW9uKGVycil7fSlgXG4gICAqICAgIC0gdmFsaWRhdGlvbiBmYWlsZWQsIGVpdGhlciBiZWNhdXNlIG9mIGV4cGlyeSBvciBjb21tdW5pY2F0aW9uXG4gICAqICAgICAgZmFpbHVyZS5cbiAgICogICAgLSBgZXJyYCBpcyBhIHN0b3JlLkVycm9yIG9iamVjdCwgd2l0aCBhIGNvZGUgZXhwZWN0ZWQgdG8gYmVcbiAgICogICAgICBgc3RvcmUuRVJSX1BBWU1FTlRfRVhQSVJFRGAgb3IgYHN0b3JlLkVSUl9WRVJJRklDQVRJT05fRkFJTEVEYC5cbiAgICovXG4gIHZlcmlmeSgpOiBhbnk7XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcblxuICBzdGF0ZUNoYW5nZWQoKTogdm9pZDtcblxuICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuXG4gIG9uY2UoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcblxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcblxuICB0cmlnZ2VyKGFjdGlvbjogc3RyaW5nLCBhcmdzOiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RFdmVudHMge1xuICAvKiogQ2FsbGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cbiAgbG9hZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LiAqL1xuICB1cGRhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gSUFQRXJyb3Igb2JqZWN0LiAqL1xuICBlcnJvcjogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGFwcHJvdmVkLiAqL1xuICBhcHByb3ZlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC4gKi9cbiAgb3duZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuICovXG4gIGNhbmNlbGxlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaXMgcmVmdW5kZWQgYnkgdGhlIHVzZXIuICovXG4gIHJlZnVuZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGhhcyBqdXN0IGJlZW4gcmVnaXN0ZXJlZC4gKi9cbiAgcmVnaXN0ZXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgZGV0YWlscyBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZC4gKi9cbiAgdmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGNhbm5vdCBiZSBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuICovXG4gIGludmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGhhcyBqdXN0IGJlZW4gcmVxdWVzdGVkLiAqL1xuICByZXF1ZXN0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBiZWVuIGluaXRpYXRlZC4gKi9cbiAgaW5pdGlhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgY29tcGxldGVkLiAqL1xuICBmaW5pc2hlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWwuICovXG4gIHZlcmlmaWVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWQuICovXG4gIHVudmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkLiAqL1xuICBleHBpcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWQuICovXG4gIGRvd25sb2FkaW5nOiAocHJvZHVjdDogSUFQUHJvZHVjdCwgcHJvZ3Jlc3M6IGFueSwgdGltZV9yZW1haW5pbmc6IGFueSkgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQuICovXG4gIGRvd25sb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbn1cblxuZXhwb3J0IHR5cGUgUGxheVN0b3JlUmVjZWlwdCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcHVyY2hhc2VTdGF0ZTogbnVtYmVyO1xuICBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XG4gIHJlY2VpcHQ6IHN0cmluZztcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHR5cGU6ICdhbmRyb2lkLXBsYXlzdG9yZSc7XG59O1xuXG5leHBvcnQgdHlwZSBBcHBTdG9yZVJlY2VpcHQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGFwcFN0b3JlUmVjZWlwdDogc3RyaW5nO1xuICBvcmlnaW5hbF90cmFuc2FjdGlvbl9pZDogc3RyaW5nO1xuICB0eXBlOiAnaW9zLWFwcHN0b3JlJztcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSUFQRXJyb3Ige1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgUHVyY2hhc2UgMlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbi1BcHAgUHVyY2hhc2Ugb24gaU9TLCBBbmRyb2lkLCBXaW5kb3dzLCBtYWNPUyBhbmQgWEJveC5cbiAqXG4gKiAjIyBGZWF0dXJlc1xuICpcbiAqIHwgIHwgaW9zIHwgYW5kcm9pZCB8IHdpbi04IHwgd2luLTEwL3V3cCB8IG1hYyB8XG4gKiB8LS18LS18LS18LS18LS18LS18XG4gKiB8IGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgbm9uIGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgc3Vic2NyaXB0aW9ucyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XG4gKiB8IHJlc3RvcmUgcHVyY2hhc2VzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgcmVjZWlwdCB2YWxpZGF0aW9ucyB8IOKchSB8IOKchSB8ICB8IOKchSB8IOKchSB8XG4gKiB8IGRvd25sb2FkYWJsZSBjb250ZW50IHwg4pyFIHwgICB8ICAgfCAgIHwg4pyFIHxcbiAqIHwgaW50cm9kdWN0b3J5IHByaWNlcyB8IOKchSB8IOKchSB8ICAgfCDinIUgfCDinIUgfFxuICpcbiAqIFN1cHBvcnRzOlxuICpcbiAqICAtICoqaU9TKiogdmVyc2lvbiA3LjAgb3IgaGlnaGVyLlxuICogIC0gKipBbmRyb2lkKiogdmVyc2lvbiAyLjIgKEFQSSBsZXZlbCA4KSBvciBoaWdoZXJcbiAqICAgIC0gd2l0aCBHb29nbGUgUGxheSBjbGllbnQgdmVyc2lvbiAzLjkuMTYgb3IgaGlnaGVyXG4gKiAgLSAqKldpbmRvd3MqKiBTdG9yZS9QaG9uZSA4LjEgb3IgaGlnaGVyXG4gKiAgLSAqKldpbmRvd3MgMTAgTW9iaWxlKipcbiAqICAtICoqbWFjT1MqKiB2ZXJzaW9uIDEwXG4gKiAgLSAqKlhib3ggT25lKipcbiAqICAgIC0gKGFuZCBhbnkgcGxhdGZvcm0gc3VwcG9ydGluZyBNaWNyb3NvZnQncyBVV1ApXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwUHVyY2hhc2UyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBzdG9yZTogSW5BcHBQdXJjaGFzZTIpIHtcbiAqICAgcGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAqICAgIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xuICogICAgICBpZDogXCJteV9wcm9kdWN0X2lkXCIsXG4gKiAgICAgIHR5cGU6IHRoaXMuc3RvcmUuTk9OX1JFTkVXSU5HX1NVQlNDUklQVElPTixcbiAqICAgIH0pO1xuICogICAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKVxuICogICAgICAuYXBwcm92ZWQocCA9PiBwLnZlcmlmeSgpKVxuICogICAgICAudmVyaWZpZWQocCA9PiBwLmZpbmlzaCgpKTtcbiAqICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICogICB9KTtcbiAqIH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAjIyBGdWxsIGV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgLy8gQWZ0ZXIgcGxhdGZvcm0gcmVhZHlcbiAqICB0aGlzLnN0b3JlLnZlcmJvc2l0eSA9IHRoaXMuc3RvcmUuREVCVUc7XG4gKiAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XG4gKiAgICBpZDogXCJteV9wcm9kdWN0X2lkXCIsXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLlBBSURfU1VCU0NSSVBUSU9OLFxuICogIH0pO1xuICpcbiAqICAvLyBSZWdpc3RlciBldmVudCBoYW5kbGVycyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnJlZ2lzdGVyZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZDogJyArIEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gVXBkYXRlZFxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikudXBkYXRlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkJyArIEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gVXNlciBjbG9zZWQgdGhlIG5hdGl2ZSBwdXJjaGFzZSBkaWFsb2dcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLmNhbmNlbGxlZCggKHByb2R1Y3QpID0+IHtcbiAqICAgICAgY29uc29sZS5lcnJvcignUHVyY2hhc2Ugd2FzIENhbmNlbGxlZCcpO1xuICogIH0pO1xuICpcbiAqICAvLyBUcmFjayBhbGwgc3RvcmUgZXJyb3JzXG4gKiAgdGhpcy5zdG9yZS5lcnJvciggKGVycikgPT4ge1xuICogICAgY29uc29sZS5lcnJvcignU3RvcmUgRXJyb3IgJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICogIH0pO1xuICpcbiAqICAvLyBSdW4gc29tZSBjb2RlIG9ubHkgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHkgdG8gYmUgdXNlZFxuICogIHRoaXMuc3RvcmUucmVhZHkoKCkgPT4gIHtcbiAqICAgIGNvbnNvbGUubG9nKCdTdG9yZSBpcyByZWFkeScpO1xuICogICAgY29uc29sZS5sb2coJ1Byb2R1Y3RzOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZS5wcm9kdWN0cykpO1xuICogICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZS5nZXQoXCJteV9wcm9kdWN0X2lkXCIpKSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFJlZnJlc2ggdGhlIHN0YXR1cyBvZiBpbi1hcHAgcHJvZHVjdHNcbiAqICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAqXG4gKiAgLi4uXG4gKlxuICogIC8vIFRvIG1ha2UgYSBwdXJjaGFzZVxuICogIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xuICpcbiAqIGBgYFxuICpcbiAqICMjIFBoaWxvc29waHlcbiAqXG4gKiBUaGUgQVBJIGlzIG1vc3RseSBldmVudHMgYmFzZWQuIEFzIGEgdXNlciBvZiB0aGlzIHBsdWdpbixcbiAqIHlvdSB3aWxsIGhhdmUgdG8gcmVnaXN0ZXIgbGlzdGVuZXJzIHRvIGNoYW5nZXMgaGFwcGVuaW5nIHRvIHRoZSBwcm9kdWN0c1xuICogeW91IHJlZ2lzdGVyLlxuICpcbiAqIFRoZSBjb3JlIG9mIHRoZSBsaXN0ZW5pbmcgbWVjaGFuaXNtIGlzIHRoZSBgd2hlbigpYCBtZXRob2QuIEl0IGFsbG93cyB5b3UgdG9cbiAqIGJlIG5vdGlmaWVkIG9mIGNoYW5nZXMgdG8gb25lIG9yIGEgc2V0IG9mIHByb2R1Y3RzIHVzaW5nIGEgcXVlcnkgbWVjaGFuaXNtOlxuICogYGBgdHlwZXNjcmlwdFxuICogIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikudXBkYXRlZChyZWZyZXNoU2NyZWVuKTsgLy8gbWF0Y2ggYW55IHByb2R1Y3RcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJmdWxsX3ZlcnNpb25cIikub3duZWQodW5sb2NrQXBwKTsgLy8gbWF0Y2ggYSBzcGVjaWZpYyBwcm9kdWN0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwic3Vic2NyaXB0aW9uXCIpLmFwcHJvdmVkKHNlcnZlckNoZWNrKTsgLy8gbWF0Y2ggYWxsIHN1YnNjcmlwdGlvbnNcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJkb3dubG9hZGFibGUgY29udGVudFwiKS5kb3dubG9hZGVkKHNob3dDb250ZW50KTtcbiAqIGBgYFxuICpcbiAqIFRoZSBgdXBkYXRlZGAgZXZlbnQgaXMgZmlyZWQgd2hlbmV2ZXIgb25lIG9mIHRoZSBmaWVsZHMgb2YgYSBwcm9kdWN0IGlzXG4gKiBjaGFuZ2VkIChpdHMgYG93bmVkYCBzdGF0dXMgZm9yIGluc3RhbmNlKS5cbiAqXG4gKiBUaGlzIGV2ZW50IHByb3ZpZGVzIGEgZ2VuZXJpYyB3YXkgdG8gdHJhY2sgdGhlIHN0YXR1c2VzIG9mIHlvdXIgcHVyY2hhc2VzLFxuICogdG8gdW5sb2NrIGZlYXR1cmVzIHdoZW4gbmVlZGVkIGFuZCB0byByZWZyZXNoIHlvdXIgdmlld3MgYWNjb3JkaW5nbHkuXG4gKlxuICogIyMgUmVnaXN0ZXJpbmcgcHJvZHVjdHNcbiAqXG4gKiBUaGUgc3RvcmUgbmVlZHMgdG8ga25vdyB0aGUgdHlwZSBhbmQgaWRlbnRpZmllcnMgb2YgeW91ciBwcm9kdWN0cyBiZWZvcmUgeW91XG4gKiBjYW4gdXNlIHRoZW0gaW4geW91ciBjb2RlLlxuICpcbiAqIFVzZSBgc3RvcmUucmVnaXN0ZXIoKWAgdG8gZGVmaW5lIHRoZW0gYmVmb3JlIHlvdXIgZmlyc3QgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYC5cbiAqXG4gKiBPbmNlIHJlZ2lzdGVyZWQsIHlvdSBjYW4gdXNlIGBzdG9yZS5nZXQoKWAgdG8gcmV0cmlldmUgYW4gYElBUFByb2R1Y3RgIG9iamVjdC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XG4gKiAgICBpZDogXCJteV9jb25zdW1hYmxlMVwiLFxuICogICAgdHlwZTogdGhpcy5zdG9yZS5DT05TVU1BQkxFXG4gKiAgfSk7XG4gKiAgLi4uXG4gKiAgY29uc3QgcCA9IHRoaXMuc3RvcmUuZ2V0KFwibXlfY29uc3VtYWJsZTFcIik7XG4gKiBgYGBcbiAqXG4gKiBUaGUgcHJvZHVjdCBgaWRgIGFuZCBgdHlwZWAgaGF2ZSB0byBtYXRjaCBwcm9kdWN0cyBkZWZpbmVkIGluIHlvdXJcbiAqIEFwcGxlLCBHb29nbGUgb3IgTWljcm9zb2Z0IGRldmVsb3BlciBjb25zb2xlcy5cbiAqXG4gKiBMZWFybiBtb3JlIGFib3V0IGl0IFtmcm9tIHRoZSB3aWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKS5cbiAqXG4gKiAjIyBEaXNwbGF5aW5nIHByb2R1Y3RzXG4gKlxuICogUmlnaHQgYWZ0ZXIgeW91IHJlZ2lzdGVyZWQgeW91ciBwcm9kdWN0cywgbm90aGluZyBtdWNoIGlzIGtub3duIGFib3V0IHRoZW1cbiAqIGV4Y2VwdCB0aGVpciBgaWRgLCBgdHlwZWAgYW5kIGFuIG9wdGlvbmFsIGBhbGlhc2AuXG4gKlxuICogV2hlbiB5b3UgcGVyZm9ybSB0aGUgaW5pdGlhbCBjYWxsIHRvIGBzdG9yZS5yZWZyZXNoKClgLCB0aGUgcGxhdGZvcm1zJyBzZXJ2ZXIgd2lsbFxuICogYmUgY29udGFjdGVkIHRvIGxvYWQgaW5mb3JtYXRpb25zIGFib3V0IHRoZSByZWdpc3RlcmVkIHByb2R1Y3RzOiBodW1hblxuICogcmVhZGFibGUgYHRpdGxlYCBhbmQgYGRlc2NyaXB0aW9uYCwgYHByaWNlYCwgZXRjLlxuICpcbiAqIFRoaXMgaXNuJ3QgYW4gb3B0aW9uYWwgc3RlcCwgc3RvcmUgb3duZXJzIHJlcXVpcmUgeW91XG4gKiB0byBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IGEgcHJvZHVjdCBleGFjdGx5IGFzIHJldHJpZXZlZCBmcm9tIHRoZWlyIHNlcnZlcjogbm9cbiAqIGhhcmQtY29kaW5nIG9mIHByaWNlIGFuZCB0aXRsZSBhbGxvd2VkISBUaGlzIGlzIGFsc28gY29udmVuaWVudCBmb3IgeW91XG4gKiBhcyB5b3UgY2FuIGNoYW5nZSB0aGUgcHJpY2Ugb2YgeW91ciBpdGVtcyBrbm93aW5nIHRoYXQgaXQnbGwgYmUgcmVmbGVjdGVkIGluc3RhbnRseVxuICogb24geW91ciBjbGllbnRzJyBkZXZpY2VzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5mb3JtYXRpb24gbWF5IG5vdCBiZSBhdmFpbGFibGUgd2hlbiB0aGUgZmlyc3QgdmlldyB0aGF0IG5lZWRzXG4gKiB0aGVtIGFwcGVhcnMgb24gc2NyZWVuLiBGb3IgeW91LCB0aGUgYmVzdCBvcHRpb24gaXMgdG8gaGF2ZSB5b3VyIHZpZXcgbW9uaXRvclxuICogY2hhbmdlcyBtYWRlIHRvIHRoZSBwcm9kdWN0LlxuICpcbiAqICMjIFB1cmNoYXNpbmdcbiAqXG4gKiAjIyMjIGluaXRpYXRlIGEgcHVyY2hhc2VcbiAqXG4gKiBQdXJjaGFzZXMgYXJlIGluaXRpYXRlZCB1c2luZyB0aGUgYHN0b3JlLm9yZGVyKFwic29tZV9wcm9kdWN0X2lkXCIpYCBtZXRob2QuXG4gKlxuICogVGhlIHN0b3JlIHdpbGwgbWFuYWdlIHRoZSBpbnRlcm5hbCBwdXJjaGFzZSBmbG93LiBJdCdsbCBlbmQ6XG4gKlxuICogIC0gd2l0aCBhbiBgYXBwcm92ZWRgIGV2ZW50LiBUaGUgcHJvZHVjdCBlbnRlcnMgdGhlIGBBUFBST1ZFRGAgc3RhdGUuXG4gKiAgLSB3aXRoIGEgYGNhbmNlbGxlZGAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cbiAqICAtIHdpdGggYW4gYGVycm9yYCBldmVudC4gVGhlIHByb2R1Y3QgZ2V0cyBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxuICpcbiAqIFNlZSB0aGUgcHJvZHVjdCBsaWZlLWN5Y2xlIHNlY3Rpb24gZm9yIGRldGFpbHMgYWJvdXQgcHJvZHVjdCBzdGF0ZXMuXG4gKlxuICogIyMjIyBmaW5pc2ggYSBwdXJjaGFzZVxuICpcbiAqIE9uY2UgdGhlIHRyYW5zYWN0aW9uIGlzIGFwcHJvdmVkLCB0aGUgcHJvZHVjdCBzdGlsbCBpc24ndCBvd25lZDogdGhlIHN0b3JlIG5lZWRzXG4gKiBjb25maXJtYXRpb24gdGhhdCB0aGUgcHVyY2hhc2Ugd2FzIGRlbGl2ZXJlZCBiZWZvcmUgY2xvc2luZyB0aGUgdHJhbnNhY3Rpb24uXG4gKlxuICogVG8gY29uZmlybSBkZWxpdmVyeSwgeW91J2xsIHVzZSB0aGUgYHByb2R1Y3QuZmluaXNoKClgIG1ldGhvZC5cbiAqXG4gKiAjIyMjIGV4YW1wbGUgdXNhZ2VcbiAqXG4gKiBEdXJpbmcgaW5pdGlhbGl6YXRpb246XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLndoZW4oXCJleHRyYV9jaGFwdGVyXCIpLmFwcHJvdmVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgIC8vIGRvd25sb2FkIHRoZSBmZWF0dXJlXG4gKiAgIGFwcC5kb3dubG9hZEV4dHJhQ2hhcHRlcigpXG4gKiAgIC50aGVuKCgpID0+IHByb2R1Y3QuZmluaXNoKCkpO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBwdXJjaGFzZSBidXR0b24gaXMgY2xpY2tlZDpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRoaXMuc3RvcmUub3JkZXIoXCJleHRyYV9jaGFwdGVyXCIpO1xuICogYGBgXG4gKlxuICogIyMjIyB1bi1maW5pc2hlZCBwdXJjaGFzZXNcbiAqXG4gKiBJZiB5b3VyIGFwcCB3YXNuJ3QgYWJsZSB0byBkZWxpdmVyIHRoZSBjb250ZW50LCBgcHJvZHVjdC5maW5pc2goKWAgd29uJ3QgYmUgY2FsbGVkLlxuICpcbiAqIERvbid0IHdvcnJ5OiB0aGUgYGFwcHJvdmVkYCBldmVudCB3aWxsIGJlIHJlLXRyaWdnZXJlZCB0aGUgbmV4dCB0aW1lIHlvdVxuICogY2FsbCBgc3RvcmUucmVmcmVzaCgpYCwgd2hpY2ggY2FuIHZlcnkgd2VsbCBiZSB0aGUgbmV4dCB0aW1lXG4gKiB0aGUgYXBwbGljYXRpb24gc3RhcnRzLiBQZW5kaW5nIHRyYW5zYWN0aW9ucyBhcmUgcGVyc2lzdGFudC5cbiAqXG4gKiAjIyMjIHNpbXBsZSBjYXNlXG4gKlxuICogSW4gdGhlIG1vc3Qgc2ltcGxlIGNhc2UsIHdoZXJlOlxuICpcbiAqICAtIGRlbGl2ZXJ5IG9mIHB1cmNoYXNlcyBpcyBvbmx5IGxvY2FsIDtcbiAqICAtIHlvdSBkb24ndCB3YW50IChvciBuZWVkKSB0byBpbXBsZW1lbnQgcmVjZWlwdCB2YWxpZGF0aW9uIDtcbiAqXG4gKiBZb3UgbWF5IGp1c3Qgd2FudCB0byBmaW5pc2ggYWxsIHB1cmNoYXNlcyBhdXRvbWF0aWNhbGx5LiBZb3UgY2FuIGRvIGl0IHRoaXMgd2F5OlxuICogYGBganNcbiAqIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAuZmluaXNoKCkpO1xuICogYGBgXG4gKlxuICogTk9URTogdGhlIFwicHJvZHVjdFwiIHF1ZXJ5IHdpbGwgbWF0Y2ggYW55IHB1cmNoYXNlcyAoc2VlIFwicXVlcmllc1wiIHRvIGxlYXJuIG1vcmUgZGV0YWlscyBhYm91dCBxdWVyaWVzKS5cbiAqXG4gKiAjIyBSZWNlaXB0IHZhbGlkYXRpb25cbiAqXG4gKiBUbyBnZXQgdGhlIG1vc3QgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCBwdXJjaGFzZXMgKGluIGNhc2UgYSBwdXJjaGFzZSBoYXZlIGJlZW4gY2FuY2VsZWQsIG9yIGEgc3Vic2NyaXB0aW9uIHJlbmV3ZWQpLFxuICogeW91IHNob3VsZCBpbXBsZW1lbnQgc2VydmVyIHNpZGUgcmVjZWlwdCB2YWxpZGF0aW9uLlxuICpcbiAqIFRoaXMgYWxzbyBwcm90ZWN0cyB5b3UgYWdhaW5zdCBmYWtlIFwicHVyY2hhc2VzXCIsIG1hZGUgYnkgc29tZSB1c2VycyB1c2luZ1xuICogXCJmcmVlIGluLWFwcCBwdXJjaGFzZVwiIGFwcHMgb24gdGhlaXIgZGV2aWNlcy5cbiAqXG4gKiBXaGVuIGEgcHVyY2hhc2UgaGFzIGJlZW4gYXBwcm92ZWQgYnkgdGhlIHN0b3JlLCBpdCdzIGVucmljaGVkIHdpdGhcbiAqIHRyYW5zYWN0aW9uIGluZm9ybWF0aW9uIChzZWUgYHByb2R1Y3QudHJhbnNhY3Rpb25gIGF0dHJpYnV0ZSkuXG4gKlxuICogVG8gdmVyaWZ5IGEgcHVyY2hhc2UgeW91J2xsIGhhdmUgdG8gZG8gdGhyZWUgdGhpbmdzOlxuICpcbiAqICAtIGNvbmZpZ3VyZSB0aGUgdmFsaWRhdG9yLlxuICogIC0gY2FsbCBgcHJvZHVjdC52ZXJpZnkoKWAgZnJvbSB0aGUgYGFwcHJvdmVkYCBldmVudCwgYmVmb3JlIGZpbmlzaGluZyB0aGUgdHJhbnNhY3Rpb24uXG4gKiAgLSBmaW5pc2ggdGhlIHRyYW5zYWN0aW9uIHdoZW4gdHJhbnNhY3Rpb24gaXMgYHZlcmlmaWVkYC5cbiAqXG4gKiBTaGFtZWxlc3MgUGx1ZyoqOiB0aGlzIGlzIGEgZmVhdHVyZSBtYW55IHVzZXJzIHN0cnVnZ2xlIHdpdGgsIHNvIGFzIHRoZSBhdXRob3Igb2YgdGhpcyBwbHVnaW4sIHdlIGNhbiBwcm92aWRlIGl0IHRvIHlvdSBhcy1hLXNlcnZpY2U6IGh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cbiAqICh3aGljaCBpcyBmcmVlIHVudGlsIHlvdSBzdGFydCBtYWtpbmcgc2VyaW91cyBtb25leSlcbiAqXG4gKiAjIyMjIGV4YW1wbGUgdXNpbmcgYSB2YWxpZGF0aW9uIFVSTFxuICpcbiAqIGBgYGpzXG4gKiB0aGlzLnN0b3JlLnZhbGlkYXRvciA9IFwiaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1wiO1xuICpcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15IHN0dWZmXCIpXG4gKiAgIC5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC52ZXJpZnkoKSlcbiAqICAgLnZlcmlmaWVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcbiAqIGBgYFxuICpcbiAqICMjIFN1YnNjcmlwdGlvbnNcbiAqXG4gKiBGb3Igc3Vic2NyaXB0aW9uLCB5b3UgTVVTVCBpbXBsZW1lbnQgcmVtb3RlIHJlY2VpcHQgdmFsaWRhdGlvbi5cbiAqXG4gKiBXaGVuIHRoZSByZWNlaXB0IHZhbGlkYXRvciByZXR1cm5zIGEgYHN0b3JlLlBVUkNIQVNFX0VYUElSRURgIGVycm9yIGNvZGUsIHRoZSBzdWJzY3JpcHRpb24gd2lsbFxuICogYXV0b21hdGljYWxseSBsb29zZSBpdHMgYG93bmVkYCBzdGF0dXMuXG4gKlxuICogVHlwaWNhbGx5LCB5b3UnbGwgZW5hYmxlIGFuZCBkaXNhYmxlIGFjY2VzcyB0byB5b3VyIGNvbnRlbnQgdGhpcyB3YXkuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteV9zdWJjcmlwdGlvblwiKS51cGRhdGVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgIGlmIChwcm9kdWN0Lm93bmVkKVxuICogICAgIGFwcC5zdWJzY3JpYmVyTW9kZSgpO1xuICogICBlbHNlXG4gKiAgICAgYXBwLmd1ZXN0TW9kZSgpO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyBQcm9kdWN0IGxpZmUtY3ljbGVcbiAqXG4gKiBBIHByb2R1Y3Qgd2lsbCBjaGFuZ2Ugc3RhdGUgZHVyaW5nIHRoZSBhcHBsaWNhdGlvbiBleGVjdXRpb24uXG4gKlxuICogRmluZCBiZWxvdyBhIGRpYWdyYW0gb2YgdGhlIGRpZmZlcmVudCBzdGF0ZXMgYSBwcm9kdWN0IGNhbiBwYXNzIGJ5LlxuICpcbiAqIGBgYFxuICogUkVHSVNURVJFRCArLS0+IElOVkFMSURcbiAqICAgICAgICAgICAgfFxuICogICAgICAgICAgICArLS0+IFZBTElEICstLT4gUkVRVUVTVEVEICstLT4gSU5JVElBVEVEICstK1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgIF4gICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgKy0tPiBET1dOTE9BRElORyArLS0+IERPV05MT0FERUQgK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgKy0tPiBBUFBST1ZFRCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+IEZJTklTSEVEICstLT4gT1dORURcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIGBgYFxuICpcbiAqICMjIyMgTm90ZXNcbiAqXG4gKiAgLSBXaGVuIGZpbmlzaGVkLCBhIGNvbnN1bWFibGUgcHJvZHVjdCB3aWxsIGdldCBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLCB3aGlsZSBvdGhlciB3aWxsIGVudGVyIHRoZSBgT1dORURgIHN0YXRlLlxuICogIC0gQW55IGVycm9yIGluIHRoZSBwdXJjaGFzZSBwcm9jZXNzIHdpbGwgYnJpbmcgYSBwcm9kdWN0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXG4gKiAgLSBEdXJpbmcgYXBwbGljYXRpb24gc3RhcnR1cCwgcHJvZHVjdHMgbWF5IGdvIGluc3RhbnRseSBmcm9tIGBSRUdJU1RFUkVEYCB0byBgQVBQUk9WRURgIG9yIGBPV05FRGAsIGZvciBleGFtcGxlIGlmIHRoZXkgYXJlIHB1cmNoYXNlZCBub24tY29uc3VtYWJsZXMgb3Igbm9uLWV4cGlyZWQgc3Vic2NyaXB0aW9ucy5cbiAqICAtIE5vbi1SZW5ld2luZyBTdWJzY3JpcHRpb25zIGFyZSBpT1MgcHJvZHVjdHMgb25seS4gUGxlYXNlIHNlZSB0aGUgW2lPUyBOb24gUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvaW9zLm1kI25vbi1yZW5ld2luZykgZm9yIGEgZGV0YWlsZWQgZXhwbGFuYXRpb24uXG4gKlxuICogIyMgZXZlbnRzXG4gKlxuICogIC0gYGxvYWRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS5cbiAqICAtIGB1cGRhdGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LlxuICogIC0gYGVycm9yKGVycilgXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGZhaWxlZC5cbiAqICAgIC0gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBlcnJvciBvYmplY3RcbiAqICAtIGBhcHByb3ZlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGFwcHJvdmVkLlxuICogIC0gYG93bmVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhIG5vbi1jb25zdW1hYmxlIHByb2R1Y3Qgb3Igc3Vic2NyaXB0aW9uIGlzIG93bmVkLlxuICogIC0gYGNhbmNlbGxlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci5cbiAqICAtIGByZWZ1bmRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaXMgcmVmdW5kZWQgYnkgdGhlIHVzZXIuXG4gKiAgLSBBY3R1YWxseSwgYWxsIG90aGVyIHByb2R1Y3Qgc3RhdGVzIGhhdmUgdGhlaXIgcHJvbWlzZVxuICogICAgLSBgcmVnaXN0ZXJlZGAsIGB2YWxpZGAsIGBpbnZhbGlkYCwgYHJlcXVlc3RlZGAsXG4gKiAgICAgIGBpbml0aWF0ZWRgIGFuZCBgZmluaXNoZWRgXG4gKiAgLSBgdmVyaWZpZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHJlY2VpcHQgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXG4gKiAgLSBgdW52ZXJpZmllZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkXG4gKiAgLSBgZXhwaXJlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWRcbiAqICAtIGBkb3dubG9hZGluZyhJQVBQcm9kdWN0LCBwcm9ncmVzcywgdGltZV9yZW1haW5pbmcpYFxuICogICAgLSBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWRcbiAqICAtIGBkb3dubG9hZGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXG4gKlxuICogIyMgTGVhcm4gTW9yZVxuICpcbiAqICAtIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlKVxuICogIC0gW0dpdEJvb2tdKGh0dHBzOi8vcHVyY2hhc2UuY29yZG92YS5mb3ZlYS5jYy8pXG4gKiAgLSBbV2lraV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2Uvd2lraSlcbiAqICAtIFtBUEkgcmVmZXJlbmNlXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvYXBpLm1kKVxuICpcbiAqICMjIFRlY2huaWNhbCBTdXBwb3J0IG9yIFF1ZXN0aW9uc1xuICpcbiAqIElmIHlvdSBoYXZlIHF1ZXN0aW9ucyBvciBuZWVkIGhlbHAgaW50ZWdyYXRpbmcgSW4tQXBwIFB1cmNoYXNlLCBbT3BlbiBhbiBJc3N1ZSBvbiBHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2lzc3Vlcykgb3IgZW1haWwgdXMgYXQgX3N1cHBvcnRAZm92ZWEuY2NfLlxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBJQVBQcm9kdWN0XG4gKiBJQVBQcm9kdWN0T3B0aW9uc1xuICogSUFQUHJvZHVjdEV2ZW50c1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5BcHBQdXJjaGFzZTInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXG4gIHBsdWdpblJlZjogJ3N0b3JlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZSAtLXZhcmlhYmxlIEJJTExJTkdfS0VZPVwiPEFORFJPSURfQklMTElOR19LRVk+XCInLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcFB1cmNoYXNlMiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFFVSUVUOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUk9SOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFdBUk5JTkc6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5GTzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBERUJVRzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZWJ1ZyBsZXZlbC4gVXNlIFFVSUVULCBFUlJPUiwgV0FSTklORywgSU5GTyBvciBERUJVRyBjb25zdGFudHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJib3NpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gY2xlYXIgdGhlIHRyYW5zYWN0aW9uIHF1ZXVlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24uXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQjcmFuZG9tLXRpcHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBhdXRvRmluaXNoVHJhbnNhY3Rpb25zOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBpbnZva2UgdGhlIHBsYXRmb3JtIHB1cmNoYXNlIHNhbmRib3guIChXaW5kb3dzIG9ubHkpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc2FuZGJveDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBkb3dubG9hZGluZyBvZiBob3N0ZWQgY29udGVudC4gKEFwcGxlIG9ubHkpLlxuICAgKiBVc2VmdWwgaW4gZGV2ZWxvcG1lbnQgb3Igd2hlbiBtaWdyYXRpbmcgeW91ciBhcHAgYXdheSBmcm9tIEFwcGxlIEhvc3RlZCBDb250ZW50LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGRpc2FibGVIb3N0ZWRDb250ZW50OiBib29sZWFuO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGUkVFX1NVQlNDUklQVElPTjogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQQUlEX1NVQlNDUklQVElPTjogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBOT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENPTlNVTUFCTEU6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTk9OX0NPTlNVTUFCTEU6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1NFVFVQOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9MT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QVVJDSEFTRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfTE9BRF9SRUNFSVBUUzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfQ0xJRU5UX0lOVkFMSUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfQ0FOQ0VMTEVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX0lOVkFMSUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfTk9UX0FMTE9XRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1VOS05PV046IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1JFRlJFU0hfUkVDRUlQVFM6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0lOVkFMSURfUFJPRFVDVF9JRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfRklOSVNIOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9DT01NVU5JQ0FUSU9OOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9TVUJTQ1JJUFRJT05TX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX01JU1NJTkdfVE9LRU46IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1ZFUklGSUNBVElPTl9GQUlMRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0JBRF9SRVNQT05TRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUkVGUkVTSDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9FWFBJUkVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9ET1dOTE9BRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfU1VCU0NSSVBUSU9OX1VQREFURV9OT1RfQVZBSUxBQkxFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFJFR0lTVEVSRUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5WQUxJRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBWQUxJRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBSRVFVRVNURUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5JVElBVEVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFQUFJPVkVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZJTklTSEVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE9XTkVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIERPV05MT0FESU5HOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIERPV05MT0FERUQ6IHN0cmluZztcblxuICAvKiB2YWxpZGF0aW9uIGVycm9yIGNvZGVzICovXG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVkFMSURfUEFZTE9BRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBDT05ORUNUSU9OX0ZBSUxFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQVVJDSEFTRV9FWFBJUkVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBVUkNIQVNFX0NPTlNVTUVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVEVSTkFMX0VSUk9SOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5FRURfTU9SRV9EQVRBOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHByb2R1Y3RzOiBJQVBQcm9kdWN0cztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdmFsaWRhdG9yOiBzdHJpbmcgfCAoKHVybDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB2b2lkKTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYXBwbGljYXRpb25Vc2VybmFtZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEFwcGxpY2F0aW9uVXNlcm5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbG9nOiB7XG4gICAgZXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgd2FybjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgICBpbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGRlYnVnOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBpZCBvciBhbGlhc1xuICAgKlxuICAgKiBAcGFyYW0gaWRPckFsaWFzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0KGlkT3JBbGlhczogc3RyaW5nKTogSUFQUHJvZHVjdCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGVycm9yIGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIG9uRXJyb3Ige0Z1bmN0aW9ufSBmdW5jdGlvbiB0byBjYWxsIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZXJyb3Iob25FcnJvcjogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZWdpc3RlciBhIHByb2R1Y3RcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3Qge0lBUFByb2R1Y3RPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyKHByb2R1Y3Q6IElBUFByb2R1Y3RPcHRpb25zIHwgSUFQUHJvZHVjdE9wdGlvbnNbXSk6IHZvaWQge31cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgd2hlbihxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGljYWwgdG8gYHdoZW5gLCBidXQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS4gQWZ0ZXIgYmVpbmcgY2FsbGVkLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxuICAgKiBAcGFyYW0gW2NhbGxiYWNrXSB7SUFQUXVlcnlDYWxsYmFja31cbiAgICogQHJldHVybnMge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25jZShxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGEgY2FsbGJhY2suIFdvcmtzIGZvciBjYWxsYmFja3MgcmVnaXN0ZXJlZCB3aXRoIHJlYWR5LCB3aGVuLCBvbmNlIGFuZCBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxuICAgKlxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XG4gICAqXG4gICAqICAtIHRoZSBgSUFQUHJvZHVjdGAgb2JqZWN0XG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxuICAgKlxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cbiAgICogIC0gYGRldmVsb3BlclBheWxvYWRgOiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZXZlbG9wZXIgcGF5bG9hZCBhcyBkZXNjcmliZWQgaW4gW2JpbGxpbmcgYmVzdCBwcmFjdGljZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19iZXN0X3ByYWN0aWNlcy5odG1sKVxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIFNlZSB0aGUgXCJQdXJjaGFzaW5nIHNlY3Rpb25cIiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBwdXJjaGFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiByZXR1cm4gdmFsdWUqKlxuICAgKlxuICAgKiBgc3RvcmUub3JkZXIoKWAgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gICAqXG4gICAqICAtIGB0aGVuYCAtIGNhbGxlZCB3aGVuIHRoZSBvcmRlciB3YXMgc3VjY2Vzc2Z1bGx5IGluaXRpYXRlZC5cbiAgICogIC0gYGVycm9yYCAtIGNhbGxlZCBpZiB0aGUgb3JkZXIgY291bGRuJ3QgYmUgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdFxuICAgKiBAcGFyYW0gYWRkaXRpb25hbERhdGFcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcmRlcihwcm9kdWN0OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBhZGRpdGlvbmFsRGF0YT86IGFueSk6IHsgdGhlbjogRnVuY3Rpb247IGVycm9yOiBGdW5jdGlvbiB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlYWR5KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQWZ0ZXIgeW91J3JlIGRvbmUgcmVnaXN0ZXJpbmcgeW91ciBzdG9yZSdzIHByb2R1Y3QgYW5kIGV2ZW50cyBoYW5kbGVycyxcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYWxsIHRoZSBjb21wbGV4IGJlaGluZC10aGUtc2NlbmUgd29yaywgdG8gbG9hZCBwcm9kdWN0XG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxuICAgKiBwdXJjaGFzZWQgYnkgdGhlIHVzZXIuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxuICAgKiBleGVjdXRpb24gdG8gcmUtdHJpZ2dlciBhbGwgdGhhdCBoYXJkLXdvcmsuIEl0J3Mga2luZCBvZiBleHBlbnNpdmUgaW4gdGVybSBvZlxuICAgKiBwcm9jZXNzaW5nLCBzbyB5b3UnZCBiZXR0ZXIgY29uc2lkZXIgaXQgdHdpY2UuXG4gICAqXG4gICAqIE9uZSBnb29kIHdheSBvZiBkb2luZyBpdCBpcyB0byBhZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIGluIHlvdXJcbiAgICogYXBwbGljYXRpb25zIHNldHRpbmdzLiBUaGlzIHdheSwgaWYgZGVsaXZlcnkgb2YgYSBwdXJjaGFzZSBmYWlsZWQgb3JcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcbiAgICogaGF2ZSBhIHdheSB0byBkbyBqdXN0IHRoYXQuXG4gICAqXG4gICAqIGV4YW1wbGUgdXNhZ2UqKlxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqICAgIC8vIC4uLlxuICAgKiAgICAvLyByZWdpc3RlciBwcm9kdWN0cyBhbmQgZXZlbnRzIGhhbmRsZXJzIGhlcmVcbiAgICogICAgLy8gLi4uXG4gICAqICAgIC8vXG4gICAqICAgIC8vIHRoZW4gYW5kIG9ubHkgdGhlbiwgY2FsbCByZWZyZXNoLlxuICAgKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAgICogYGBgXG4gICAqXG4gICAqIHJlc3RvcmUgcHVyY2hhc2VzKipcbiAgICpcbiAgICogQWRkIGEgXCJSZWZyZXNoIFB1cmNoYXNlc1wiIGJ1dHRvbiB0byBjYWxsIHRoZSBgc3RvcmUucmVmcmVzaCgpYCBtZXRob2QsIGxpa2U6XG4gICAqXG4gICAqIGA8YnV0dG9uIG9uY2xpY2s9XCI8cHNldWRvX2NvZGU+dGhpcy5zdG9yZS5yZWZyZXNoKCk8L3BzZXVkb19jb2RlPlwiPlJlc3RvcmUgUHVyY2hhc2VzPC9idXR0b24+YFxuICAgKlxuICAgKiBUbyBtYWtlIHRoZSByZXN0b3JlIHB1cmNoYXNlcyB3b3JrIGFzIGV4cGVjdGVkLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXRcbiAgICogdGhlIFwiYXBwcm92ZWRcIiBldmVudCBsaXN0ZW5lciBoYWQgYmUgcmVnaXN0ZXJlZCBwcm9wZXJseSxcbiAgICogYW5kIGluIHRoZSBjYWxsYmFjayBgcHJvZHVjdC5maW5pc2goKWAgc2hvdWxkIGJlIGNhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWZyZXNoKCk6IElSZWZlc2hSZXN1bHQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKiBMaWdodHdlaWdodCBtZXRob2QgbGlrZSByZWZyZXNoIGJ1dCBkbyBub3QgcmVsb2dpbiB1c2VyICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGUoKTogdm9pZCB7fVxuXG4gIC8qKiBPcGVucyB0aGUgTWFuYWdlIFN1YnNjcmlwdGlvbiBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XG5cbiAgLyoqIE9wZW5zIHRoZSBDb2RlIFJlZGVtcHRpb24gU2hlZXQgb24gaU9TLiAoQXBwU3RvcmUpLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVkZWVtKCk6IHZvaWQge31cblxuICAvKiogT3BlbnMgdGhlIE1hbmFnZSBCaWxsaW5nIHBhZ2UgKEFwcFN0b3JlLCBQbGF5LCBNaWNyb3NvZnQsIC4uLiksIHdoZXJlIHRoZSB1c2VyIGNhbiB1cGRhdGUgaGlzL2hlciBwYXltZW50IG1ldGhvZHMuICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBtYW5hZ2VCaWxsaW5nKCk6IHZvaWQge31cbn1cbiJdfQ==