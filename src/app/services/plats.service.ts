import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  private url = 'http://localhost:8080/plat/';


  constructor(private http: HttpClient,private token: TokenStorageService) { }

  getplat(idmenu,username){
   return this.http.get(this.url+'getplatnotfavoris/'+idmenu+'/'+username);
  }

  getplatfavoris(username){
    return this.http.get(this.url+'getplatfavoris/'+username);
  }
  getAllPlats(){
    return this.http.get(this.url+'getplat')
  }
  deleteplat(idplat){
   return this.http.delete(this.url+'deleteplat/'+idplat);
  }

  addplat(plat){
    return this.http.post(this.url+'addplat/',plat)
  }

  getplatbyid(idplat){
    return  this.http.get(this.url+'getbyid/'+idplat)
  }

  updateplat(Id_Plat,Nom_Plat,Prix,Id_Menu){
    return   this.http.post(this.url+'updateplat/'+Id_Plat+'/'+Nom_Plat+'/'+Prix+'/'+Id_Menu,{id_plat: Id_Plat,nom_Plat: Nom_Plat,prix: Prix,id_Menu: Id_Menu})

  }
}
