import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { WipPageComponent } from './wip-page.component';

describe('WipPageComponent', () => {
  function setup(routeData = { label: 'Test', selector: 'kit-test' }) {
    TestBed.overrideComponent(WipPageComponent, {
      set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
    });
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: { data: of(routeData) },
    });
    const fixture = TestBed.createComponent(WipPageComponent);
    fixture.detectChanges();
    return { fixture, c: fixture.componentInstance as any };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WipPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ label: 'Test', selector: 'kit-test' }) },
        },
      ],
    }).compileComponents();
  });

  it('creates the component', () => {
    const { fixture } = setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('data signal contains the route data', () => {
    const { c } = setup({ label: 'Modal', selector: 'kit-modal' });
    expect(c.data()).toEqual({ label: 'Modal', selector: 'kit-modal' });
  });

  it('data signal handles empty route data', () => {
    const { c } = setup({});
    expect(c.data()).toEqual({});
  });
});
