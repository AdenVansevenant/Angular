import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndCourse } from './front-end-course';

describe('FrontEndCourse', () => {
  let component: FrontEndCourse;
  let fixture: ComponentFixture<FrontEndCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontEndCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
