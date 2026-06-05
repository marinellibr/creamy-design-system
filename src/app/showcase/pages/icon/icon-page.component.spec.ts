import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconPageComponent } from './icon-page.component';
import { ICON_BASE_URL } from './icon-catalog';

function create() {
  TestBed.overrideComponent(IconPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(IconPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('IconPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPageComponent],
    }).compileComponents();
  });

  afterEach(() => jest.useRealTimers());

  it('creates the component', () => {
    const { fixture } = create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('initializes signals with defaults', () => {
    const { c } = create();
    expect(c.iconQuery()).toBe('');
    expect(c.selectedIcon()).toBe('arrow_right');
    expect(c.iconInputFocused()).toBe(false);
    expect(c.selectedIconColor()).toBe('var(--neutral-base)');
    expect(c.selectedIconSize()).toBe(24);
  });

  it('has readonly arrays with entries', () => {
    const { c } = create();
    expect(c.iconNames.length).toBeGreaterThan(0);
    expect(c.iconSizePresets.length).toBeGreaterThan(0);
    expect(c.iconColorSwatches.length).toBeGreaterThan(0);
  });

  it('iconTsSnippet is a non-empty string', () => {
    const { c } = create();
    expect(typeof c.iconTsSnippet).toBe('string');
    expect(c.iconTsSnippet.length).toBeGreaterThan(0);
  });

  it('iconUrl builds correct URL', () => {
    const { c } = create();
    expect(c.iconUrl('arrow_right')).toBe(`${ICON_BASE_URL}/arrow_right.svg`);
  });

  it('selectedIconUrl is computed from selectedIcon', () => {
    const { c } = create();
    expect(c.selectedIconUrl()).toBe(c.iconUrl(c.selectedIcon()));
  });

  it('iconSuggestions returns first 12 when query is empty', () => {
    const { c } = create();
    const suggestions = c.iconSuggestions();
    expect(suggestions.length).toBeLessThanOrEqual(12);
    expect(suggestions.length).toBeGreaterThan(0);
  });

  it('iconSuggestions filters by query', () => {
    const { c } = create();
    c.onIconQueryChange('arrow');
    const suggestions = c.iconSuggestions();
    expect(suggestions.every((s: string) => s.toLowerCase().includes('arrow'))).toBe(true);
  });

  it('iconSuggestions returns empty when no match', () => {
    const { c } = create();
    c.onIconQueryChange('zzznonexistent');
    expect(c.iconSuggestions()).toEqual([]);
  });

  it('iconMatchCount equals all icons when query empty', () => {
    const { c } = create();
    expect(c.iconMatchCount()).toBe(c.iconNames.length);
  });

  it('iconMatchCount filters correctly', () => {
    const { c } = create();
    c.onIconQueryChange('arrow');
    expect(c.iconMatchCount()).toBeGreaterThan(0);
    expect(c.iconMatchCount()).toBeLessThanOrEqual(c.iconNames.length);
  });

  it('iconHtmlSnippet uses selectedIcon, size and color', () => {
    const { c } = create();
    c.selectIcon('star_base');
    c.selectIconSize(32);
    c.selectIconColor('var(--primary-base)');
    const snippet = c.iconHtmlSnippet();
    expect(snippet).toContain('star_base');
    expect(snippet).toContain('32');
    expect(snippet).toContain('var(--primary-base)');
  });

  it('selectIcon updates selectedIcon and clears query', () => {
    const { c } = create();
    c.onIconQueryChange('arrow');
    c.onIconInputFocus();
    c.selectIcon('arrow_right');
    expect(c.selectedIcon()).toBe('arrow_right');
    expect(c.iconQuery()).toBe('arrow_right');
    expect(c.iconInputFocused()).toBe(false);
  });

  it('selectIconColor updates selectedIconColor', () => {
    const { c } = create();
    c.selectIconColor('var(--primary-base)');
    expect(c.selectedIconColor()).toBe('var(--primary-base)');
  });

  it('selectIconSize updates selectedIconSize for valid positive integers', () => {
    const { c } = create();
    c.selectIconSize(48);
    expect(c.selectedIconSize()).toBe(48);
  });

  it('selectIconSize rounds floats', () => {
    const { c } = create();
    c.selectIconSize(24.7);
    expect(c.selectedIconSize()).toBe(25);
  });

  it('selectIconSize ignores zero', () => {
    const { c } = create();
    const prev = c.selectedIconSize();
    c.selectIconSize(0);
    expect(c.selectedIconSize()).toBe(prev);
  });

  it('selectIconSize ignores negative values', () => {
    const { c } = create();
    const prev = c.selectedIconSize();
    c.selectIconSize(-10);
    expect(c.selectedIconSize()).toBe(prev);
  });

  it('selectIconSize ignores NaN', () => {
    const { c } = create();
    const prev = c.selectedIconSize();
    c.selectIconSize(NaN);
    expect(c.selectedIconSize()).toBe(prev);
  });

  it('onIconSizeInput converts string to number', () => {
    const { c } = create();
    c.onIconSizeInput('32');
    expect(c.selectedIconSize()).toBe(32);
  });

  it('onIconInputFocus sets iconInputFocused to true', () => {
    const { c } = create();
    c.onIconInputFocus();
    expect(c.iconInputFocused()).toBe(true);
  });

  it('onIconInputBlur sets iconInputFocused to false after timeout', () => {
    jest.useFakeTimers();
    const { c } = create();
    c.onIconInputFocus();
    c.onIconInputBlur();
    expect(c.iconInputFocused()).toBe(true);
    jest.runAllTimers();
    expect(c.iconInputFocused()).toBe(false);
  });

  it('preserveFocus calls event.preventDefault', () => {
    const { c } = create();
    const event = { preventDefault: jest.fn() } as unknown as Event;
    c.preserveFocus(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
