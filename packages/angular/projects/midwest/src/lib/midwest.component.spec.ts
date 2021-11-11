import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidwestComponent } from './midwest.component';

describe('MidwestComponent', () => {
  let component: MidwestComponent;
  let fixture: ComponentFixture<MidwestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidwestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
