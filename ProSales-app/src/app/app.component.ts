import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ProSales-app';

  teste = environment;



  constructor(
    private _storageService: StorageService
      ) {
    
  }

  ngOnInit(): void {
    this._storageService.setItem('Casa','MINHA CASA');

    console.log('CASA DECRYPT: ', this._storageService.getItem('Casa'));
  }
  


}
