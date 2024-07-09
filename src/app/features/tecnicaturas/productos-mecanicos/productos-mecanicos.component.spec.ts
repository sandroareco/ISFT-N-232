import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMecanicosComponent } from './productos-mecanicos.component';

describe('ProductosMecanicosComponent', () => {
  let component: ProductosMecanicosComponent;
  let fixture: ComponentFixture<ProductosMecanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosMecanicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
