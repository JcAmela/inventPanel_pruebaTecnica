import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosPostalesComponent } from './codigos-postales.component';

describe('CodigosPostalesComponent', () => {
  let component: CodigosPostalesComponent;
  let fixture: ComponentFixture<CodigosPostalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigosPostalesComponent]
    });
    fixture = TestBed.createComponent(CodigosPostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
