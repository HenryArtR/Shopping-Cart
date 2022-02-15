import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicaComponent } from './electronica/electronica.component';
import { JoyeriaComponent } from './joyeria/joyeria.component';
import { RopaHombreComponent } from './ropa-hombre/ropa-hombre.component';
import { RopaMujerComponent } from './ropa-mujer/ropa-mujer.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListadoCategoriaComponent } from '../../components/listado-categoria/listado-categoria.component';




@NgModule({
  declarations: [
    ElectronicaComponent,
    JoyeriaComponent,
    RopaHombreComponent,
    RopaMujerComponent,
    ListadoCategoriaComponent
  ],
  exports: [
    ElectronicaComponent,
    JoyeriaComponent,
    RopaHombreComponent,
    RopaMujerComponent,
    ListadoCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PrimeNgModule
  ]
})
export class CategoriesModule { }
