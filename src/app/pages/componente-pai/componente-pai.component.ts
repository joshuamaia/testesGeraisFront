import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [SharedModule, ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.scss',
})
export class ComponentePaiComponent {
  name: string = 'Nome qualquer';

  funcaoPai(nameInput: string) {
    swal.fire(`Info`, `${nameInput} - Chama Pai no filho`, 'info');
  }

  funcaoFilho(event: string) {
    swal.fire(`Info`, event, 'info');
  }
}
