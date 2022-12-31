import { AddressService } from './../../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-auth',
  templateUrl: './teste-auth.component.html',
  styleUrls: ['./teste-auth.component.scss']
})
export class TesteAuthComponent implements OnInit{

  constructor(private addressService: AddressService) {


  }
  ngOnInit(): void {
    this.addressService.getByExternalId("6440c9e3-2a01-4cb3-bca6-ae84455d2f92").subscribe(
      (_res :any) => {
        console.log("RES: ",_res)
      }, error => {
        console.error("ERR", error.error)
      }
    );

  }

}
