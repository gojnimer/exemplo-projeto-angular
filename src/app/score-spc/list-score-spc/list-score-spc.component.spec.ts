import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScoreSPCComponent } from './list-score-spc.component';

describe('ListScoreSPCComponent', () => {
  let component: ListScoreSPCComponent;
  let fixture: ComponentFixture<ListScoreSPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScoreSPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScoreSPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
