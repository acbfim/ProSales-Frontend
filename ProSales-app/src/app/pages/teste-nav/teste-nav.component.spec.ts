import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNavComponent } from './teste-nav.component';

describe('TesteNavComponent', () => {
  let component: TesteNavComponent;
  let fixture: ComponentFixture<TesteNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
