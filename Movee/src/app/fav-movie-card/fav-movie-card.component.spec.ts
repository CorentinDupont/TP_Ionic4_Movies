import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMovieCardPage } from './fav-movie-card.page';

describe('FavMovieCardPage', () => {
  let component: FavMovieCardPage;
  let fixture: ComponentFixture<FavMovieCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavMovieCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMovieCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
