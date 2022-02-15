import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa-mujer',
  templateUrl: './ropa-mujer.component.html',
  styles: [
  ]
})
export class RopaMujerComponent implements OnInit {

  categoria: string = ''
  constructor() { }

  ngOnInit(): void {
    this.categoria = "women's clothing"
  }

}
