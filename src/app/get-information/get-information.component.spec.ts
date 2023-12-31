import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInformationComponent } from './get-information.component';

describe('GetInformationComponent', () => {
  let component: GetInformationComponent;
  let fixture: ComponentFixture<GetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
