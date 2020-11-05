import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMalaPaComponent } from './list-mala-pa.component';

describe('ListMalaPaComponent', () => {
  let component: ListMalaPaComponent;
  let fixture: ComponentFixture<ListMalaPaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMalaPaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMalaPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
