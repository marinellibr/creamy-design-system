import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OverviewPageComponent } from './overview-page.component';
import { COMPONENTS } from '../../component-registry';

describe('OverviewPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewPageComponent],
    }).overrideComponent(OverviewPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(OverviewPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('readyItems contains only non-wip components', () => {
    const fixture = TestBed.createComponent(OverviewPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.readyItems.every((item: any) => !item.wip)).toBe(true);
  });

  it('ready equals readyItems.length', () => {
    const fixture = TestBed.createComponent(OverviewPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.ready).toBe(c.readyItems.length);
  });

  it('total equals COMPONENTS.length', () => {
    const fixture = TestBed.createComponent(OverviewPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.total).toBe(COMPONENTS.length);
  });

  it('wip equals total minus ready', () => {
    const fixture = TestBed.createComponent(OverviewPageComponent);
    const c = fixture.componentInstance as any;
    expect(c.wip).toBe(c.total - c.ready);
  });
});
