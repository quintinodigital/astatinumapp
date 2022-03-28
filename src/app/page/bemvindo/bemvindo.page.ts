import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.page.html',
  styleUrls: ['./bemvindo.page.scss'],
})
export class BemvindoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public redirecionarTelaAcessar() {
    return this.router.navigate(["/acessar"]);
  }

  public redirecionarTelaRegistrar() {
    return this.router.navigate(["/registrar"]);
  }

}
