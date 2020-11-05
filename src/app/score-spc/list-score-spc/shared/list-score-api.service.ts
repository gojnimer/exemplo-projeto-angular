import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API = 'http://pcred.devops.foursys.com:9000/api/regraanalisescorespc';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListScoreApiService {


  constructor(private http: HttpClient) { }

  getListasScoreSpc(codRegra: string, tipoCliente: string) {
    return this.http.post<any[]>(API + '/listascorespc', 
                {codRegra: codRegra, tipoCliente: tipoCliente},
                httpOptions
      );
  }
}
