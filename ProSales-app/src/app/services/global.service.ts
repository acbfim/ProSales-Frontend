import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class GlobalService {

  sideNavToggle = new EventEmitter<any>();

constructor(
  private http: HttpClient
  ,private router: Router
) { }

public _sideNavToggle(status: any) {
  this.sideNavToggle.emit(status);
}

public navigateTo(route: string){
  this.router.navigate([route]);
}

public navigateToByUrl(route: any, extras?: any){
  this.router.navigateByUrl(route,extras);
}

decrypt(data: any) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, environment.secretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (error) {
      return data;
    }
  }

  encrypt(data: any) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        environment.secretKey
      ).toString();
    } catch (error) {
      return data;
    }
  }

  base64Encode(valor: string) {
    return Buffer.from(valor).toString('base64');
  }

  base64Decode(valor: any) {
    return Buffer.from(valor,'base64').toString('binary');
  }

  getIPAddress() {
    return this.http.get('http://ip-api.com/json');
  }

  isDesktop() {
    return window.innerWidth >= 600;
  }

  isNull(data: any) {
    if (data) {
      return data;
    } else {
      return '';
    }
  }

}
