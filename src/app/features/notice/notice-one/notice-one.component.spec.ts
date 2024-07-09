import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeOneComponent } from './notice-one.component';

describe('NoticeOneComponent', () => {
  let component: NoticeOneComponent;
  let fixture: ComponentFixture<NoticeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
