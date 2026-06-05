import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RadioPageComponent } from './radio-page.component';

function create() {
  TestBed.overrideComponent(RadioPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(RadioPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('RadioPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPageComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const { fixture } = create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const { c } = create();
    expect(typeof c.snippet).toBe('string');
  });

  it('baseOptions has three options with label and value', () => {
    const { c } = create();
    expect(c.baseOptions.length).toBe(3);
    c.baseOptions.forEach((opt: any) => {
      expect(typeof opt.label).toBe('string');
      expect(typeof opt.value).toBe('string');
    });
  });

  it('selected starts as null', () => {
    const { c } = create();
    expect(c.selected()).toBeNull();
  });

  it('selectedCustom starts as null', () => {
    const { c } = create();
    expect(c.selectedCustom()).toBeNull();
  });

  it('selected signal can be set', () => {
    const { c } = create();
    c.selected.set('a');
    expect(c.selected()).toBe('a');
  });

  it('selectedCustom signal can be set', () => {
    const { c } = create();
    c.selectedCustom.set('b');
    expect(c.selectedCustom()).toBe('b');
  });
});
