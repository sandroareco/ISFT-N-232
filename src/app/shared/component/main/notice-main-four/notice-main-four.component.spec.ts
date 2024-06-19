import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMainFourComponent } from './notice-main-four.component';

describe('NoticeMainFourComponent', () => {
  let component: NoticeMainFourComponent;
  let fixture: ComponentFixture<NoticeMainFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeMainFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeMainFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
