import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPalComponent } from './user-pal.component';

describe('UserPalComponent', () => {
  let component: UserPalComponent;
  let fixture: ComponentFixture<UserPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
