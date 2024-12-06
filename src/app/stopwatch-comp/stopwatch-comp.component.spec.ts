import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchCompComponent } from './stopwatch-comp.component';

describe('StopwatchCompComponent', () => {
  let component: StopwatchCompComponent;
  let fixture: ComponentFixture<StopwatchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopwatchCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopwatchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
