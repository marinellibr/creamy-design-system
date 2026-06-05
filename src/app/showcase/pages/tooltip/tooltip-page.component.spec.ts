import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TooltipPageComponent } from './tooltip-page.component';

function create() {
  TestBed.overrideComponent(TooltipPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(TooltipPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('TooltipPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipPageComponent],
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

  it('initializes signals with defaults', () => {
    const { c } = create();
    expect(c.text()).toBe('Copiar para área de transferência');
    expect(c.icon()).toBe('copy_base');
    expect(c.ativo()).toBe(false);
    expect(c.iconQuery()).toBe('copy_base');
    expect(c.iconInputFocused()).toBe(false);
  });

  it('variant is "default" when ativo is false', () => {
    const { c } = create();
    expect(c.variant()).toBe('default');
  });

  it('variant is "contrast" when ativo is true', () => {
    const { c } = create();
    c.ativo.set(true);
    expect(c.variant()).toBe('contrast');
  });

  it('iconSuggestions returns up to 12 items when query is empty', () => {
    const { c } = create();
    c.iconQuery.set('');
    expect(c.iconSuggestions().length).toBeLessThanOrEqual(12);
    expect(c.iconSuggestions().length).toBeGreaterThan(0);
  });

  it('iconSuggestions filters by query', () => {
    const { c } = create();
    c.iconQuery.set('arrow');
    const suggestions: string[] = c.iconSuggestions();
    suggestions.forEach((s: string) => expect(s.toLowerCase()).toContain('arrow'));
  });

  it('iconSuggestions returns empty array when no match', () => {
    const { c } = create();
    c.iconQuery.set('zzz_no_match_xyz');
    expect(c.iconSuggestions()).toEqual([]);
  });

  it('iconMatchCount equals iconNames length when query is empty', () => {
    const { c } = create();
    c.iconQuery.set('');
    expect(c.iconMatchCount()).toBe(c.iconNames.length);
  });

  it('iconMatchCount counts filtered results', () => {
    const { c } = create();
    c.iconQuery.set('arrow');
    const count: number = c.iconMatchCount();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(c.iconNames.length);
  });

  it('onIconQueryChange updates iconQuery and icon', () => {
    const { c } = create();
    c.onIconQueryChange('trash_base');
    expect(c.iconQuery()).toBe('trash_base');
    expect(c.icon()).toBe('trash_base');
  });

  it('selectIcon sets icon, query and closes dropdown', () => {
    const { c } = create();
    c.iconInputFocused.set(true);
    c.selectIcon('settings_base');
    expect(c.icon()).toBe('settings_base');
    expect(c.iconQuery()).toBe('settings_base');
    expect(c.iconInputFocused()).toBe(false);
  });

  it('onIconInputFocus sets iconInputFocused to true', () => {
    const { c } = create();
    c.onIconInputFocus();
    expect(c.iconInputFocused()).toBe(true);
  });

  it('onIconInputBlur closes dropdown after delay', () => {
    jest.useFakeTimers();
    const { c } = create();
    c.iconInputFocused.set(true);
    c.onIconInputBlur();
    jest.runAllTimers();
    expect(c.iconInputFocused()).toBe(false);
    jest.useRealTimers();
  });

  it('preserveFocus calls preventDefault', () => {
    const { c } = create();
    const event = { preventDefault: jest.fn() } as any;
    c.preserveFocus(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
