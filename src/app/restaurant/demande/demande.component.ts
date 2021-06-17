import { Component, OnInit, ViewChild } from '@angular/core';
import { Demande } from 'src/Demande';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { DemandesService } from 'src/app/services/demandes.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  ELEMENT_DATA : Demande[];
  displayedColumns = ["nomplat", "etat","username","option"];
  dataSource = new MatTableDataSource<Demande>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  username ; 
  constructor(private demande: DemandesService,private token: TokenStorageService) {  
     this.username = this.token.getUsername();

  }

  ngOnInit(): void {
    this.getAllDemande();
  }

  applyFilter(filtervalue: string){
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public getAllDemande(){
    this.demande.getAllDemande()
    .subscribe(response =>{      
      this.dataSource.data = response as Demande[] ;
    })}

    prepaparation(post){
      this.demande.prepaparation(post)
      .subscribe(re =>{
        this.getAllDemande();
     });}

    pret(post){
      this.demande.pret(post)
      .subscribe(re =>{
        this.getAllDemande();
     });}

     
}
