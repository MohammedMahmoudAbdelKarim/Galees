import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterSignupComponent } from './sitter-signup.component';

describe('SignupComponent', () => {
  let component: SitterSignupComponent;
  let fixture: ComponentFixture<SitterSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitterSignupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
