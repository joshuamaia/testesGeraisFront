import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  @Input() funcaoPai!: Function;
  @Output() eventoFilho = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.resourceForm = this.formBuilder.group({
      name: [this.name],
    });
  }

  funcaoFilho() {
    const name = this.resourceForm.get('name')?.value;
    this.funcaoPai(name);
  }

  funcaoFilhoParaPai() {
    const name = this.resourceForm.get('name')?.value;
    this.eventoFilho.emit(`${name} - Emite Filho pro Pai`);
  }
}
