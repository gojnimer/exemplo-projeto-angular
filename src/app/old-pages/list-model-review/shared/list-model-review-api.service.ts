import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListModelReviewApiService {

  readonly url = 'http://pcred.devops.foursys.com:9000/api/modeloanalisecredito';
  
  constructor(private http: HttpClient) { }

  getListasModelReview(codRegra: string, descricaoModelo: string) {
    return this.http.get<any[]>(`${this.url}/listamodelo`,
                httpOptions
      );
  }
}
