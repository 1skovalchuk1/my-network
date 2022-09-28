import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPalComponent } from './user-add-pal.component';

describe('UserAddPalComponent', () => {
  let component: UserAddPalComponent;
  let fixture: ComponentFixture<UserAddPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddPalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
