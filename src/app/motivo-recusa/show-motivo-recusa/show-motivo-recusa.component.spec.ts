import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMotivoRecusaComponent } from './show-motivo-recusa.component';

describe('ShowMotivoRecusaComponent', () => {
  let component: ShowMotivoRecusaComponent;
  let fixture: ComponentFixture<ShowMotivoRecusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMotivoRecusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMotivoRecusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
