import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrandPageComponent } from './brand-page.component';

function create() {
  TestBed.overrideComponent(BrandPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(BrandPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('BrandPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandPageComponent],
    }).compileComponents();
  });

  afterEach(() => jest.useRealTimers());

  it('creates the component', () => {
    const { fixture } = create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('initializes signals with defaults', () => {
    const { c } = create();
    expect(c.brandQuery()).toBe('');
    expect(c.selectedBrand()).toBe('visa');
    expect(c.selectedBrandType()).toBe('square');
    expect(c.selectedBrandSize()).toBe('medium');
    expect(c.selectedBrandBackground()).toBe('#ffffff');
    expect(c.brandInputFocused()).toBe(false);
  });

  it('has readonly arrays with entries', () => {
    const { c } = create();
    expect(c.allBrands.length).toBeGreaterThan(0);
    expect(c.brandBackgroundSwatches.length).toBeGreaterThan(0);
    expect(c.brandSizePresets.length).toBeGreaterThan(0);
    expect(c.brandTypePresets.length).toBeGreaterThan(0);
  });

  it('brandTsSnippet is a non-empty string', () => {
    const { c } = create();
    expect(typeof c.brandTsSnippet).toBe('string');
    expect(c.brandTsSnippet.length).toBeGreaterThan(0);
  });

  it('brandSuggestions returns first 12 brands when query is empty', () => {
    const { c } = create();
    const suggestions = c.brandSuggestions();
    expect(suggestions.length).toBeLessThanOrEqual(12);
    expect(suggestions.length).toBeGreaterThan(0);
  });

  it('brandSuggestions filters by query', () => {
    const { c } = create();
    c.onBrandQueryChange('visa');
    const suggestions = c.brandSuggestions();
    expect(suggestions.every((s: string) => s.toLowerCase().includes('visa'))).toBe(true);
  });

  it('brandSuggestions returns empty when no match', () => {
    const { c } = create();
    c.onBrandQueryChange('zzznonexistent');
    expect(c.brandSuggestions()).toEqual([]);
  });

  it('brandMatchCount equals allBrands length when query empty', () => {
    const { c } = create();
    expect(c.brandMatchCount()).toBe(c.allBrands.length);
  });

  it('brandMatchCount filters correctly', () => {
    const { c } = create();
    c.onBrandQueryChange('visa');
    expect(c.brandMatchCount()).toBeGreaterThan(0);
    expect(c.brandMatchCount()).toBeLessThanOrEqual(c.allBrands.length);
  });

  it('brandHtmlSnippet for square type', () => {
    const { c } = create();
    c.selectBrandType('square');
    c.selectBrand('visa');
    c.selectBrandSize('large');
    expect(c.brandHtmlSnippet()).toContain('creamy-brand-square');
    expect(c.brandHtmlSnippet()).toContain('visa');
    expect(c.brandHtmlSnippet()).toContain('large');
  });

  it('brandHtmlSnippet for horizontal type', () => {
    const { c } = create();
    c.selectBrandType('horizontal');
    expect(c.brandHtmlSnippet()).toContain('creamy-brand-horizontal');
  });

  it('brandHtmlSnippet for cardholder type', () => {
    const { c } = create();
    c.selectBrandType('cardholder');
    expect(c.brandHtmlSnippet()).toContain('creamy-brand-cardholder');
    expect(c.brandHtmlSnippet()).not.toContain('size=');
  });

  it('selectBrand updates selectedBrand, query and closes dropdown', () => {
    const { c } = create();
    c.onBrandInputFocus();
    c.selectBrand('mastercard');
    expect(c.selectedBrand()).toBe('mastercard');
    expect(c.brandQuery()).toBe('mastercard');
    expect(c.brandInputFocused()).toBe(false);
  });

  it('selectBrandType updates selectedBrandType', () => {
    const { c } = create();
    c.selectBrandType('cardholder');
    expect(c.selectedBrandType()).toBe('cardholder');
  });

  it('selectBrandSize updates selectedBrandSize', () => {
    const { c } = create();
    c.selectBrandSize('small');
    expect(c.selectedBrandSize()).toBe('small');
  });

  it('selectBrandBackground updates selectedBrandBackground', () => {
    const { c } = create();
    c.selectBrandBackground('#000000');
    expect(c.selectedBrandBackground()).toBe('#000000');
  });

  it('onBrandInputFocus sets brandInputFocused to true', () => {
    const { c } = create();
    c.onBrandInputFocus();
    expect(c.brandInputFocused()).toBe(true);
  });

  it('onBrandInputBlur sets brandInputFocused to false after timeout', () => {
    jest.useFakeTimers();
    const { c } = create();
    c.onBrandInputFocus();
    expect(c.brandInputFocused()).toBe(true);
    c.onBrandInputBlur();
    expect(c.brandInputFocused()).toBe(true);
    jest.runAllTimers();
    expect(c.brandInputFocused()).toBe(false);
  });

  it('preserveFocus calls event.preventDefault', () => {
    const { c } = create();
    const event = { preventDefault: jest.fn() } as unknown as Event;
    c.preserveFocus(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
