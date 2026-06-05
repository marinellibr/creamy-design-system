import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DividerPageComponent } from './divider-page.component';

describe('DividerPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerPageComponent],
    })
      .overrideComponent(DividerPageComponent, {
        set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(DividerPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(DividerPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
