import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number) {
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
    window.location.reload();
    console.log("removido");
  }

  comprar() {
    alert("Parabéns, você finalizou sua compra!");
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = []; 
    this.calcularTotal(); 
  }
}
