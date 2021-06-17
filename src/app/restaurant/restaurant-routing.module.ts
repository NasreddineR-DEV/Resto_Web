import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RestaurantComponent } from './restaurant.component'
import { AuthGuardService } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DemandeComponent } from './demande/demande.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { PlatshowComponent } from './platshow/platshow.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PlataddComponent } from './platadd/platadd.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PlateditComponent } from './platedit/platedit.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
    { path: "restaurant", component: RestaurantComponent ,

    children:[
        {
            path: "dashboard", component: DashboardComponent ,
            canActivate: [AuthGuardService] 

        },
        {
            path: "demande", component: DemandeComponent ,
            canActivate: [AuthGuardService] 

        },
        {
            path: "plat", component: PlatshowComponent , 
            canActivate: [AuthGuardService]
        },
        {
            path: "addplat", component: PlataddComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: "updateplat/:idplat", component: PlateditComponent,
            canActivate: [AuthGuardService]
        }
      
  ]


},

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
              HttpClientModule,
              CommonModule,
              FormsModule,
              MatTableModule,
              MatPaginatorModule, 
              MatSortModule, 
              MatFormFieldModule, 
              MatInputModule,
              SweetAlert2Module,
              MatButtonModule,
              MatIconModule,
              MatToolbarModule,
              MatGridListModule,
              MatFormFieldModule,
              MatInputModule,
              MatRadioModule,
              MatSelectModule,
              MatCheckboxModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatButtonModule,
              MatDialogModule,          
              MatSlideToggleModule,
              MatSnackBarModule

            ],
            exports: [
                RouterModule,
                MatToolbarModule,
                MatGridListModule,
                MatFormFieldModule,
                MatInputModule,
                MatRadioModule,
                MatSelectModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatButtonModule,
                MatSlideToggleModule ],
    declarations: [RestaurantComponent,
                   DashboardComponent,
                   DemandeComponent,
                   TopbarComponent, 
                   SidebarComponent,
                   PlatshowComponent,
                   PlataddComponent,
                   PlateditComponent
    ]
})
export class RestaurantRoutingModule { }
