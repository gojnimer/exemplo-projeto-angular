import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModelContigencyComponent } from './list-model-contigency.component';

describe('ListModelContigencyComponent', () => {
  let component: ListModelContigencyComponent;
  let fixture: ComponentFixture<ListModelContigencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModelContigencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModelContigencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
