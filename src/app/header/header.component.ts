import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BarraDePesquisaComponent } from '../barra-de-pesquisa/barra-de-pesquisa.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, BarraDePesquisaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
