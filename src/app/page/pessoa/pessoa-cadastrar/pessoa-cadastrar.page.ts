import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PessoaService } from './../../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  public formulario: FormGroup;

  public termoPesquisa: string;

  constructor(
    private pessoaService: PessoaService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit() { }

  public async redirecionarTelaGerenciadorPessoa() {
    // return this.modalController.dismiss();
    return location.reload();
  }

  public saveOne() {
    if(this.formulario.invalid) {
      const pessoaEntity = {
        nome: this.formulario.value.nome
      };
      this.pessoaService.saveOne(pessoaEntity).subscribe( response => {
        console.log("Dados Salvos com Sucesso!");
        this.redirecionarTelaGerenciadorPessoa();
      });
    }
  }

}
