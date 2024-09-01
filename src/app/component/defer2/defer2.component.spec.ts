import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defer2Component } from './defer2.component';

describe('Defer2Component', () => {
  let component: Defer2Component;
  let fixture: ComponentFixture<Defer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defer2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Defer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
