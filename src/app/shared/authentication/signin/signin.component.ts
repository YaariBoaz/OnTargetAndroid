import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SigninModalComponent } from '../../popups/signin-modal/signin-modal.component';
import { InitService } from '../../services/init.service';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { WizardService } from '../signup-wizard/wizard.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
    selector: 'app-singin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    @Output() closeSignup;
    splash = true;
    isSignIn = true;
    userName;
    password;
    socket;
    isFirstLoad = true;
    registerForm: FormGroup;
    submitted = false;
    subscription: Subscription;
    forgotPassword;
    resetemail;
    fieldTextType: boolean;
    showWizard = false;
    showSignin = true;

    selectTermsCondition = false;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private storageService: StorageService,
        private apiService: ApiService,
        private initService: InitService,
        public alertController: AlertController,
        public loadingController: LoadingController,
        private screenOrientation: ScreenOrientation,
        private formBuilder: FormBuilder,
        private wizardService: WizardService,
        private platform: Platform,
        private nativePageTransitions: NativePageTransitions,
        private userService: UserService
    ) {
        // this.router.navigateByUrl('/home/tabs/dashboard');
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        const content: any = document.querySelector('mat-tab-header');
        if (content) {
            content.style.display = 'none';
        }

    }

    ionViewDidLoad() {
        // this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
        //     console.log('Clicked Back And Doing Shit');
        // });
    }

    get f() {
        return this.registerForm.controls;
    }

    ngOnInit() {

        if (this.storageService.getItem('isLoggedIn')) {
            this.router.navigateByUrl('');
        }
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }


    async onFBClick() {
        // this.fb.login(['public_profile', 'email'])
        //     .then((response: FacebookLoginResponse) => {
        //         if (response.authResponse.userID !== '') {
        //             this.fb.api(
        //                 // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:max-line-length
        //                 'me?fields=id,name,email,first_name,last_name,picture.width(600).height(600).as(picture_small),picture.width(360).height(360).as(picture_large)',
        //                 [])
        //                 .then((profileData) => {
        //                     profileData.picture = 'https://graph.facebook.com/' + profileData.id + '/picture?width=1024&height=1024';
        //                     this.storageService.setItem('profileData', profileData);
        //                     this.storageService.setItem('isLogedIn', true);
        //                     this.router.navigateByUrl('/home/tabs/dashboard');
        //                 }, (err) => {
        //                     this.showAlert();
        //                 });
        //         }
        //         console.log('Logged into Facebook!', response);
        //     })
        //     .catch(e => {
        //         console.log('Error logging into Facebook', e);
        //     });
        // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }

    async showAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });
        alert.present();
    }

    goToSignUp() {
        this.showWizard = true;
        this.showSignin = false;
    }

    ionViewWillLeave() {

        const options: NativeTransitionOptions = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };

        this.nativePageTransitions.slide(options)
            .then(() => {
            })
            .catch(() => {
            });

    }


    onLogin() {
        this.showSignin = false;
        this.wizardService.notifyUserWasRegisterd.next(true);
    }

    backToSignin() {
        this.showWizard = false;
    }

    resetPassword() {

    }

    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

    closeWizard() {
        this.showSignin = true;
        this.showWizard = false;
    }

    openBrowser(e) {
        console.log(e);
        window.open('https://docs.google.com/document/d/e/2PACX-1vR2FAVavivWTgxAGAUhNHsEApBbhWzD9groTDYsyOTgMUvOupo3QRImETeW1HQ1AtEed00hzgsNqaWK/pub');
    }
}
