import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristprogetComponentComponent } from './fristproget-component.component';

describe('FristprogetComponentComponent', () => {
  let component: FristprogetComponentComponent;
  let fixture: ComponentFixture<FristprogetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FristprogetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FristprogetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
