import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfFooterComponent } from './ff-footer.component';

describe('FfFooterComponent', () => {
  let component: FfFooterComponent;
  let fixture: ComponentFixture<FfFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
