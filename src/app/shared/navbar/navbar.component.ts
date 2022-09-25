import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Productos } from 'src/app/store/interfaces/store.interface';
import { FirebaseService } from 'src/app/store/services/firebase.service';
import { StoreService } from 'src/app/store/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [MessageService],
  styles: [  ]
})
export class NavbarComponent implements OnInit {

  nombre: string = ''
  apellido:string = ''
  helloUser: string = ''
  carrito: Productos[] = [];
  items: MenuItem[] = [];
  total: number = 0;
  registrado: boolean = false
  cantidadCarrito: number = 0



  constructor(private srvStore: StoreService, private toast: MessageService, private firebase: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          routerLink: 'home'
      },
      {
          label: 'Categorias',
          icon: 'pi pi-fw pi-list',
          items: [
              {label: 'Ropa de hombre', icon: 'pi pi-fw pi-sun', routerLink: 'categorias/ropa-hombre'},
              {label: 'Ropa de mujer', icon: 'pi pi-fw pi-moon', routerLink: 'categorias/ropa-mujer'},
              {label: 'Electronica', icon: 'pi pi-fw pi-star', routerLink: 'categorias/electronica'},
              {label: 'Joyeria', icon: 'pi pi-fw pi-heart', routerLink: 'categorias/joyeria'},
          ]
      }
    ];

    this.firebase.registrado$.subscribe(resp => {
      this.registrado = resp
      if(resp == true){
        this.helloUser = `Bienvenido, ${this.nombre} ${this.apellido}`
      }else{
        this.helloUser = ''
        this.registrado = false
      }
    })
    
    this.srvStore.cantidadTotal$.subscribe(num=> this.cantidadCarrito = num)
    this.srvStore.getCarrito$().subscribe(resp => this.carrito = resp)
    this.srvStore.getNombre$().subscribe(resp => this.nombre = resp)
    this.srvStore.getApellido$().subscribe(resp => this.apellido = resp)
    
  }

  calcularTotal(op?:any){
    this.srvStore.total = 0
    this.srvStore.calcularTotal()
    this.total = this.srvStore.total
    if(this.carrito.length == 0){
      op.hide()
      this.toast.add({key: 'tc', severity: 'info', summary: 'For continue', detail: 'Add something to cart'})
    }
    
  }

  sumar(valor: Productos){
    this.cantidadCarrito++
    this.srvStore.cantidadTotal = this.cantidadCarrito
    this.srvStore.carrito.filter(item => valor == item ? item.cantidad++ : null)
    this.srvStore.calcularTotalItem()
    this.calcularTotal()
  }

  restar(valor: Productos){
    this.cantidadCarrito--
    this.srvStore.cantidadTotal = this.cantidadCarrito
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
    let resta = this.cantidadCarrito - valor.cantidad
    this.srvStore.cantidadTotal = resta
    this.cantidadCarrito = resta
    this.srvStore.calcularTotalItem()
    this.calcularTotal()
  }

  loginToast(valor: any){
    if(this.firebase.registrado == false){
      this.toast.add({key: 'bc', severity: 'error', summary: 'For continue', detail: 'You must log in'})
    }
    this.router.navigate(['carrito'])
    valor.hide()
  }

  reset(){
    this.srvStore.cambiarNombreApellido('','')
    this.firebase.registrado$.next(false)
    this.firebase.registrado = false
    this.srvStore.carrito = []
    this.carrito = []
    this.srvStore.setCarrito$(this.carrito)
    this.srvStore.cantidadTotal$.next(this.carrito.length)
    this.srvStore.cantidadTotal = this.carrito.length
    this.router.navigate(['home'])
  }
  

  
}
