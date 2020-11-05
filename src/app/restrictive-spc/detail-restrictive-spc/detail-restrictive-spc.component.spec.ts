import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestrictiveSpcComponent } from './detail-restrictive-spc.component';

describe('DetailRestrictiveSpcComponent', () => {
  let component: DetailRestrictiveSpcComponent;
  let fixture: ComponentFixture<DetailRestrictiveSpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRestrictiveSpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRestrictiveSpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
