import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentA } from './component-a';

describe('ComponentA', () => {
  let component: ComponentA;
  let fixture: ComponentFixture<ComponentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
