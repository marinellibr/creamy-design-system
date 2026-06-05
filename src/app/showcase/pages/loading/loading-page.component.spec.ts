import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoadingPageComponent } from './loading-page.component';

function create() {
  TestBed.overrideComponent(LoadingPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(LoadingPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('LoadingPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingPageComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const { fixture } = create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has a snippet string', () => {
    const { c } = create();
    expect(typeof c.snippet).toBe('string');
    expect(c.snippet.length).toBeGreaterThan(0);
  });

  it('initializes signals with default values', () => {
    const { c } = create();
    expect(c.showIcon()).toBe(true);
    expect(c.iconName()).toBe('circle_variant');
    expect(c.size()).toBe('large');
    expect(c.variant()).toBe('primary');
    expect(c.searchQuery()).toBe('');
  });

  it('icons array has entries', () => {
    const { c } = create();
    expect(c.icons.length).toBeGreaterThan(0);
  });

  it('filteredIcons returns all when query is empty', () => {
    const { c } = create();
    expect(c.filteredIcons()).toEqual(c.icons);
  });

  it('filteredIcons filters by query', () => {
    const { c } = create();
    c.updateSearch('lock');
    const result = c.filteredIcons();
    expect(result.every((name: string) => name.includes('lock'))).toBe(true);
  });

  it('filteredIcons returns empty when no match', () => {
    const { c } = create();
    c.updateSearch('zzznonexistentzzzz');
    expect(c.filteredIcons()).toEqual([]);
  });

  it('updateSearch updates searchQuery', () => {
    const { c } = create();
    c.updateSearch('search_variant');
    expect(c.searchQuery()).toBe('search_variant');
  });

  it('selectIcon updates iconName and clears searchQuery', () => {
    const { c } = create();
    c.updateSearch('lock');
    c.selectIcon('lock_base');
    expect(c.iconName()).toBe('lock_base');
    expect(c.searchQuery()).toBe('');
  });
});
