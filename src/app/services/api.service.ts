import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../album';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  getMorceau(id: number): Observable<Album> {
    return this.http.get<Album>(
      'https://lostin70s.com/lpwebfront/api/deezer/track/' + id
    );
  }
  search(val: string) {
    return this.http.get<
      {
        id: number;
        title: 'string';
      }[]
    >('https://lostin70s.com/lpwebfront/api/deezer/search?q=' + val);
  }
}
