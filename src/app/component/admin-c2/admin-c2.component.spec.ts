import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminC2Component } from './admin-c2.component';

describe('AdminC2Component', () => {
  let component: AdminC2Component;
  let fixture: ComponentFixture<AdminC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminC2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
