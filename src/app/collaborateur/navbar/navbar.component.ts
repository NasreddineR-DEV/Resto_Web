import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationComponent } from '../reclamation/reclamation.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,public dialog: MatDialog) { }

  ngOnInit(): void {
    function test(){
      var tabsNewAnim = $('#navbarSupportedContent');
      var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
      var activeItemNewAnim = tabsNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
      $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
    }
    $(document).ready(function(){
      setTimeout(function(){ test(); });
    });
    $(window).on('resize', function(){
      setTimeout(function(){ test(); }, 500);
    });
    $(".navbar-toggler").click(function(){
      setTimeout(function(){ test(); });
    });
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
