import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEComponent } from './cse.component';

describe('CSEComponent', () => {
  let component: CSEComponent;
  let fixture: ComponentFixture<CSEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSEComponent]
    });
    fixture = TestBed.createComponent(CSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
