import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { FavorisService } from 'src/app/services/favoris.service';
import { PlatsService } from './../../services/plats.service';
import { DemandesService } from 'src/app/services/demandes.service';

@Component({
  selector: 'sushis',
  templateUrl: './sushis.component.html',
  styleUrls: ['./sushis.component.css']
})
export class SushisComponent implements OnInit {

      
  posts:any [] = [];
  images:any [] = [];
  new:any [] = [];
  retrievedImage = 'data:image/jpeg;base64,';
  username ;


  constructor(private http: HttpClient,private token: TokenStorageService, private demande: DemandesService,private plat: PlatsService,private favoris: FavorisService) {
 
    this.username = this.token.getUsername() ;
  
   this.plat.getplat(5,this.username)
   .subscribe(response =>{      
    this.posts = response as any ;
                          })
  
  }
  
  ngOnInit(): void {
  }
  
  onClick(post){
  this.favoris.addfavoris(post,this.username)
  .subscribe(re =>{
    this.plat.getplat(5,this.username)
    .subscribe(response =>{      
      this.posts = response as any ;
    })
  });}
  
  onClickdelete(post){
   this.favoris.deletefavoris(post,this.username)
   .subscribe(ra =>{
    this.plat.getplat(5,this.username).subscribe(response =>{      
      this.posts = response as any ;
    })
  });}
  
  adddemande(post,nom){
  
    this.demande.adddemande(post,this.username,nom)
    .subscribe(ra =>{
  
    })
  
  Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: 'La demande est effectuée avec succès',
   showConfirmButton: false,
   timer: 1500  
  })
  }
  
  }
