import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos/produtos';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})

export class DetalhesProdutoComponent implements OnInit{

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const produtoId = Number(params.get("id"));
      this.produto = this.produtosService.getOne(produtoId);
    });
  }
  

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
