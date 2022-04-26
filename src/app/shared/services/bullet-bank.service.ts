import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class BulletBankService {

    _AMOUNT_OF_BULLETS_KEY = 'amountOfBullets'

    constructor(private storageService: StorageService) {
    }


    setNumberOfBullets(amount: number) {
        let amountLeft = this.storageService.getItem(this._AMOUNT_OF_BULLETS_KEY);
        console.log('AMOUNT OF BULLETS LEFT TO SHOOT BEFORE UPDATE: ', amountLeft);
        if (amountLeft) {
            amount += amountLeft;
        }
        this.storageService.setItem(this._AMOUNT_OF_BULLETS_KEY, amount);
        amountLeft = this.storageService.getItem(this._AMOUNT_OF_BULLETS_KEY);
        console.log('AMOUNT OF BULLETS LEFT TO SHOOT AFTER UPDATE: ', amountLeft);

    }

    getNumberOfBulletsRemaining() {
        const amountLeft = this.storageService.getItem(this._AMOUNT_OF_BULLETS_KEY);
        console.log('AMOUNT OF BULLETS LEFT TO SHOOT: ', amountLeft);
        return amountLeft;
    }

    subtractBullets(amount) {
        console.log('AMOUNT TO SUBTRACT: ',amount)
        let amountLeft = this.storageService.getItem(this._AMOUNT_OF_BULLETS_KEY);
        console.log('AMOUNT OF BULLETS LEFT TO SHOOT BEFORE UPDATE: ', amountLeft);
        amountLeft  -= amount;
        this.storageService.setItem(this._AMOUNT_OF_BULLETS_KEY, amountLeft);
        amountLeft = this.storageService.getItem(this._AMOUNT_OF_BULLETS_KEY);
        console.log('AMOUNT OF BULLETS LEFT TO SHOOT AFTER UPDATE: ', amountLeft);
    }
}
