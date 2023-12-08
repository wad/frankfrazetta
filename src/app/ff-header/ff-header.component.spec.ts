import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfHeaderComponent } from './ff-header.component';

describe('FfHeaderComponent', () => {
  let component: FfHeaderComponent;
  let fixture: ComponentFixture<FfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
