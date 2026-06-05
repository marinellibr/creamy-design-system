import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HeaderPageComponent } from './header-page.component';

describe('HeaderPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPageComponent],
    }).overrideComponent(HeaderPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(HeaderPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(HeaderPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
