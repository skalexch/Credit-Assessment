import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerInterfaceComponent } from './banker-interface.component';

describe('BankerInterfaceComponent', () => {
  let component: BankerInterfaceComponent;
  let fixture: ComponentFixture<BankerInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
