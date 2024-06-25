import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePaiComponent } from './pages/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './pages/componente-filho/componente-filho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentePaiComponent, ComponenteFilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testesGerais';
}
