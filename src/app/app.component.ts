import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePaiComponent } from './pages/componente-pai/componente-pai.component';
import { ComponentePaiStoreServiceComponent } from './pages/componente-pai-store-service/componente-pai-store-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentePaiComponent,
    ComponentePaiStoreServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testesGerais';
}
