import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPaqueteComponent } from './tipos-paquete.component';

describe('TiposPaqueteComponent', () => {
  let component: TiposPaqueteComponent;
  let fixture: ComponentFixture<TiposPaqueteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposPaqueteComponent]
    });
    fixture = TestBed.createComponent(TiposPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
