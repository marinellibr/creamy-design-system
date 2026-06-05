import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MultidropdownPageComponent } from './multidropdown-page.component';

describe('MultidropdownPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultidropdownPageComponent],
    }).overrideComponent(MultidropdownPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(MultidropdownPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(MultidropdownPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
