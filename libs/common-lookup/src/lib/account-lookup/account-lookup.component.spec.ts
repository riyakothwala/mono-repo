import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLookupComponent } from './account-lookup.component';

describe('EmployeeLookupComponent', () => {
  let component: AccountLookupComponent;
  let fixture: ComponentFixture<AccountLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountLookupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
