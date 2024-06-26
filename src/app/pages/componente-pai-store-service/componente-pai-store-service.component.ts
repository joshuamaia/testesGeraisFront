import { Component, OnInit } from '@angular/core';
import { ComponenteFilhoStoreServiceComponent } from '../componente-filho-store-service/componente-filho-store-service.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { StoreService } from '../../shared/store.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-componente-pai-store-service',
  standalone: true,
  imports: [SharedModule, ComponenteFilhoStoreServiceComponent],
  templateUrl: './componente-pai-store-service.component.html',
  styleUrl: './componente-pai-store-service.component.scss',
})
export class ComponentePaiStoreServiceComponent implements OnInit {
  name: string = 'Nome qualquer Store Service';

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.data$.subscribe({
      next: (res) => {
        if (res) {
          const text = `${res} - o componente filho se inscreve na stream e abre modal toda vez que há uma emissão na stream`;
          swal.fire(`Info`, text, 'info');
        }
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }
}
