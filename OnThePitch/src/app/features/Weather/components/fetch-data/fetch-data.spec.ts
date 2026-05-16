import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { FetchData } from './fetch-data';

describe('FetchData', () => {
  let component: FetchData;
  let fixture: ComponentFixture<FetchData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchData],
      providers: [provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
