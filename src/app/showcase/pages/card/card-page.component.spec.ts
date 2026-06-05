import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CardPageComponent } from './card-page.component';

describe('CardPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPageComponent],
    })
      .overrideComponent(CardPageComponent, {
        set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(CardPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(CardPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });
});
