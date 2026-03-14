import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickList } from './rick-list';

describe('RickList', () => {
  let component: RickList;
  let fixture: ComponentFixture<RickList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
