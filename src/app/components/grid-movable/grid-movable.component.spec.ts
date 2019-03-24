import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMovableComponent } from './grid-movable.component';

describe('GridMovableComponent', () => {
  let component: GridMovableComponent;
  let fixture: ComponentFixture<GridMovableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMovableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
