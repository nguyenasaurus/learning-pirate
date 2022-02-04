import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCoachingComponent } from './private-coaching.component';

describe('PrivateCoachingComponent', () => {
  let component: PrivateCoachingComponent;
  let fixture: ComponentFixture<PrivateCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
