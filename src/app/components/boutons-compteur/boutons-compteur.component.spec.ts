import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsCompteurComponent } from './boutons-compteur.component';

describe('BoutonsCompteurComponent', () => {
  let component: BoutonsCompteurComponent;
  let fixture: ComponentFixture<BoutonsCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonsCompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonsCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
