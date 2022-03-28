import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoaDetalharPage } from './pessoa-detalhar.page';

describe('PessoaDetalharPage', () => {
  let component: PessoaDetalharPage;
  let fixture: ComponentFixture<PessoaDetalharPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaDetalharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoaDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
