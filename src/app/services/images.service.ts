import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private url = 'http://localhost:8080/image/';


  constructor(private http: HttpClient,private token: TokenStorageService) { }

  onUpload(Id_Plat,selectedFile: File){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', selectedFile, selectedFile.name);

    return this.http.post(this.url+'upload/'+Id_Plat, uploadImageData, { observe: 'response' })

  }

  deleteimage(Id_image,plat){

  return  this.http.post(this.url+'delete/'+Id_image,plat)
  }

}
