import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 * @usage
 * ```typescript
 * import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
 *
 * constructor(private insomnia: Insomnia) { }
 *
 * ...
 *
 * this.insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * this.insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 */
export declare class InsomniaOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Keeps awake the application
     *
     * @returns {Promise<any>}
     */
    keepAwake(): Promise<any>;
    /**
     * Allows the application to sleep again
     *
     * @returns {Promise<any>}
     */
    allowSleepAgain(): Promise<any>;
}

export declare const Insomnia: InsomniaOriginal;