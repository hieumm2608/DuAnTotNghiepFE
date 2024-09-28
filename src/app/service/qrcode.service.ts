import { Injectable } from '@angular/core';
import { ApiConfigService } from './ApiConfigService';
import { HttpClient } from '@angular/common/http';
import { ApiRespone } from '../entity/api-respone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  url = ApiConfigService.apiUrl;
  constructor(private http: HttpClient) { }

  getQrCode(idtable : number):Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+'/api/getQrcode/'+idtable)
  }

  createQrCode(idTable: number): Observable<ApiRespone> {
    return this.http.post<ApiRespone>(`${this.url}/api/QRcode`, { idTable });
  }
  
}
