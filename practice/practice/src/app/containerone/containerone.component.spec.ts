import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaineroneComponent } from './containerone.component';

describe('ContaineroneComponent', () => {
  let component: ContaineroneComponent;
  let fixture: ComponentFixture<ContaineroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaineroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaineroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
