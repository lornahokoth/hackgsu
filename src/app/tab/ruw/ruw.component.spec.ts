import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUWComponent } from './ruw.component';

describe('RUWComponent', () => {
  let component: RUWComponent;
  let fixture: ComponentFixture<RUWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RUWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
