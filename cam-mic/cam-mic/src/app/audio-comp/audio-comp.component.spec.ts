import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCompComponent } from './audio-comp.component';

describe('AudioCompComponent', () => {
  let component: AudioCompComponent;
  let fixture: ComponentFixture<AudioCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
