import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TextboxPageComponent } from './textbox-page.component';

describe('TextboxPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxPageComponent],
    }).overrideComponent(TextboxPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(TextboxPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(TextboxPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
