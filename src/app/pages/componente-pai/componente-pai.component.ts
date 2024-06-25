import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';
import swal from 'sweetalert2';
import { StoreService } from '../../../@core/services/store.service';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [SharedModule, ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.scss',
})
export class ComponentePaiComponent implements OnInit {
  name: string = 'Nome qualquer';

  constructor(private storeService: StoreService) {}
 
  ngOnInit(): void {
    this.storeService.data$.subscribe({
      next: (res) => {
        const text = `${res} - o componente filho se inscreve na stream e abre modal toda vez que há uma emissão na stream`;
        swal.fire(`Info`, text, 'info');
      }, 
      error: (error) => {
        throw new Error(error)
      }
    })
  }
}
