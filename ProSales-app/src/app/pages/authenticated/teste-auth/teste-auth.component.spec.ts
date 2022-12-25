import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAuthComponent } from './teste-auth.component';

describe('TesteAuthComponent', () => {
  let component: TesteAuthComponent;
  let fixture: ComponentFixture<TesteAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
