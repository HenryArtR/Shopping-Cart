import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesModule } from './pages/categories/categories.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductoInfoComponent } from './components/producto-info/producto-info.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './pages/carrito/carrito.component';



@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductoInfoComponent,
    LoginComponent,
    SignUpComponent,
    CarritoComponent,
  ],
  exports: [
    HomeComponent,
    CategoriesComponent, 
    ProductoInfoComponent,
    LoginComponent,
    SignUpComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CategoriesModule,
    PrimeNgModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
