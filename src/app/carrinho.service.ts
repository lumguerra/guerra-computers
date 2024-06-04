import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(): IProdutoCarrinho[] {
    if (this.isLocalStorageAvailable()) {
      this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    }
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
  }

  limparCarrinho() {
    this.itens = [];
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem("carrinho");
    }
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
  }

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
