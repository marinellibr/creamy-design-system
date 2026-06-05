import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SwitchPageComponent } from './switch-page.component';

function create() {
  TestBed.overrideComponent(SwitchPageComponent, {
    set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(SwitchPageComponent);
  fixture.detectChanges();
  return { fixture, c: fixture.componentInstance as any };
}

describe('SwitchPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchPageComponent],
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

  it('all state signals start as false', () => {
    const { c } = create();
    expect(c.defaultState()).toBe(false);
    expect(c.successState()).toBe(false);
    expect(c.neutralState()).toBe(false);
    expect(c.warningState()).toBe(false);
  });

  it('state signals can be set to true', () => {
    const { c } = create();
    c.defaultState.set(true);
    c.successState.set(true);
    c.neutralState.set(true);
    c.warningState.set(true);
    expect(c.defaultState()).toBe(true);
    expect(c.successState()).toBe(true);
    expect(c.neutralState()).toBe(true);
    expect(c.warningState()).toBe(true);
  });
});
