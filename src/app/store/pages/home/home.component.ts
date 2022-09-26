import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cantidad: number = 0
  productos: Productos[] = []
  carga: boolean = true

  constructor(private product: StoreService, private router: Router) { }

  ngOnInit() {
    this.product.getProductos().subscribe(items => this.productos = items, err =>{},() => this.carga = false)
  }

  irADetalles(id:number){
    this.router.navigate(['producto/', id])
  }


  addCarrito(valor: Productos){
    this.product.addCarrito(valor)    
  }


}
