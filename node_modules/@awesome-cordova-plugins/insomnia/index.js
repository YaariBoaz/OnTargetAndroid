var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var InsomniaOriginal = /** @class */ (function (_super) {
    __extends(InsomniaOriginal, _super);
    function InsomniaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsomniaOriginal.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    InsomniaOriginal.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    InsomniaOriginal.pluginName = "Insomnia";
    InsomniaOriginal.plugin = "cordova-plugin-insomnia";
    InsomniaOriginal.pluginRef = "plugins.insomnia";
    InsomniaOriginal.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    InsomniaOriginal.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    return InsomniaOriginal;
}(AwesomeCordovaNativePlugin));
var Insomnia = new InsomniaOriginal();
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zb21uaWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUM5RCw0QkFBMEI7Ozs7SUFPdEQsNEJBQVM7SUFVVCxrQ0FBZTs7Ozs7O21CQXJEakI7RUFvQzhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJbnNvbW5pYVxuICogQGRlc2NyaXB0aW9uXG4gKiBQcmV2ZW50IHRoZSBzY3JlZW4gb2YgdGhlIG1vYmlsZSBkZXZpY2UgZnJvbSBmYWxsaW5nIGFzbGVlcC5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5zb21uaWEgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW5zb21uaWEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc29tbmlhOiBJbnNvbW5pYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pbnNvbW5pYS5rZWVwQXdha2UoKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXG4gKiAgICk7XG4gKlxuICogdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXG4gKiAgICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbnNvbW5pYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWluc29tbmlhJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5pbnNvbW5pYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vSW5zb21uaWEtUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdGaXJlZm94IE9TJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnNvbW5pYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEtlZXBzIGF3YWtlIHRoZSBhcHBsaWNhdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBrZWVwQXdha2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRoZSBhcHBsaWNhdGlvbiB0byBzbGVlcCBhZ2FpblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhbGxvd1NsZWVwQWdhaW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==