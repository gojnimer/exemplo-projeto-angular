import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensagemComponent } from './list-mensagem.component';

describe('ListMensagemComponent', () => {
  let component: ListMensagemComponent;
  let fixture: ComponentFixture<ListMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
