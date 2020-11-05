import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssociatedProcessModelComponent } from './list-associated-process-model.component';

describe('ListAssociatedProcessModelComponent', () => {
  let component: ListAssociatedProcessModelComponent;
  let fixture: ComponentFixture<ListAssociatedProcessModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAssociatedProcessModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssociatedProcessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
