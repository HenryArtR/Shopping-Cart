import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa-hombre',
  templateUrl: './ropa-hombre.component.html',
  styles: [
  ]
})
export class RopaHombreComponent implements OnInit {

  categoria: string = ''
  constructor() { }

  ngOnInit(): void {
    this.categoria = "men's clothing"
  }

}
