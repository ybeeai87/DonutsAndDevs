import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPersonDetailsComponent } from './famous-person-details.component';

describe('FamousPersonDetailsComponent', () => {
  let component: FamousPersonDetailsComponent;
  let fixture: ComponentFixture<FamousPersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPersonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
