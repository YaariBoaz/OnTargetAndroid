'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

/**
 * @deprecated use ATTRIBUTION_NETWORK instead
 *
 * Enum for attribution networks
 * @readonly
 * @enum {number}
 */
exports.ATTRIBUTION_NETWORKS = void 0;
(function (ATTRIBUTION_NETWORKS) {
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["APPLE_SEARCH_ADS"] = 0] = "APPLE_SEARCH_ADS";
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["ADJUST"] = 1] = "ADJUST";
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["APPSFLYER"] = 2] = "APPSFLYER";
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["BRANCH"] = 3] = "BRANCH";
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["TENJIN"] = 4] = "TENJIN";
    ATTRIBUTION_NETWORKS[ATTRIBUTION_NETWORKS["FACEBOOK"] = 5] = "FACEBOOK";
})(exports.ATTRIBUTION_NETWORKS || (exports.ATTRIBUTION_NETWORKS = {}));
exports.ATTRIBUTION_NETWORK = void 0;
(function (ATTRIBUTION_NETWORK) {
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["APPLE_SEARCH_ADS"] = 0] = "APPLE_SEARCH_ADS";
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["ADJUST"] = 1] = "ADJUST";
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["APPSFLYER"] = 2] = "APPSFLYER";
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["BRANCH"] = 3] = "BRANCH";
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["TENJIN"] = 4] = "TENJIN";
    ATTRIBUTION_NETWORK[ATTRIBUTION_NETWORK["FACEBOOK"] = 5] = "FACEBOOK";
})(exports.ATTRIBUTION_NETWORK || (exports.ATTRIBUTION_NETWORK = {}));
exports.PURCHASE_TYPE = void 0;
(function (PURCHASE_TYPE) {
    /**
     * A type of SKU for in-app products.
     */
    PURCHASE_TYPE["INAPP"] = "inapp";
    /**
     * A type of SKU for subscriptions.
     */
    PURCHASE_TYPE["SUBS"] = "subs";
})(exports.PURCHASE_TYPE || (exports.PURCHASE_TYPE = {}));
/**
 * Enum for billing features.
 * Currently, these are only relevant for Google Play Android users:
 * https://developer.android.com/reference/com/android/billingclient/api/BillingClient.FeatureType
 */
exports.BILLING_FEATURE = void 0;
(function (BILLING_FEATURE) {
    /**
     * Purchase/query for subscriptions.
     */
    BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS"] = 0] = "SUBSCRIPTIONS";
    /**
     * Subscriptions update/replace.
     */
    BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS_UPDATE"] = 1] = "SUBSCRIPTIONS_UPDATE";
    /**
     * Purchase/query for in-app items on VR.
     */
    BILLING_FEATURE[BILLING_FEATURE["IN_APP_ITEMS_ON_VR"] = 2] = "IN_APP_ITEMS_ON_VR";
    /**
     * Purchase/query for subscriptions on VR.
     */
    BILLING_FEATURE[BILLING_FEATURE["SUBSCRIPTIONS_ON_VR"] = 3] = "SUBSCRIPTIONS_ON_VR";
    /**
     * Launch a price change confirmation flow.
     */
    BILLING_FEATURE[BILLING_FEATURE["PRICE_CHANGE_CONFIRMATION"] = 4] = "PRICE_CHANGE_CONFIRMATION";
})(exports.BILLING_FEATURE || (exports.BILLING_FEATURE = {}));
/**
 * @deprecated use PURCHASE_TYPE instead
 *
 * Enum for attribution networks
 * @readonly
 * @enum {string}
 */
