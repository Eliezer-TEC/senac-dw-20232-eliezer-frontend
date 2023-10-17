import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';

const routes: Routes = [
  {path: 'lista', component: ProdutoListagemComponent},
  {path: 'detalhe', component: ProdutoDetalheComponent},
  {path: 'detalhe/:id', component: ProdutoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
