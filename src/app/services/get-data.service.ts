import { Interface } from '../interfce/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Interface> {
    return this.http.get<Interface>(BaseUrl).pipe(
      res => res,
      error => error
    );

  }
}
