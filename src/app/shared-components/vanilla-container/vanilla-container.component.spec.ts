import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaContainerComponent } from './vanilla-container.component';

describe('VanillaContainerComponent', () => {
  let component: VanillaContainerComponent;
  let fixture: ComponentFixture<VanillaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanillaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
