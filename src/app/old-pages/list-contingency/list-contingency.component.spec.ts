import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContingencyComponent } from './list-contingency.component';

describe('ListContingencyComponent', () => {
  let component: ListContingencyComponent;
  let fixture: ComponentFixture<ListContingencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContingencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContingencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
