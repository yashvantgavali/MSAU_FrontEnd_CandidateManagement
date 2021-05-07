import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandidateComponent } from './createcandidate.component';

describe('CreatecandidateComponent', () => {
  let component: CreatecandidateComponent;
  let fixture: ComponentFixture<CreatecandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
