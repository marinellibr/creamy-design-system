import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TextPageComponent } from './text-page.component';

describe('TextPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPageComponent],
    })
      .overrideComponent(TextPageComponent, {
        set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(TextPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(TextPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
