import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrattionComponent } from './registrattion.component';

describe('RegistrattionComponent', () => {
  let component: RegistrattionComponent;
  let fixture: ComponentFixture<RegistrattionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrattionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrattionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
