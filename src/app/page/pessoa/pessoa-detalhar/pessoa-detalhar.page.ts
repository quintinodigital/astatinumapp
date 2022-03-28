import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-detalhar',
  templateUrl: './pessoa-detalhar.page.html',
  styleUrls: ['./pessoa-detalhar.page.scss'],
})
export class PessoaDetalharPage implements OnInit {

  @Input() pessoaEntityParameter: any;

  constructor(
    private alertController: AlertController,
    public pessoaService: PessoaService
  ) { }

  ngOnInit() { }

  public updateOne() {
    this.pessoaService.updateOne(this.pessoaEntityParameter).subscribe( response => {
      console.log("Dados Atualizados com Sucesso!", response);
      this.redirecionarTelaGerenciadorPessoa();
    });
  }

  public deleteOne() {
    this.pessoaService.deleteOne(this.pessoaEntityParameter.codigo).subscribe( response => {
      console.log("Dados Removidos com Sucesso!", response);
      this.redirecionarTelaGerenciadorPessoa();
    });
  }

  public async redirecionarTelaGerenciadorPessoa() {
    return location.reload();
  }

  public recuperarImagem(imagem: string) {
    return 'data:image/png;base64,' + imagem;
  }

  public async apresentarAlertaExclusaoRegistro() {
    const alerta = await this.alertController.create({
      header: 'Atenção',
      subHeader: '',
      message: 'Deseja realmente Excluir esse Registro?',
      buttons: [
        { text: 'Não' }, 
        { text: 'Sim', id: 'confirm-button', handler: () => { this.deleteOne(); } }
      ]
    });
    return alerta.present();
  }

}
