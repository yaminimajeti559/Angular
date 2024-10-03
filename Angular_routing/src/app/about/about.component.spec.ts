import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABoutComponent } from './about.component';

describe('ABoutComponent', () => {
  let component: ABoutComponent;
  let fixture: ComponentFixture<ABoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ABoutComponent]
    });
    fixture = TestBed.createComponent(ABoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
