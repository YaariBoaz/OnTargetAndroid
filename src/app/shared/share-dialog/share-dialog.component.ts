import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DrillType} from '../../tab2/tab2.page';
import {ModalController} from '@ionic/angular';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {Screenshot} from 'capacitor-screenshot';
import {NgxCaptureService} from 'ngx-capture';
import {UserService} from '../services/user.service';
import {TargetType} from '../drill/constants';
import {Directory, Filesystem} from '@capacitor/filesystem';
import {Share} from "@capacitor/share";


// tslint:disable-next-line:label-position

@Component({
    selector: 'app-share-dialog',
    templateUrl: './share-dialog.component.html',
    styleUrls: ['./share-dialog.component.scss'],
})
export class ShareDialogComponent implements OnInit {
    @ViewChild('shareDiv') shareDiv: ElementRef;
    @ViewChild('canvas') canvas: ElementRef;
    @ViewChild('downloadLink') downloadLink: ElementRef;
    train;
    loader: any = null;
    sharingText = 'You can download our app from playstore or use this link to download the app. And you can share awesome coupons with your loved once, Thank you';
    emailSubject = 'Download Apps';
    recipent = ['recipient@example.org'];
    environment = {
        production: false,
        socialShareOption: [
            {
                title: 'Whatsapp',
                logo: 'assets/social/whatsapp.png',
                shareType: 'shareViaWhatsApp'
            },
            {
                title: 'Facebook',
                logo: 'assets/social/fb.png',
                shareType: 'shareViaFacebook'
            },
            {
                title: 'Twitter',
                logo: 'assets/social/twitter.png',
                shareType: 'shareViaTwitter'
            },
            {
                title: 'Instagram',
                logo: 'assets/social/instagram.png',
                shareType: 'shareViaInstagram'
            },
            {
                title: 'Email',
                logo: 'assets/social/email.png',
                shareType: 'viaEmail'
            }
        ],
    };
    public sharingList = this.environment.socialShareOption;
    isHitNoHit: any;
    madadToUse = 220;

    public get targetTypeEnum(): typeof TargetType {
        return TargetType;
    }

    public get drillTypeEnum(): typeof DrillType {
        return DrillType;
    }

    isNotSharing = true;
    profile;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private modal: ModalController,
                private socialSharing: SocialSharing,
                private userService: UserService,
                private captureService: NgxCaptureService) {
        this.profile = this.userService.getUser();
        if (data && data.drill) {
            this.train = data.drill;
            this.train.summaryObject = data.summary;
            this.train.shots = data.shots;
            this.train.targetType = data.targetType;
            this.train.groupingNumber = data.grouping
            this.train.totalTime = data.totalTime;
        } else {
            this.train = {
                drillType: DrillType.Regular,
            }
        }
        console.log(this.train);
    }

    ngOnInit() {
    }

    shareVia() {
        this.isNotSharing = false;
        Screenshot.take().then((ret: { base64: string }) => {
            console.log(ret.base64); // or `data:image/png;base64,${ret.base64}`
            const file = this.saveBase64ToFile(ret).then((fileRes) => {
                Share.share({
                    title: 'On-Target',
                    text: 'My latest shooting with On-Target',
                    url: fileRes.uri,
                    dialogTitle: 'Share with buddies',
                }).then(r => {
                    debugger
                });
            });


        });
    }

    //     const node: any = document.getElementById('image-section');
    //     htmlToImage.toPng(node)
    //         .then((dataUrl) => {
    //             const img = new Image();
    //             img.src = dataUrl;
    //             debugger
    //             document.body.appendChild(img);
    //         })
    //         .catch((error) => {
    //             console.error('oops, something went wrong!', error);
    //         });
    // }

    // this.captureService.getImage(this.shareDiv.nativeElement, true)
    //     .pipe(
    //         tap((img: string) => {
    //                 debugger
    //                 const writeSecretFile = async () => {
    //                     await Filesystem.writeFile({
    //                         path: 'post.png',
    //                         data: 'This is a test',
    //                         directory: Directory.Cache,
    //                     });
    //                 };
    //
    //             debugger
    //                 this.socialSharing.canShareVia('com.apple.social.facebook',
    //                     'Check out my freaking crazy score shooting', img).then(() => {
    //                     this.socialSharing.shareViaFacebook('Check out my freaking crazy score shooting', img).then(() => {
    //                         debugger
    //                     })
    //                 }, (reason) => {
    //                     console.log(reason);
    //                 });
    //             }
    //         )
    //     ).subscribe();


    private async saveBase64ToFile(ret: { base64: string }) {
        return await Filesystem.writeFile({
            path: 'temp.png',
            data: ret.base64,
            directory: Directory.Cache,
        });
    }

    private async share(uri: any) {
        const a = await Share.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies',
        });
        console.log('');
    }

    close() {

    }
}

