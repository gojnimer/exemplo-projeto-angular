import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestrictiveSpcComponent } from './list-restrictive-spc.component';

describe('ListRestrictiveSpcComponent', () => {
  let component: ListRestrictiveSpcComponent;
  let fixture: ComponentFixture<ListRestrictiveSpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestrictiveSpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestrictiveSpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
