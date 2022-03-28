import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessarPageRoutingModule } from './acessar-routing.module';

import { AcessarPage } from './acessar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessarPageRoutingModule
  ],
  declarations: [AcessarPage]
})
export class AcessarPageModule {}
