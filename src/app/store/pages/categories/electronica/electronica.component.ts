import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styles: [
  ]
})
export class ElectronicaComponent implements OnInit {

  categoria: string = ''
  constructor() { }

  ngOnInit(): void {
    this.categoria = 'electronics'
  }

}
