import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  @Input() pessoaEntity: any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async redirecionarTelaGerenciadorPessoa() {
    return this.modalController.dismiss();
  }

  public recuperarImagem(imagem: string) {
    return 'data:image/png;base64,' + imagem;
  }

}
