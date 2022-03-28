import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PessoaCadastrarPageRoutingModule } from './pessoa-cadastrar-routing.module';
import { PessoaCadastrarPage } from './pessoa-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PessoaCadastrarPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PessoaCadastrarPage]
})
export class PessoaCadastrarPageModule {}
