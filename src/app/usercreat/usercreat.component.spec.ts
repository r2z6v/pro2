import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreatComponent } from './usercreat.component';

describe('UsercreatComponent', () => {
  let component: UsercreatComponent;
  let fixture: ComponentFixture<UsercreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
