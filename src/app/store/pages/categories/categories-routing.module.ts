import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicaComponent } from './electronica/electronica.component';
import { JoyeriaComponent } from './joyeria/joyeria.component';
import { RopaHombreComponent } from './ropa-hombre/ropa-hombre.component';
import { RopaMujerComponent } from './ropa-mujer/ropa-mujer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'electronica', component: ElectronicaComponent},
      {path: 'joyeria', component: JoyeriaComponent},
      {path: 'ropa-hombre', component: RopaHombreComponent},
      {path: 'ropa-mujer', component: RopaMujerComponent},
      {path: '**', redirectTo: 'home'},
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CategoriesRoutingModule { }
