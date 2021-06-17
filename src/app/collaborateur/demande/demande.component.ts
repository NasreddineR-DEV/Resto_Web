import { Demande } from './../../../Demande';
import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
   
  ELEMENT_DATA : Demande[];
  displayedColumns = ["nomplat", "etat"];
  dataSource = new MatTableDataSource<Demande>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  username ; 
  constructor(private http: HttpClient,private token: TokenStorageService) {  
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
    this.http.get('http://localhost:8080/demande/getbyusername/'+this.username)
    .subscribe(response =>{ 
      this.dataSource.data = response as Demande[];   
     // this.dataSource = response as Demande[] ;

    })


  }


  

}
