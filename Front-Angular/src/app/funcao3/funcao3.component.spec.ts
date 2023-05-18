import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funcao3Component } from './funcao3.component';

describe('Funcao3Component', () => {
  let component: Funcao3Component;
  let fixture: ComponentFixture<Funcao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Funcao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funcao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
