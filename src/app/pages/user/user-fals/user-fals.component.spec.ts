import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFalsComponent } from './user-fals.component';

describe('UserFalsComponent', () => {
  let component: UserFalsComponent;
  let fixture: ComponentFixture<UserFalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
