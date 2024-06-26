import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFilhoStoreServiceComponent } from './componente-filho-store-service.component';

describe('ComponenteFilhoStoreServiceComponent', () => {
  let component: ComponenteFilhoStoreServiceComponent;
  let fixture: ComponentFixture<ComponenteFilhoStoreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFilhoStoreServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteFilhoStoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
