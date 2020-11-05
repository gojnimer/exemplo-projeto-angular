import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API = 'http://pcred.devops.foursys.com:9000/api/processoetapa';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb3MubmF2ZXNAZm91cnN5cy5jb20uYnIiLCJleHAiOjE1ODA5NjU4NzV9.zzriEP4k_V3BLE-_yOsUq8KFqPnEBjHIjm2a6gz0Xf5g2mhWMjzV9SUNzrhedBJRum1SF7uMUkDq3aevEDnePA'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListAssociatedProcessApiService {

  constructor(private http: HttpClient) { }

  getListasAssociatedProcess(idModeloAnalise: string, dsProcesso: string, idProcesso: string, ordemProcesso: string) {
    return this.http.post<any[]>(API + '/listaprocessoassociado', 
                {idModeloAnalise: idModeloAnalise, dsProcesso: dsProcesso, idProcesso: idProcesso, ordemProcesso: ordemProcesso},
                httpOptions
      );
  }


}
