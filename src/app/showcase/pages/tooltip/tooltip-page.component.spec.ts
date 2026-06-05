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
});
