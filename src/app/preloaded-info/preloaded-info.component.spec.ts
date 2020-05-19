import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadedInfoComponent } from './preloaded-info.component';

describe('PreloadedInfoComponent', () => {
  let component: PreloadedInfoComponent;
  let fixture: ComponentFixture<PreloadedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
