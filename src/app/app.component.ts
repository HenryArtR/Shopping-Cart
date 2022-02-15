import { Component } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { FirebaseService } from './store/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectfun';

  constructor(private primengConfig: PrimeNGConfig, private login: FirebaseService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.login.changeLogin(false)

    }
}
