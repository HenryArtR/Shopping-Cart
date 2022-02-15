import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './pages/gifs/gifs.component';
import { MemesComponent } from './pages/memes/memes.component';



@NgModule({
  declarations: [
    GifsComponent,
    MemesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FunModule { }
