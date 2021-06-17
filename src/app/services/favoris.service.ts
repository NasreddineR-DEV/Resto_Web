import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
   private url = 'http://localhost:8080/favoris/';

  constructor(private http: HttpClient,private token: TokenStorageService) { }

  addfavoris(idplat,username){
        return  this.http.post(this.url+'addfavoris/'+idplat+'/'+username, {id_plat: idplat,username: username});
  }

  deletefavoris(idplat,username){
  return  this.http.delete(this.url+'deletefavoris/'+idplat+'/'+username);
  }
}
