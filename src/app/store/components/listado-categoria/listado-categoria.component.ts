import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styles: [
    `
      .h-img{
        width: 100%;
        height: 300px
      }
      .card-h{
        height: 500px
      }
    `

  ]
})
export class ListadoCategoriaComponent implements OnInit {

  @Input() categoria: string = ''
  productos: Productos[] = []
  constructor(private category: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.category.setAndGetCategory(this.categoria).subscribe( result => this.productos = result)
  }

  irADetalles(id:number){
    this.router.navigate(['producto/', id])
  }
  addCarrito(item: Productos){
    this.category.addCarrito(item)
  }

}
