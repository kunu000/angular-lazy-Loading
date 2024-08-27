import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminC1Component } from './admin-c1.component';

describe('AdminC1Component', () => {
  let component: AdminC1Component;
  let fixture: ComponentFixture<AdminC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminC1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
