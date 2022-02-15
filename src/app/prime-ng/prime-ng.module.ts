import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';





@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    CarouselModule,
    OverlayPanelModule,
    TableModule,
    AvatarModule,
    BadgeModule,
    TooltipModule,
    RippleModule,
    InputTextModule,
    PasswordModule,
    ToastModule
    
  ]
})
export class PrimeNgModule { }
