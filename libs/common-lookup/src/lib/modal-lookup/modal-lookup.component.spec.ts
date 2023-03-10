import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLookupComponent } from './modal-lookup.component';

describe('ModalLookupComponent', () => {
  let component: ModalLookupComponent;
  let fixture: ComponentFixture<ModalLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalLookupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
