import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DemandesService } from 'src/app/services/demandes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  demandes: any ; 
  pret: any ; 
  attente: any ; 
  preparation: any;
  constructor(private demande: DemandesService) { 
    
     this.demande.countall()
    .subscribe(response =>{      
      this.demandes = response as any ;
    });
    this.demande.countpret()
    .subscribe(response =>{      
      this.pret = response as any ;
    });
    this.demande.countattente()
    .subscribe(response =>{      
      this.attente = response as any ;
    });
    this.demande.countpreparation()
    .subscribe(response =>{      
      this.preparation = response as any ;
    });


    
 
  }

  ngOnInit(): void {
  }

}
