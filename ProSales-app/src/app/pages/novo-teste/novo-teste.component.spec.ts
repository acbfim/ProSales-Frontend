import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTesteComponent } from './novo-teste.component';

describe('NovoTesteComponent', () => {
  let component: NovoTesteComponent;
  let fixture: ComponentFixture<NovoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
