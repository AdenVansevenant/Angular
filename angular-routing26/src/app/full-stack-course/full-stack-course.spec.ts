import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackCourse } from './full-stack-course';

describe('FullStackCourse', () => {
  let component: FullStackCourse;
  let fixture: ComponentFixture<FullStackCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStackCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
