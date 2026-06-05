import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CheckboxPageComponent } from './checkbox-page.component';

describe('CheckboxPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPageComponent],
    })
      .overrideComponent(CheckboxPageComponent, {
        set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(CheckboxPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(CheckboxPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
  });

  it('checkedItems initializes with terms selected', () => {
    const fixture = TestBed.createComponent(CheckboxPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.checkedItems).toContain('terms');
  });

  it('checkboxOptions has three entries', () => {
    const fixture = TestBed.createComponent(CheckboxPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.checkboxOptions.length).toBe(3);
    c.checkboxOptions.forEach((opt: any) => {
      expect(typeof opt.label).toBe('string');
      expect(typeof opt.value).toBe('string');
    });
  });
});
