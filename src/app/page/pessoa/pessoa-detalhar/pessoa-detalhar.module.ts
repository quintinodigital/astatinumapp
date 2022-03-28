import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PessoaDetalharPageRoutingModule } from './pessoa-detalhar-routing.module';
import { PessoaDetalharPage } from './pessoa-detalhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PessoaDetalharPageRoutingModule
  ],
  declarations: [PessoaDetalharPage]
})
export class PessoaDetalharPageModule {}
