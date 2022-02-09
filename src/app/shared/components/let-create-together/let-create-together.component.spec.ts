import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetCreateTogetherComponent } from './let-create-together.component';

describe('LetCreateTogetherComponent', () => {
  let component: LetCreateTogetherComponent;
  let fixture: ComponentFixture<LetCreateTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetCreateTogetherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetCreateTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
