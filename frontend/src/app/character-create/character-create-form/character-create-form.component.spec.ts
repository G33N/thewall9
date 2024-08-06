import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreateFormComponent } from './character-create-form.component';

describe('CharacterCreateFormComponent', () => {
  let component: CharacterCreateFormComponent;
  let fixture: ComponentFixture<CharacterCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
