import { Plat } from './../../../Plat';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PlataddComponent } from '../platadd/platadd.component';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-platshow',
  templateUrl: './platshow.component.html',
  styleUrls: ['./platshow.component.css']
})
export class PlatshowComponent implements OnInit {

  ELEMENT_DATA : Plat[];
  displayedColumns = ["nomplat", "prix", "option"];
  dataSource = new MatTableDataSource<Plat>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  username ; 
  constructor(private plat: PlatsService,private token: TokenStorageService,public dialog: MatDialog) {  
     this.username = this.token.getUsername();

  }

  ngOnInit(): void {
    this.getAllPlats();
  }

  applyFilter(filtervalue: string){
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public getAllPlats(){
     this.plat.getAllPlats()
    .subscribe(response =>{      
      this.dataSource.data = response as Plat[] ;
    })}

    deleteplat(post){
      this.plat.deleteplat(post)
      .subscribe(res=>{
        this.dataSource.data = res as Plat[] ;
      })}

      openDialog() {
        const dialogRef = this.dialog.open(PlataddComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
}




