import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasCompletoComponent } from './cartas-completo.component';

describe('CartasCompletoComponent', () => {
  let component: CartasCompletoComponent;
  let fixture: ComponentFixture<CartasCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasCompletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
