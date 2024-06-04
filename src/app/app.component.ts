import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            FooterComponent,
            MatSnackBarModule,
            RouterModule
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guerra-arts';
}
