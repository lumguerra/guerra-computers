import { Component } from '@angular/core';
import { IProduto } from './produtos';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ NgFor,
             RouterModule,
             FormsModule
   ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    });
  }
}
