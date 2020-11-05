import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProcessModalComponent } from './detail-process-modal.component';

describe('DetailProcessModalComponent', () => {
  let component: DetailProcessModalComponent;
  let fixture: ComponentFixture<DetailProcessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProcessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProcessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
