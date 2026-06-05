import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownPageComponent } from './dropdown-page.component';

describe('DropdownPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownPageComponent],
    }).overrideComponent(DropdownPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(DropdownPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(DropdownPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
  });

  it('countryOptions has entries with label and value', () => {
    const fixture = TestBed.createComponent(DropdownPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.countryOptions.length).toBeGreaterThan(0);
    c.countryOptions.forEach((opt: any) => {
      expect(typeof opt.label).toBe('string');
      expect(typeof opt.value).toBe('string');
    });
  });
});
