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

    this.carrito = this.srvStore.carrito

    this.srvStore.getNombre().subscribe(resp => this.nombre = resp)
    this.srvStore.getApellido().subscribe(resp => {
      this.apellido = resp
      this.helloUser = `Bienvenido, ${this.nombre} ${this.apellido}`
    })
    
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
  }

  loginToast(valor: any){
    valor.hide()
    this.firebase.getLogin().subscribe(result => {
      console.log(result)
      if(result == true){
        this.router.navigate(['carrito'])
      }else{
        this.router.navigate(['login'])
        this.toast.add({key: 'bc', severity: 'error', summary: 'For continue', detail: 'You must log in'})
      }
    })
    
    
  }
  

  
}
