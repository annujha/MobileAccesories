import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperedGlassComponent } from './tempered-glass.component';

describe('TemperedGlassComponent', () => {
  let component: TemperedGlassComponent;
  let fixture: ComponentFixture<TemperedGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperedGlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperedGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
