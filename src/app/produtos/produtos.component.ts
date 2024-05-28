import { Component } from '@angular/core';
import { IProduto } from './produtos';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    private produtosService: ProdutosService
  ){}

  ngOnInit(): void{
    this.produtos = this.produtosService.getAll();
  }
}
