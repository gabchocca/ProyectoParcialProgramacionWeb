import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modalidades } from './modalidades';

describe('Modalidades', () => {
  let component: Modalidades;
  let fixture: ComponentFixture<Modalidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalidades],
    }).compileComponents();

    fixture = TestBed.createComponent(Modalidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
