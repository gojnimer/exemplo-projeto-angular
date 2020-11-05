import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContingencyComponent } from './detail-contingency.component';

describe('DetailContingencyComponent', () => {
  let component: DetailContingencyComponent;
  let fixture: ComponentFixture<DetailContingencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContingencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContingencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
