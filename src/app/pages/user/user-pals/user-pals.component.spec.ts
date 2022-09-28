import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPalsComponent } from './user-pals.component';

describe('UserPalsComponent', () => {
  let component: UserPalsComponent;
  let fixture: ComponentFixture<UserPalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
