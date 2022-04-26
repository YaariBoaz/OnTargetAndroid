import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Insomnia = /** @class */ (function (_super) {
    __extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia.decorators = [
        { type: Injectable }
    ];
    return Insomnia;
}(AwesomeCordovaNativePlugin));
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zb21uaWEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUM5RCw0QkFBMEI7Ozs7SUFPdEQsNEJBQVM7SUFVVCxrQ0FBZTs7Ozs7OztnQkFsQmhCLFVBQVU7O21CQW5DWDtFQW9DOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEluc29tbmlhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByZXZlbnQgdGhlIHNjcmVlbiBvZiB0aGUgbW9iaWxlIGRldmljZSBmcm9tIGZhbGxpbmcgYXNsZWVwLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbnNvbW5pYSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbnNvbW5pYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zb21uaWE6IEluc29tbmlhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmluc29tbmlhLmtlZXBBd2FrZSgpXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJyksXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ2Vycm9yJylcbiAqICAgKTtcbiAqXG4gKiB0aGlzLmluc29tbmlhLmFsbG93U2xlZXBBZ2FpbigpXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJyksXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ2Vycm9yJylcbiAqICAgKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luc29tbmlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5zb21uaWEnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmluc29tbmlhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9JbnNvbW5pYS1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ0ZpcmVmb3ggT1MnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc29tbmlhIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogS2VlcHMgYXdha2UgdGhlIGFwcGxpY2F0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGtlZXBBd2FrZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIGFwcGxpY2F0aW9uIHRvIHNsZWVwIGFnYWluXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFsbG93U2xlZXBBZ2FpbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19