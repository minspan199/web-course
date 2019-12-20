import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedServerComponent } from './red-server.component';

describe('RedServerComponent', () => {
  let component: RedServerComponent;
  let fixture: ComponentFixture<RedServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
