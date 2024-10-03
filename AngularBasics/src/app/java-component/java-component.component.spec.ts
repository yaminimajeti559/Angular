import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaComponentComponent } from './java-component.component';

describe('JavaComponentComponent', () => {
  let component: JavaComponentComponent;
  let fixture: ComponentFixture<JavaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaComponentComponent]
    });
    fixture = TestBed.createComponent(JavaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
