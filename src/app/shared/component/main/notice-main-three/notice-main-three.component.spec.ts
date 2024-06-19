import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMainThreeComponent } from './notice-main-three.component';

describe('NoticeMainThreeComponent', () => {
  let component: NoticeMainThreeComponent;
  let fixture: ComponentFixture<NoticeMainThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeMainThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeMainThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
