import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/authentication/login/login.component.spec.ts
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
=======
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ]
>>>>>>> 3fe3501d3ff522dd00ca3810780ae34fb070f474:src/app/order/order.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/authentication/login/login.component.spec.ts
    fixture = TestBed.createComponent(LoginComponent);
=======
    fixture = TestBed.createComponent(OrderComponent);
>>>>>>> 3fe3501d3ff522dd00ca3810780ae34fb070f474:src/app/order/order.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
