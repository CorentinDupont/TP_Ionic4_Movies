import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxMille48Page } from './deux-mille48.page';

describe('DeuxMille48Page', () => {
  let component: DeuxMille48Page;
  let fixture: ComponentFixture<DeuxMille48Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuxMille48Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxMille48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
