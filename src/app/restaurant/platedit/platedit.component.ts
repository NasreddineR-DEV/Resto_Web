import { ImagesService } from './../../services/images.service';
import { PlatsService } from 'src/app/services/plats.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-platedit',
  templateUrl: './platedit.component.html',
  styleUrls: ['./platedit.component.css']
})
export class PlateditComponent implements OnInit {
  idplat: number ;
  plats:any = [] ;
  retrievedImage2 = 'data:image/jpeg;base64,';
  imageselected: boolean = false; 
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;


  plat = {
    Id_Plat: 0 ,
    Nom_Plat: '',
    Prix: 0,
    Id_Menu: 0,
    Id_image: 0,
    url: '',
    
   };


  constructor(private httpClient: HttpClient,private platsService: PlatsService,private route: ActivatedRoute,private http: HttpClient,private imagesService :ImagesService) {
    this.route.paramMap.subscribe(
      params => {
        this.idplat = +params.get('idplat');
      }
    );
    this.getplat();
  }

  updateplat() {
    if(this.imageselected == true){
      this.deleteimage();
      this.onUpload(this.idplat);}

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Le plat est modifié avec succés',
      showConfirmButton: false,
      timer: 1500
    })

  this.platsService.updateplat(this.plat.Id_Plat,this.plat.Nom_Plat,this.plat.Prix,this.plat.Id_Menu)
  .subscribe(res =>{
  })

 
  location.reload();



  }

  ngOnInit(): void {
  }

  getplat(){
    this.platsService.getplatbyid(this.idplat)
    .subscribe(response =>{      
      this.plats = response as any;
      this.plat.Id_Plat = this.plats[0][0];
      this.plat.Id_Menu = this.plats[0][1];
      this.plat.Nom_Plat = this.plats[0][2];
      this.plat.Prix = this.plats[0][3];
      this.plat.Id_image = this.plats[0][4];
      this.plat.url = this.plats[0][5];
    })
  }


  deleteimage(){
    this.imagesService.deleteimage(this.plat.Id_image,this.plat)
    .subscribe(res =>{
    });
  }

  onToggle(event){
    if(this.plat.Id_Menu != 15){
    this.plat.Id_Menu = 15;
  }else{
    this.plat.Id_Menu = 0 ;
  }
}


  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.selectedFile = event.target.files[0];
    this.imageselected = !this.imageselected;
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload(idplat) {
    console.log(this.selectedFile);
    
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
      this.imageselected = !this.imageselected;

  }




}
