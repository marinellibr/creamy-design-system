import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OnBrandPageComponent } from './on-brand-page.component';

describe('OnBrandPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnBrandPageComponent],
    })
      .overrideComponent(OnBrandPageComponent, {
        set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(OnBrandPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(OnBrandPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });

  it('countryOptions has entries with label and value', () => {
    const fixture = TestBed.createComponent(OnBrandPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.countryOptions.length).toBeGreaterThan(0);
    c.countryOptions.forEach((opt: any) => {
      expect(typeof opt.label).toBe('string');
      expect(typeof opt.value).toBe('string');
    });
  });
});
