
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Productos } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  
  private nombre$: Subject<string> = new Subject() 
  private apellido$: Subject<string> = new Subject()
  private carrito$: Subject<Productos[]> = new Subject()
  cantidadTotal$: Subject<number> = new Subject()

  cantidadTotal: number = 0
  totalItem: number = 0;
  total: number = 0;
  carrito: Productos[] = [];

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>('https://fakestoreapi.com/products?limit=12')
  }
  getProducto(id:string): Observable<Productos>{
    return this.http.get<Productos>(`https://fakestoreapi.com/products/${id}`)
  }


  setAndGetCategory(value: string): Observable<Productos[]>{
    return this.http.get<Productos[]>(`https://fakestoreapi.com/products/category/${value}`)
  }

  addCarrito(valor: Productos){
    this.cantidadTotal++
    this.cantidadTotal$.next(this.cantidadTotal)
    if(!this.carrito.includes(valor)){
      valor.cantidad = 1
      this.carrito.push(valor)
      this.carrito$.next(this.carrito)
    }else{
      valor.cantidad++
    }
    this.calcularTotalItem()
  }

  calcularTotalItem(){
    this.carrito.map(item => {
      this.totalItem = item.price * item.cantidad!
      item.total = this.totalItem
    })
  }

  calcularTotal(){
    this.carrito.map(item => {
      this.total += item.total
    })
  }

  cambiarNombreApellido(valor1: string, valor2:string){
    this.nombre$.next(valor1)
    this.apellido$.next(valor2)
  }

  getNombre$(): Observable<string>{
    return this.nombre$.asObservable()
  }
  getApellido$(): Observable<string>{
    return this.apellido$.asObservable()
  }

  setCarrito$(valor: Productos[]){
    this.carrito$.next(valor)
  }
  getCarrito$(): Observable<Productos[]>{
    return this.carrito$
  }

}
