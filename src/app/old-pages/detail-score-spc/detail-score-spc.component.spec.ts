import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScoreSPCComponent } from './detail-score-spc.component';

describe('DetailScoreSPCComponent', () => {
  let component: DetailScoreSPCComponent;
  let fixture: ComponentFixture<DetailScoreSPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailScoreSPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailScoreSPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
