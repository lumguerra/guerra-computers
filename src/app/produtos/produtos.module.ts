import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from '../detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutosComponent,
    DetalhesProdutoComponent,
    FormsModule
  ]
})
export class ProdutosModule { }
