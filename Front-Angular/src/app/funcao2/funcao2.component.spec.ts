import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funcao2Component } from './funcao2.component';

describe('Funcao2Component', () => {
  let component: Funcao2Component;
  let fixture: ComponentFixture<Funcao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Funcao2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funcao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
