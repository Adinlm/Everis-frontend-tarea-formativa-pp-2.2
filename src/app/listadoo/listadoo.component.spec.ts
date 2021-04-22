import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadooComponent } from './listadoo.component';

describe('ListadooComponent', () => {
  let component: ListadooComponent;
  let fixture: ComponentFixture<ListadooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
