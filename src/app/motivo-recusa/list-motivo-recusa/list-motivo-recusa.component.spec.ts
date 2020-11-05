import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotivoRecusaComponent } from './list-motivo-recusa.component';

describe('ListMotivoRecusaComponent', () => {
  let component: ListMotivoRecusaComponent;
  let fixture: ComponentFixture<ListMotivoRecusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMotivoRecusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMotivoRecusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
