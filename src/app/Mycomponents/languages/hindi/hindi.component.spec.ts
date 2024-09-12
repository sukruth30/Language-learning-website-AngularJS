import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiComponent } from './hindi.component';

describe('HindiComponent', () => {
  let component: HindiComponent;
  let fixture: ComponentFixture<HindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
