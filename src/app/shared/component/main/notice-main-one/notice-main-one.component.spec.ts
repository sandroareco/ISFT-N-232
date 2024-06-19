import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMainOneComponent } from './notice-main-one.component';

describe('NoticeMainOneComponent', () => {
  let component: NoticeMainOneComponent;
  let fixture: ComponentFixture<NoticeMainOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeMainOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeMainOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
