import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TabBarPageComponent } from './tab-bar-page.component';

function create() {
  TestBed.overrideComponent(TabBarPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(TabBarPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('TabBarPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarPageComponent],
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

  it('selected starts as null', () => {
    const { c } = create();
    expect(c.selected()).toBeNull();
  });

  it('selected signal can be set', () => {
    const { c } = create();
    c.selected.set('home');
    expect(c.selected()).toBe('home');
  });
});
