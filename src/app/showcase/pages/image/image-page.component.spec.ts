import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ImagePageComponent } from './image-page.component';

describe('ImagePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePageComponent],
    }).overrideComponent(ImagePageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(ImagePageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(ImagePageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
