import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirComponent } from './inspir.component';

describe('InspirComponent', () => {
  let component: InspirComponent;
  let fixture: ComponentFixture<InspirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
