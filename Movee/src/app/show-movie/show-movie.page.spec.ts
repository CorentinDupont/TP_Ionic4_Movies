import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoviePage } from './show-movie.page';

describe('ShowMoviePage', () => {
  let component: ShowMoviePage;
  let fixture: ComponentFixture<ShowMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
