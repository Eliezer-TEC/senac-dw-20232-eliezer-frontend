import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Redireciona o caminho inicial para "produtos/lista"
  //{path: "", redirectTo: "produtos/lista", pathMatch: "full"},
  {
    path: 'produtos',
    loadChildren:() => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
