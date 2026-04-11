import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextbox } from './filter-textbox';

describe('FilterTextbox', () => {
  let component: FilterTextbox;
  let fixture: ComponentFixture<FilterTextbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTextbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTextbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
