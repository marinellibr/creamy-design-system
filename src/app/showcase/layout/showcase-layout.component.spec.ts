import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ShowcaseLayoutComponent } from './showcase-layout.component';

function create() {
  TestBed.overrideComponent(ShowcaseLayoutComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(ShowcaseLayoutComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('ShowcaseLayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseLayoutComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const { fixture } = create();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('filter starts empty and sidebarOpen starts true', () => {
    const { c } = create();
    expect(c.filter()).toBe('');
    expect(c.sidebarOpen()).toBe(true);
  });

  it('readyCount and totalCount are positive integers', () => {
    const { c } = create();
    expect(c.readyCount).toBeGreaterThan(0);
    expect(c.totalCount).toBeGreaterThan(0);
    expect(c.readyCount).toBeLessThanOrEqual(c.totalCount);
  });

  it('onFilter updates the filter signal', () => {
    const { c } = create();
    c.onFilter('button');
    expect(c.filter()).toBe('button');
  });

  it('onFilterInput extracts value from event and updates filter', () => {
    const { c } = create();
    const event = { target: { value: 'input' } } as unknown as Event;
    c.onFilterInput(event);
    expect(c.filter()).toBe('input');
  });

  it('toggleSidebar flips sidebarOpen', () => {
    const { c } = create();
    c.toggleSidebar();
    expect(c.sidebarOpen()).toBe(false);
    c.toggleSidebar();
    expect(c.sidebarOpen()).toBe(true);
  });

  it('closeSidebar sets sidebarOpen to false', () => {
    const { c } = create();
    c.closeSidebar();
    expect(c.sidebarOpen()).toBe(false);
  });

  it('groups returns all groups with no filter', () => {
    const { c } = create();
    const groups = c.groups();
    expect(groups.length).toBeGreaterThan(0);
    groups.forEach((g: any) => {
      expect(g.items.length).toBeGreaterThan(0);
    });
  });

  it('groups filters by component label', () => {
    const { c } = create();
    c.onFilter('Button');
    const groups = c.groups();
    const allItems = groups.flatMap((g: any) => g.items);
    expect(allItems.some((i: any) => i.label.toLowerCase().includes('button'))).toBe(true);
  });

  it('groups filters by component selector', () => {
    const { c } = create();
    c.onFilter('kit-loading');
    const groups = c.groups();
    const allItems = groups.flatMap((g: any) => g.items);
    expect(allItems.some((i: any) => i.selector.toLowerCase().includes('kit-loading'))).toBe(true);
  });

  it('groups returns empty array when filter matches nothing', () => {
    const { c } = create();
    c.onFilter('zzznonexistentzzz');
    expect(c.groups()).toEqual([]);
  });

  it('groups trims and lowercases the filter query', () => {
    const { c } = create();
    c.onFilter('  BUTTON  ');
    const groups = c.groups();
    const allItems = groups.flatMap((g: any) => g.items);
    expect(allItems.some((i: any) => i.label.toLowerCase().includes('button'))).toBe(true);
  });
});
