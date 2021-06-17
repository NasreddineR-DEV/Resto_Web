import { ImageComponent } from './../image/image.component';
import { AuthGuardService } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CollaborateurComponent } from './collaborateur.component';
import { MenuComponent } from './menu/menu.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PouletComponent } from './poulet/poulet.component';
import { TajineComponent } from './tajine/tajine.component';
import { SoupesComponent } from './soupes/soupes.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PlatsComponent } from './plats/plats.component';
import { SushisComponent } from './sushis/sushis.component';
import { FriedComponent } from './fried/fried.component';
import { EntreesComponent } from './entrees/entrees.component';
import { WoksComponent } from './woks/woks.component';
import { PatesComponent } from './pates/pates.component';
import { TacosComponent } from './tacos/tacos.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { JusfraisComponent } from './jusfrais/jusfrais.component';
import { ContactComponent } from './contact/contact.component';
import { AuthLoginGuardService } from '../auth/authlogin.guard';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { MenudujourComponent } from './menudujour/menudujour.component';
import { DemandeComponent } from './demande/demande.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes: Routes = [
    { path: "collaborateur", component: CollaborateurComponent,
      
      children:[
            {
                path: "menu", component: MenuComponent ,
                canActivate: [AuthGuardService],
               

            },
            {
                path: "favoris", component: FavorisComponent ,
                canActivate: [AuthGuardService] 

            },
            {
                path: "contact", component: ContactComponent,
                canActivate: [AuthGuardService] 
            },
            {
                path: "menujours", component: MenudujourComponent,
                canActivate: [AuthGuardService] 
            },
          
            {
                path: "demande", component: DemandeComponent,
                canActivate: [AuthGuardService] 

            },
            {
                path: "reclamation", component: ReclamationComponent,
                canActivate: [AuthGuardService] 

            },
           
           
      ]

       
    },
  

      

  
 
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };
  
@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions),
              CommonModule,
              HttpClientModule,
              FormsModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule,
              MatFormFieldModule,
              MatInputModule,
              SweetAlert2Module

            ],
    exports: [RouterModule],
    declarations: [MenuComponent,
                   FavorisComponent,
                   ContactComponent,
                   CollaborateurComponent,
                   NavbarComponent,
                   PouletComponent,
                   TajineComponent,
                   SoupesComponent,
                   PizzasComponent,
                   PlatsComponent,
                   SushisComponent,
                   FriedComponent,
                   EntreesComponent,
                   WoksComponent,
                   PatesComponent,
                   TacosComponent,
                   DessertsComponent,
                   BoissonsComponent,
                   JusfraisComponent,
                   
                   
               
                   
               
               ],
               providers: [AuthGuardService],

               
                                
})
export class CollaborateurRoutingModule { }
