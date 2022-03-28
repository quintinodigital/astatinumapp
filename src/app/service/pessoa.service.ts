import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaEntity } from "../entity/pessoa-entity";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<any> {
    return this.httpClient.get<any[]>("http://127.0.0.1:8080/pessoa");
  }

  public saveOne(pessoaEntity: any) : Observable<any> {
    return this.httpClient.post("http://127.0.0.1:8080/pessoa", pessoaEntity);
  }

  public updateOne(pessoaEntity: PessoaEntity) : Observable<PessoaEntity> {
    return this.httpClient.put<PessoaEntity>("http://127.0.0.1:8080/pessoa", pessoaEntity);
  }

  public deleteOne(pessoaCodigo: number) : Observable<number> {
    return this.httpClient.delete<number>(`http://127.0.0.1:8080/pessoa/${pessoaCodigo}`);
  }

}
