import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styles: [
  ]
})
export class ProductoInfoComponent implements OnInit {

  cantidad: number = 0
  objeto!: Productos;
  constructor(private producto: StoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!
    this.producto.getProducto(id).subscribe(result => this.objeto = result)
  }

  addCarrito(){
    this.producto.addCarrito(this.objeto)
  }
}
