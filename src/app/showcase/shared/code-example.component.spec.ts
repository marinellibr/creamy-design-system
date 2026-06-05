import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CodeExampleComponent } from './code-example.component';

describe('CodeExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExampleComponent],
    })
      .overrideComponent(CodeExampleComponent, {
        set: { schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(CodeExampleComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('code input defaults to empty string', () => {
    const fixture = TestBed.createComponent(CodeExampleComponent);
    expect(fixture.componentInstance.code()).toBe('');
  });

  it('code input reflects set value', () => {
    const fixture = TestBed.createComponent(CodeExampleComponent);
    fixture.componentRef.setInput('code', '<creamy-kit-button />');
    expect(fixture.componentInstance.code()).toBe('<creamy-kit-button />');
  });
});
