import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDwbComponent } from './get-dwb.component';

describe('GetDwbComponent', () => {
  let component: GetDwbComponent;
  let fixture: ComponentFixture<GetDwbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDwbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDwbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
