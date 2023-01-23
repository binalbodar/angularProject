import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdAPIComponent } from './curd-api.component';

describe('CurdAPIComponent', () => {
  let component: CurdAPIComponent;
  let fixture: ComponentFixture<CurdAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
