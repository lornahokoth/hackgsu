import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcComponent } from './startc.component';

describe('StartcComponent', () => {
  let component: StartcComponent;
  let fixture: ComponentFixture<StartcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
