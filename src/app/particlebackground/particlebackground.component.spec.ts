import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlebackgroundComponent } from './particlebackground.component';

describe('ParticlebackgroundComponent', () => {
  let component: ParticlebackgroundComponent;
  let fixture: ComponentFixture<ParticlebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticlebackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticlebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
