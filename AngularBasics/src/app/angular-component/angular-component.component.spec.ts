import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentComponent } from './angular-component.component';

describe('AngularComponentComponent', () => {
  let component: AngularComponentComponent;
  let fixture: ComponentFixture<AngularComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularComponentComponent]
    });
    fixture = TestBed.createComponent(AngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
