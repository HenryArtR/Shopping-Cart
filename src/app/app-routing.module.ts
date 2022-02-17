import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';
import { ProductoInfoComponent } from './store/components/producto-info/producto-info.component';
import { CarritoComponent } from './store/pages/carrito/carrito.component';
import { CategoriesComponent } from './store/pages/categories/categories.component';
import { HomeComponent } from './store/pages/home/home.component';
import { LoginComponent } from './store/pages/login/login.component';
import { SignUpComponent } from './store/pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'carrito', component: CarritoComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'categorias', component: CategoriesComponent,
    loadChildren: () => import('./store/pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  {path: 'producto/:id', component: ProductoInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
