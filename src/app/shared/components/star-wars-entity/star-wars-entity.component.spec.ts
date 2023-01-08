import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsEntityComponent } from './star-wars-entity.component';

describe('StarWarsEntityComponent', () => {
  let component: StarWarsEntityComponent;
  let fixture: ComponentFixture<StarWarsEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StarWarsEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
