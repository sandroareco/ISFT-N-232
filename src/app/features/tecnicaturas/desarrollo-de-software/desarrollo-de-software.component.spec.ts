import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloDeSoftwareComponent } from './desarrollo-de-software.component';

describe('DesarrolloDeSoftwareComponent', () => {
  let component: DesarrolloDeSoftwareComponent;
  let fixture: ComponentFixture<DesarrolloDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloDeSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesarrolloDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
