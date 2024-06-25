import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from '../../../@core/services/store.service';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.scss',
})
export class ComponenteFilhoComponent implements OnInit {
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
    this.storeService.setData(`${name} - Seta os dados na Store e dispara evento`);
  }

}
