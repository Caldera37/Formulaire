import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateonomatopiaComponent } from './createonomatopia.component';

describe('CreateonomatopiaComponent', () => {
  let component: CreateonomatopiaComponent;
  let fixture: ComponentFixture<CreateonomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateonomatopiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateonomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
