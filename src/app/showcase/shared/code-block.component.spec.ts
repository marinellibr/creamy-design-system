import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CodeBlockComponent } from './code-block.component';

function createComponent(startOpen = false) {
  TestBed.overrideComponent(CodeBlockComponent, {
    set: { schemas: [NO_ERRORS_SCHEMA] },
  });
  const fixture = TestBed.createComponent(CodeBlockComponent);
  fixture.componentRef.setInput('startOpen', startOpen);
  fixture.detectChanges();
  return fixture;
}

describe('CodeBlockComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBlockComponent],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it.each([[false], [true]])('open initialises to startOpen=%s', (startOpen: boolean) => {
    const fixture = createComponent(startOpen);
    expect((fixture.componentInstance as any).open()).toBe(startOpen);
  });

  it('toggle switches open from false to true', () => {
    const fixture = createComponent(false);
    const c = fixture.componentInstance as any;
    c.toggle();
    expect(c.open()).toBe(true);
  });

  it('toggle switches open from true to false', () => {
    const fixture = createComponent(true);
    const c = fixture.componentInstance as any;
    c.toggle();
    expect(c.open()).toBe(false);
  });

  it('code input defaults to empty string', () => {
    const fixture = createComponent();
    expect(fixture.componentInstance.code()).toBe('');
  });

  it('code input reflects set value', () => {
    const fixture = createComponent();
    fixture.componentRef.setInput('code', 'const x = 1;');
    expect(fixture.componentInstance.code()).toBe('const x = 1;');
  });
});
