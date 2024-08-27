import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defer1Component } from './defer1.component';

describe('Defer1Component', () => {
  let component: Defer1Component;
  let fixture: ComponentFixture<Defer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defer1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Defer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
