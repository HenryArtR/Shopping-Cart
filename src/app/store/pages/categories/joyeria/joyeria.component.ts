import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.component.html',
  styles: [
  ]
})
export class JoyeriaComponent implements OnInit {

  categoria: string = ''
  constructor() { }

  ngOnInit(): void {
    this.categoria = "jewelery"
  }

}