exports.ProductType = void 0;
(function (ProductType) {
    ProductType["SUBS"] = "subs";
    ProductType["INAPP"] = "inapp";
})(exports.ProductType || (exports.ProductType = {}));
exports.PRORATION_MODE = void 0;
(function (PRORATION_MODE) {
    PRORATION_MODE[PRORATION_MODE["UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY"] = 0] = "UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY";
    /**
     * Replacement takes effect immediately, and the remaining time will be
     * prorated and credited to the user. This is the current default behavior.
     */
    PRORATION_MODE[PRORATION_MODE["IMMEDIATE_WITH_TIME_PRORATION"] = 1] = "IMMEDIATE_WITH_TIME_PRORATION";
    /**
     * Replacement takes effect immediately, and the billing cycle remains the
     * same. The price for the remaining period will be charged. This option is
     * only available for subscription upgrade.
     */
    PRORATION_MODE[PRORATION_MODE["IMMEDIATE_AND_CHARGE_PRORATED_PRICE"] = 2] = "IMMEDIATE_AND_CHARGE_PRORATED_PRICE";
    /**
     * Replacement takes effect immediately, and the new price will be charged on
     * next recurrence time. The billing cycle stays the same.
     */
    PRORATION_MODE[PRORATION_MODE["IMMEDIATE_WITHOUT_PRORATION"] = 3] = "IMMEDIATE_WITHOUT_PRORATION";
    /**
     * Replacement takes effect when the old plan expires, and the new price will
     * be charged at the same time.
     */
    PRORATION_MODE[PRORATION_MODE["DEFERRED"] = 4] = "DEFERRED";
})(exports.PRORATION_MODE || (exports.PRORATION_MODE = {}));
exports.PACKAGE_TYPE = void 0;
(function (PACKAGE_TYPE) {
    /**
     * A package that was defined with a custom identifier.
     */
    PACKAGE_TYPE["UNKNOWN"] = "UNKNOWN";
    /**
     * A package that was defined with a custom identifier.
     */
    PACKAGE_TYPE["CUSTOM"] = "CUSTOM";
    /**
     * A package configured with the predefined lifetime identifier.
     */
    PACKAGE_TYPE["LIFETIME"] = "LIFETIME";
    /**
     * A package configured with the predefined annual identifier.
     */
    PACKAGE_TYPE["ANNUAL"] = "ANNUAL";
    /**
     * A package configured with the predefined six month identifier.
     */
    PACKAGE_TYPE["SIX_MONTH"] = "SIX_MONTH";
    /**
     * A package configured with the predefined three month identifier.
     */
    PACKAGE_TYPE["THREE_MONTH"] = "THREE_MONTH";
    /**
     * A package configured with the predefined two month identifier.
     */
    PACKAGE_TYPE["TWO_MONTH"] = "TWO_MONTH";
    /**
     * A package configured with the predefined monthly identifier.
     */
    PACKAGE_TYPE["MONTHLY"] = "MONTHLY";
    /**
     * A package configured with the predefined weekly identifier.
     */
    PACKAGE_TYPE["WEEKLY"] = "WEEKLY";
})(exports.PACKAGE_TYPE || (exports.PACKAGE_TYPE = {}));
exports.INTRO_ELIGIBILITY_STATUS = void 0;
(function (INTRO_ELIGIBILITY_STATUS) {
    /**
     * RevenueCat doesn't have enough information to determine eligibility.
     */
    INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_UNKNOWN"] = 0] = "INTRO_ELIGIBILITY_STATUS_UNKNOWN";
    /**
     * The user is not eligible for a free trial or intro pricing for this product.
     */
    INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_INELIGIBLE"] = 1] = "INTRO_ELIGIBILITY_STATUS_INELIGIBLE";
    /**
     * The user is eligible for a free trial or intro pricing for this product.
     */
    INTRO_ELIGIBILITY_STATUS[INTRO_ELIGIBILITY_STATUS["INTRO_ELIGIBILITY_STATUS_ELIGIBLE"] = 2] = "INTRO_ELIGIBILITY_STATUS_ELIGIBLE";
})(exports.INTRO_ELIGIBILITY_STATUS || (exports.INTRO_ELIGIBILITY_STATUS = {}));
var Purchases = /** @class */ (function (_super) {
    tslib.__extends(Purchases, _super);
    function Purchases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Purchases.prototype.setup = function (apiKey, appUserID, observerMode, userDefaultsSuiteName) {
        if (observerMode === void 0) { observerMode = false; }
        return core.cordova(this, "setup", { "sync": true }, arguments);
    };
    Purchases.prototype.setAllowSharingStoreAccount = function (allowSharing) { return core.cordova(this, "setAllowSharingStoreAccount", { "sync": true }, arguments); };
    Purchases.prototype.addAttributionData = function (data, network, networkUserId) { return core.cordova(this, "addAttributionData", { "sync": true }, arguments); };
    Purchases.prototype.getOfferings = function () { return core.cordova(this, "getOfferings", {}, arguments); };
    Purchases.prototype.getProducts = function (productIdentifiers, type) {
        if (type === void 0) { type = exports.PURCHASE_TYPE.SUBS; }
        return core.cordova(this, "getProducts", { "successIndex": 1, "errorIndex": 2 }, arguments);
    };
    Purchases.prototype.purchaseProduct = function (productIdentifier, upgradeInfo, type) {
        if (type === void 0) { type = exports.PURCHASE_TYPE.SUBS; }
        return core.cordova(this, "purchaseProduct", { "successIndex": 1, "errorIndex": 2 }, arguments);
    };
    Purchases.prototype.purchasePackage = function (aPackage, upgradeInfo) { return core.cordova(this, "purchasePackage", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Purchases.prototype.restoreTransactions = function () { return core.cordova(this, "restoreTransactions", {}, arguments); };
    Purchases.prototype.getAppUserID = function () { return core.cordova(this, "getAppUserID", { "sync": true }, arguments); };
    Purchases.prototype.logIn = function (appUserID) { return core.cordova(this, "logIn", {}, arguments); };
    Purchases.prototype.logOut = function () { return core.cordova(this, "logOut", {}, arguments); };
    Purchases.prototype.createAlias = function (newAppUserID) { return core.cordova(this, "createAlias", {}, arguments); };
    Purchases.prototype.identify = function (newAppUserID) { return core.cordova(this, "identify", {}, arguments); };
    Purchases.prototype.reset = function () { return core.cordova(this, "reset", {}, arguments); };
    Purchases.prototype.getPurchaserInfo = function () { return core.cordova(this, "getPurchaserInfo", {}, arguments); };
    Purchases.prototype.onPurchaserInfoUpdated = function () { return core.cordova(this, "onPurchaserInfoUpdated", { "eventObservable": true, "event": "onPurchaserInfoUpdated", "element": "window" }, arguments); };
    Purchases.prototype.setDebugLogsEnabled = function (enabled) { return core.cordova(this, "setDebugLogsEnabled", { "sync": true }, arguments); };
    Purchases.prototype.syncPurchases = function () { return core.cordova(this, "syncPurchases", { "sync": true }, arguments); };
    Purchases.prototype.setSimulatesAskToBuyInSandbox = function (enabled) { return core.cordova(this, "setSimulatesAskToBuyInSandbox", { "sync": true }, arguments); };
    Purchases.prototype.setAutomaticAppleSearchAdsAttributionCollection = function (enabled) { return core.cordova(this, "setAutomaticAppleSearchAdsAttributionCollection", { "sync": true }, arguments); };
    Purchases.prototype.isAnonymous = function () { return core.cordova(this, "isAnonymous", { "sync": true }, arguments); };
    Purchases.prototype.checkTrialOrIntroductoryPriceEligibility = function (productIdentifiers) { return core.cordova(this, "checkTrialOrIntroductoryPriceEligibility", {}, arguments); };
    Purchases.prototype.addShouldPurchasePromoProductListener = function (shouldPurchasePromoProductListener) { return core.cordova(this, "addShouldPurchasePromoProductListener", { "sync": true }, arguments); };
    Purchases.prototype.removeShouldPurchasePromoProductListener = function (listenerToRemove) { return core.cordova(this, "removeShouldPurchasePromoProductListener", { "sync": true }, arguments); };
    Purchases.prototype.invalidatePurchaserInfoCache = function () { return core.cordova(this, "invalidatePurchaserInfoCache", { "sync": true }, arguments); };
    Purchases.prototype.presentCodeRedemptionSheet = function () { return core.cordova(this, "presentCodeRedemptionSheet", { "sync": true }, arguments); };
    Purchases.prototype.setAttributes = function (attributes) { return core.cordova(this, "setAttributes", { "sync": true }, arguments); };
    Purchases.prototype.setEmail = function (email) { return core.cordova(this, "setEmail", { "sync": true }, arguments); };
    Purchases.prototype.setPhoneNumber = function (phoneNumber) { return core.cordova(this, "setPhoneNumber", { "sync": true }, arguments); };
    Purchases.prototype.setDisplayName = function (displayName) { return core.cordova(this, "setDisplayName", { "sync": true }, arguments); };
    Purchases.prototype.setPushToken = function (pushToken) { return core.cordova(this, "setPushToken", { "sync": true }, arguments); };
    Purchases.prototype.setMediaSource = function (mediaSource) { return core.cordova(this, "setMediaSource", { "sync": true }, arguments); };
    Purchases.prototype.setCampaign = function (campaign) { return core.cordova(this, "setCampaign", { "sync": true }, arguments); };
    Purchases.prototype.setAdGroup = function (adGroup) { return core.cordova(this, "setAdGroup", { "sync": true }, arguments); };
    Purchases.prototype.setAd = function (ad) { return core.cordova(this, "setAd", { "sync": true }, arguments); };
    Purchases.prototype.setKeyword = function (keyword) { return core.cordova(this, "setKeyword", { "sync": true }, arguments); };
    Purchases.prototype.setCreative = function (creative) { return core.cordova(this, "setCreative", { "sync": true }, arguments); };
    Purchases.prototype.setAdjustID = function (adjustID) { return core.cordova(this, "setAdjustID", { "sync": true }, arguments); };
    Purchases.prototype.setAppsflyerID = function (appsflyerID) { return core.cordova(this, "setAppsflyerID", { "sync": true }, arguments); };
    Purchases.prototype.setFBAnonymousID = function (fbAnonymousID) { return core.cordova(this, "setFBAnonymousID", { "sync": true }, arguments); };
    Purchases.prototype.setMparticleID = function (mparticleID) { return core.cordova(this, "setMparticleID", { "sync": true }, arguments); };
    Purchases.prototype.setOnesignalID = function (onesignalID) { return core.cordova(this, "setOnesignalID", { "sync": true }, arguments); };
    Purchases.prototype.setAirshipChannelID = function (airshipChannelID) { return core.cordova(this, "setAirshipChannelID", { "sync": true }, arguments); };
    Purchases.prototype.collectDeviceIdentifiers = function () { return core.cordova(this, "collectDeviceIdentifiers", { "sync": true }, arguments); };
    Purchases.prototype.canMakePayments = function (features) {
        if (features === void 0) { features = []; }
        return core.cordova(this, "canMakePayments", {}, arguments);
    };
    Purchases.prototype.setProxyURL = function (url) { return core.cordova(this, "setProxyURL", { "sync": true }, arguments); };
    Purchases.ATTRIBUTION_NETWORKS = exports.ATTRIBUTION_NETWORK;
    /**
     * Enum for attribution networks
     *
     * @readonly
     * @enum {number}
     */
    Purchases.ATTRIBUTION_NETWORK = exports.ATTRIBUTION_NETWORK;
    /**
     * Supported SKU types.
     *
     * @readonly
     * @enum {string}
     */
    Purchases.PURCHASE_TYPE = exports.PURCHASE_TYPE;
    /**
     * Enum for billing features.
     * Currently, these are only relevant for Google Play Android users:
     * https://developer.android.com/reference/com/android/billingclient/api/BillingClient.FeatureType
     */
    Purchases.BILLING_FEATURE = exports.BILLING_FEATURE;
    /**
     * Replace SKU's ProrationMode.
     *
     * @readonly
     * @enum {number}
     */
    Purchases.PRORATION_MODE = exports.PRORATION_MODE;
    /**
     * Enumeration of all possible Package types.
     *
     * @readonly
     * @enum {string}
     */
    Purchases.PACKAGE_TYPE = exports.PACKAGE_TYPE;
    /**
     * Enum of different possible states for intro price eligibility status.
     *
     * @readonly
     * @enum {number}
     */
    Purchases.INTRO_ELIGIBILITY_STATUS = exports.INTRO_ELIGIBILITY_STATUS;
    Purchases.pluginName = "Purchases";
    Purchases.plugin = "cordova-plugin-purchases@2.4.0";
    Purchases.pluginRef = "Purchases";
    Purchases.repo = "https://github.com/RevenueCat/cordova-plugin-purchases";
    Purchases.platforms = ["Android", "iOS"];
    Purchases.decorators = [
        { type: core$1.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    return Purchases;
}(core.AwesomeCordovaNativePlugin));

exports.Purchases = Purchases;
