import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StupComponent } from './stup.component';

describe('StupComponent', () => {
  let component: StupComponent;
  let fixture: ComponentFixture<StupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
