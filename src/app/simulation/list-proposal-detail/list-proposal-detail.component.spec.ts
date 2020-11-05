import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProposalDetailComponent } from './list-proposal-detail.component';

describe('ListProposalDetailComponent', () => {
  let component: ListProposalDetailComponent;
  let fixture: ComponentFixture<ListProposalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProposalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProposalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
