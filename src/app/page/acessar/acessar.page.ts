import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessar',
  templateUrl: './acessar.page.html',
  styleUrls: ['./acessar.page.scss'],
})
export class AcessarPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public redirecionarTelaMonitoramento() {
    return this.router.navigate(["/tabmenu/monitoramento"]);
  }

}
