import { RetornoDto } from './../interfaces/RetornoDto';
import { CreateAddress } from './../interfaces/CreateAddress';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl = environment.urlApiProSales + "/Address/";

  constructor(private http: HttpClient) { }

  getByExternalId(externalId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}by-external-id/${externalId}`).pipe();
  }

  postCreateAddress(address: CreateAddress) : Observable<RetornoDto> {
    return this.http.post<RetornoDto>(`${this.baseUrl}/create`, address);
  }


}
