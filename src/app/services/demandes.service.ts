import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  private url = 'http://localhost:8080/demande/';

  constructor(private http: HttpClient,private token: TokenStorageService) { }

  adddemande(idplat,username,nom){
  return  this.http.post(this.url+'adddemande', {id_plat: idplat,username: username,etat: 'en attente',nomplat: nom});
  }

  countall(){
    return this.http.get(this.url+'countall')
  }

  countpret(){
    return this.http.get(this.url+'countpret');
  }


  countattente(){
    return this.http.get(this.url+'countattente');
  }


  countpreparation(){
    return this.http.get(this.url+'countpreparation');
  }

  getAllDemande(){
    return this.http.get(this.url+'getdemande/')
  }

  prepaparation(iddemande){
    return this.http.post(this.url+'setprepa/'+iddemande,{id_demande: iddemande})
  }

  pret(iddemande){
    return this.http.post(this.url+'setpret/'+iddemande,{id_demande: iddemande})
  }



}
