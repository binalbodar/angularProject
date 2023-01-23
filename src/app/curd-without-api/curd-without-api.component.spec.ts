import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdWithoutAPIComponent } from './curd-without-api.component';

describe('CurdWithoutAPIComponent', () => {
  let component: CurdWithoutAPIComponent;
  let fixture: ComponentFixture<CurdWithoutAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdWithoutAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdWithoutAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
