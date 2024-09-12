import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadaComponent } from './kannada.component';

describe('KannadaComponent', () => {
  let component: KannadaComponent;
  let fixture: ComponentFixture<KannadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KannadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KannadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
