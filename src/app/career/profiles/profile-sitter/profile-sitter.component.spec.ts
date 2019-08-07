import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSitterComponent } from './profile-sitter.component';

describe('ProfileSitterComponent', () => {
  let component: ProfileSitterComponent;
  let fixture: ComponentFixture<ProfileSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
