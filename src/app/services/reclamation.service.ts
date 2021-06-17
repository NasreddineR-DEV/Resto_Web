import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

   private url = 'http://localhost:8080/reclamation/';

   constructor(private http: HttpClient,private token: TokenStorageService) { }

   envoyer(contact){
   return this.http.post(this.url+'addrequest/', contact);
   }

}
