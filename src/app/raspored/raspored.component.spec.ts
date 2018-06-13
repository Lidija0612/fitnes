
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedComponent } from './raspored.component';

describe('RasporedComponent', () => {
  let component: RasporedComponent;
  let fixture: ComponentFixture<RasporedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RasporedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RasporedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
