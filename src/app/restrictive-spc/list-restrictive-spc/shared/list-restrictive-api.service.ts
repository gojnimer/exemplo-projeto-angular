import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API = 'http://pcred.devops.foursys.com:9000/api/regraanaliserestricaospc';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb3MubmF2ZXNAZm91cnN5cy5jb20uYnIiLCJleHAiOjE1ODA5NjU4NzV9.zzriEP4k_V3BLE-_yOsUq8KFqPnEBjHIjm2a6gz0Xf5g2mhWMjzV9SUNzrhedBJRum1SF7uMUkDq3aevEDnePA'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListRestrictiveApiService {

  constructor(private http: HttpClient) { }

  getListasRestrictiveSpc(codRegra: string, codStatus: string) {
    return this.http.post<any[]>(API + '/listarestritivospc', 
                {codRegra: codRegra, codStatus: codStatus},
                httpOptions
      );
  }
}
