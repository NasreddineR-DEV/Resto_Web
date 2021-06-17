import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collaborateurUrl = 'http://localhost:8080/api/test/collaborateur';
  private restaurantUrl = 'http://localhost:8080/api/test/restaurant';

  constructor(private http: HttpClient) { }

  getCollBoard(): Observable<string> {
    return this.http.get(this.collaborateurUrl, { responseType: 'text' });
  }

  getRestBoard(): Observable<string> {
    return this.http.get(this.restaurantUrl, { responseType: 'text' });
  }
}
