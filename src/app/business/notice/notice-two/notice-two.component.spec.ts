import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeTwoComponent } from './notice-two.component';

describe('NoticeTwoComponent', () => {
  let component: NoticeTwoComponent;
  let fixture: ComponentFixture<NoticeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
