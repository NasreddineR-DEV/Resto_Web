import { ReclamationService } from './../../services/reclamation.service';
import { ReclamationComponent } from './../reclamation/reclamation.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   
  contact = {
    Objet: '',
    Sujet: '',
    username: this.token.getUsername()
   };

  constructor(private http: HttpClient,private token: TokenStorageService,private dialogRef:MatDialogRef<ContactComponent>,private reclamation : ReclamationService) { }


  envoyer(){
    this.reclamation.envoyer(this.contact)
    .subscribe(res =>{
          
    });
    Swal.fire(
      'Félicitations!',
      'La réclamation est envoyée avec succès',
      'success'
    );
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
