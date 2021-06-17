import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-platadd',
  templateUrl: './platadd.component.html',
  styleUrls: ['./platadd.component.css']
})
export class PlataddComponent implements OnInit {

   plats:any [] = [];

   plat = {
    nom_Plat: '',
    prix: 0,
    id_Menu: 0
   };

   plat2:number = 2 ;


    selected = 'option1';

    @ViewChild('fileInput')
    fileInput;
  
    file: File | null = null;
  
  constructor(private token: TokenStorageService,private httpClient: HttpClient,private platsService: PlatsService,private dialogRef:MatDialogRef<PlataddComponent>, private router: Router,private imagesService :ImagesService) { }

  ngOnInit(): void {
  }

 

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.selectedFile = event.target.files[0];
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload(idplat) {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload/'+idplat, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  onToggle(event){
  
    if(this.plat.id_Menu != 15){
    this.plat.id_Menu = 15;
  }else{
    this.plat.id_Menu = 0 ;
  }

  }

  addplat(){
    this.platsService.addplat(this.plat)
    .subscribe(res=>{
      this.plat2 = res as number 
      
      this.onUpload(res);
      
      ;});
      this.dialogRef.close();
      location.reload();
      
  }




}
