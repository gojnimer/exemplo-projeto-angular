import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssociatedProcessComponent } from './list-associated-process.component';

describe('ListAssociatedProcessComponent', () => {
  let component: ListAssociatedProcessComponent;
  let fixture: ComponentFixture<ListAssociatedProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAssociatedProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssociatedProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
