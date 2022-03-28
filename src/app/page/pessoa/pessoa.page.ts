import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PessoaService } from './../../service/pessoa.service';
import { PessoaCadastrarPage } from './pessoa-cadastrar/pessoa-cadastrar.page';
import { PessoaDetalharPage } from './pessoa-detalhar/pessoa-detalhar.page';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  public pessoaList: any[];

  public termoPesquisa: string;

  constructor(
    private pessoaService: PessoaService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.findAll();
  }

  public findAll() {
    this.pessoaService.findAll().subscribe( response => {
      this.pessoaList = response;
    });
  }

  public doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.findAll();
    }, 2000);
  }

  public recuperarImagem(imagem: string) {
    return 'data:image/png;base64,' + imagem;
  }

  public async redirecionarTelaCadastrarPessoa() {
    const pessoaCadastrarModal = await this.modalController.create({
      component: PessoaCadastrarPage
    });
    return pessoaCadastrarModal.present();
  }

  public async redirecionarTelaDetalharPessoa(pessoaEntity: any) {
    const pessoaCadastrarModal = await this.modalController.create({
      component: PessoaDetalharPage,
      componentProps: { pessoaEntityParameter: pessoaEntity }
    });
    return pessoaCadastrarModal.present();
  }

}
