import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos/:id', component: DetalhesProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: NaoEncontradoComponent }
];
