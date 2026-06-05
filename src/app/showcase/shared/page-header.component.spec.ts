import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponent],
    })
      .overrideComponent(PageHeaderComponent, {
        set: { schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('inputs default to empty strings', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const c = fixture.componentInstance;
    expect(c.label()).toBe('');
    expect(c.selector()).toBe('');
    expect(c.code()).toBe('');
  });

  it('inputs reflect set values', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.componentRef.setInput('label', 'Button');
    fixture.componentRef.setInput('selector', 'kit-button');
    fixture.componentRef.setInput('code', '<kit-button />');
    expect(fixture.componentInstance.label()).toBe('Button');
    expect(fixture.componentInstance.selector()).toBe('kit-button');
    expect(fixture.componentInstance.code()).toBe('<kit-button />');
  });

  it('scrollToCode does not throw when element is absent', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    expect(() => fixture.componentInstance.scrollToCode()).not.toThrow();
  });

  it('scrollToCode calls scrollIntoView when element is present', () => {
    const el = document.createElement('div');
    el.id = 'ds-code-example';
    el.scrollIntoView = jest.fn();
    document.body.appendChild(el);

    const fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.componentInstance.scrollToCode();

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    document.body.removeChild(el);
  });
});
