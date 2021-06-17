import { AuthLoginGuardService } from './auth/authlogin.guard';
import { FavorisComponent } from './collaborateur/favoris/favoris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CollaborateurRoutingModule } from './collaborateur/collaborateur-routing.module';
import { RestaurantRoutingModule } from './restaurant/restaurant-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MenudujourComponent } from './collaborateur/menudujour/menudujour.component';
import { DemandeComponent } from './collaborateur/demande/demande.component';
import { ReclamationComponent } from './collaborateur/reclamation/reclamation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PlatshowComponent } from './restaurant/platshow/platshow.component';
import { PlataddComponent } from './restaurant/platadd/platadd.component';
import { UpdateplatComponent } from './restaurant/updateplat/updateplat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AddplatComponent } from './restaurant/addplat/addplat.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginGuardService] 
    
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenudujourComponent,
    DemandeComponent,
    ReclamationComponent,
    DataTableComponent,
    UpdateplatComponent,
    AddplatComponent,
    ImageComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollaborateurRoutingModule,
    RestaurantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    SweetAlert2Module,
    

   // RouterModule.forRoot(routes)
  ],


  providers: [httpInterceptorProviders,AuthLoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
