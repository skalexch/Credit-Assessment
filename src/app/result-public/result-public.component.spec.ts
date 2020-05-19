import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPublicComponent } from './result-public.component';

describe('ResultPublicComponent', () => {
  let component: ResultPublicComponent;
  let fixture: ComponentFixture<ResultPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
