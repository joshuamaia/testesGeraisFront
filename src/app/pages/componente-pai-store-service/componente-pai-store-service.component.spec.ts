import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaiStoreServiceComponent } from './componente-pai-store-service.component';

describe('ComponentePaiStoreServiceComponent', () => {
  let component: ComponentePaiStoreServiceComponent;
  let fixture: ComponentFixture<ComponentePaiStoreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePaiStoreServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentePaiStoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
