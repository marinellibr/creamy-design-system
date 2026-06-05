import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DatePickerPageComponent } from './date-picker-page.component';

describe('DatePickerPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerPageComponent],
    }).overrideComponent(DatePickerPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(DatePickerPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const fixture = TestBed.createComponent(DatePickerPageComponent);
    const c = fixture.componentInstance as any;
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });

  it('calendarDate is initialized as a Date', () => {
    const fixture = TestBed.createComponent(DatePickerPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.calendarDate).toBeInstanceOf(Date);
  });
});
