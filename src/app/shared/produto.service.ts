import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './model/produto';
import { ProdutoSeletor} from  './model/seletor/produto.seletor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:8080/api/produtos';

  constructor(private httpClient:HttpClient) { }

  listarTodos(): Observable<Array<Produto>>{
    return this.httpClient.get<Array<Produto>>(this.API);
  }

  listarComSeletor(seletor: ProdutoSeletor){
    return this.httpClient.post<Array<Produto>>(this.API + "/filtro", seletor);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Array<Produto>>(this.API, produto);
  }
}
