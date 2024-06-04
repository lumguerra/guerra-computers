import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  getAll(): IProduto[] {
    return produtos;
  }

  getOne(id: number): IProduto | undefined {
    return produtos.find(produto => produto.id === id);
  }
}
