import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanstvoComponent } from './clanstvo.component';

describe('ClanstvoComponent', () => {
  let component: ClanstvoComponent;
  let fixture: ComponentFixture<ClanstvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanstvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanstvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
