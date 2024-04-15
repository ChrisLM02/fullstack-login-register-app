import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaprotegidaComponent } from './rutaprotegida.component';

describe('RutaprotegidaComponent', () => {
  let component: RutaprotegidaComponent;
  let fixture: ComponentFixture<RutaprotegidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutaprotegidaComponent]
    });
    fixture = TestBed.createComponent(RutaprotegidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
