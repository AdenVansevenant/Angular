import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelVoorbeeld } from './ng-model-voorbeeld';

describe('NgModelVoorbeeld', () => {
  let component: NgModelVoorbeeld;
  let fixture: ComponentFixture<NgModelVoorbeeld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelVoorbeeld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelVoorbeeld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
