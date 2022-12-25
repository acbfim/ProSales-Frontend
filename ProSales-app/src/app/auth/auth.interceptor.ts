import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from "@angular/router";
import { tap } from "rxjs/internal/operators/tap";

@Injectable({ providedIn: 'root' })

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) {

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var uriReq = req.url.split('//')[1].split('/')[0];
        //console.log(uriReq);
        if (
            uriReq === 'viacep.com.br'
            || uriReq === 'xtalk.ftc.br'
            || uriReq === 'xtalkcrc.uniftc.edu.br'
            || uriReq === 'discordapp.com'
            || uriReq === 'cors-anywhere.herokuapp.com'
        ) {
            //console.log("aa");
            return next.handle(req.clone());
        } else {


            if (localStorage.getItem('token') !== null) {
                const cloneReq = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
                });
                return next.handle(cloneReq).pipe(
                    tap(
                        succ => { },
                        err => {
                            if (err.status === 401) {
                                localStorage.removeItem('token');
                                this.router.navigateByUrl('user/lockScreen');
                            }
                        }
                    )
                );

            }
            else {
                return next.handle(req.clone());
            }
        }


    }
}
