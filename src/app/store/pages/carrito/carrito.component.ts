import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  total: number = 0;

  carrito: Productos[] = []
  constructor(private srvStore: StoreService) { }

  ngOnInit(): void {
    this.carrito = this.srvStore.carrito
    this.calcularTotal()
  }

  calcularTotal(){
    this.srvStore.total = 0
    this.srvStore.calcularTotal()
    this.total = this.srvStore.total
  }

  sumar(valor: Productos){
    this.srvStore.carrito.filter(item => valor == item ? item.cantidad++ : null)
    this.srvStore.calcularTotalItem()
    this.calcularTotal()
  }

  restar(valor: Productos){
    if(valor.cantidad > 0){
      this.srvStore.carrito.filter((item,i) => {
        valor == item ? item.cantidad-- : null
        if(item.cantidad == 0){
          this.srvStore.carrito.splice(i, 1)
        }
      })
      this.srvStore.calcularTotalItem()
      this.calcularTotal()   
    }
  }

  eliminar(valor: Productos){
    this.srvStore.carrito.filter((item,i) => {
      if(valor == item){
        this.srvStore.carrito.splice(i, 1)
      }
    })
    this.calcularTotal()
  }

}
