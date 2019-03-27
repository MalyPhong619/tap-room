import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapRoomAppComponent } from './tap-room-app.component';

describe('TapRoomAppComponent', () => {
  let component: TapRoomAppComponent;
  let fixture: ComponentFixture<TapRoomAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapRoomAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapRoomAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
