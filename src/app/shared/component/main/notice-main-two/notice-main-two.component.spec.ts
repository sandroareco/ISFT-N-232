import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMainTwoComponent } from './notice-main-two.component';

describe('NoticeMainTwoComponent', () => {
  let component: NoticeMainTwoComponent;
  let fixture: ComponentFixture<NoticeMainTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeMainTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeMainTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
