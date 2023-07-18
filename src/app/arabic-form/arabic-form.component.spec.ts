import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicFormComponent } from './arabic-form.component';

describe('ArabicFormComponent', () => {
  let component: ArabicFormComponent;
  let fixture: ComponentFixture<ArabicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
