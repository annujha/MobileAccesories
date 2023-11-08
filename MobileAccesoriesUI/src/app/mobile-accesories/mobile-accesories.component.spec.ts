import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAccesoriesComponent } from './mobile-accesories.component';

describe('MobileAccesoriesComponent', () => {
  let component: MobileAccesoriesComponent;
  let fixture: ComponentFixture<MobileAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAccesoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
