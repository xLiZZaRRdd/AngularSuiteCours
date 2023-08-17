import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackComponent } from './update-track.component';

describe('UpdateTrackComponent', () => {
  let component: UpdateTrackComponent;
  let fixture: ComponentFixture<UpdateTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrackComponent]
    });
    fixture = TestBed.createComponent(UpdateTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
