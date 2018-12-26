import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsuiteComponent } from './gsuite.component';

describe('GsuiteComponent', () => {
  let component: GsuiteComponent;
  let fixture: ComponentFixture<GsuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
