import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: "produtos/:id", component: DetalhesProdutoComponent},
  { path: "**", component: NaoEncontradoComponent }
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }