import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFilterComponent } from './partners-filter.component';

describe('PartnersFilterComponent', () => {
  let component: PartnersFilterComponent;
  let fixture: ComponentFixture<PartnersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
