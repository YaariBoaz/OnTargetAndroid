import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, BehaviorSubject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {InitService} from './init.service';
import { Dialog } from '@capacitor/dialog';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private initService: InitService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = `Error: ${error.error.message}`;
                        this.initService.notifyOnErrorFunc(errorMsg);
                        const showAlert = async () => {
                            await Dialog.alert({
                                title: 'Client  Error',
                                message: errorMsg,
                            });
                        };

                    } else {
                        errorMsg = 'Something Went Wrong, Please Try Again'
                        this.initService.notifyOnErrorFunc(errorMsg);
                        const showAlert = async () => {
                            await Dialog.alert({
                                title: 'Server  Error',
                                message: errorMsg,
                            });
                        };
                    }
                    console.log(errorMsg);
                    return throwError(errorMsg);
                })
            )
    }
}
