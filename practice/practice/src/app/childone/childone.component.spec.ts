import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoneComponent } from './childone.component';

describe('ChildoneComponent', () => {
  let component: ChildoneComponent;
  let fixture: ComponentFixture<ChildoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
