import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from '../../shared/store.service';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-componente-filho-store-service',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './componente-filho-store-service.component.html',
  styleUrl: './componente-filho-store-service.component.scss',
})
export class ComponenteFilhoStoreServiceComponent implements OnInit {
  @Input() name?: string;
  resourceForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.resourceForm = this.formBuilder.group({
      name: [this.name],
    });
  }

  setStoreData() {
    const name = this.resourceForm.get('name')?.value;
    this.storeService.setData(
      `${name} - Seta os dados na Store e dispara evento`
    );
  }
}
