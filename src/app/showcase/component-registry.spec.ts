import { COMPONENTS, GROUP_ORDER } from './component-registry';

describe('component-registry', () => {
  it('GROUP_ORDER is non-empty', () => {
    expect(GROUP_ORDER.length).toBeGreaterThan(0);
  });

  it('COMPONENTS is non-empty', () => {
    expect(COMPONENTS.length).toBeGreaterThan(0);
  });

  it('every component has slug, label, selector and group', () => {
    for (const c of COMPONENTS) {
      expect(typeof c.slug).toBe('string');
      expect(typeof c.label).toBe('string');
      expect(typeof c.selector).toBe('string');
      expect(typeof c.group).toBe('string');
    }
  });

  it('all groups in COMPONENTS appear in GROUP_ORDER', () => {
    const groups = new Set(COMPONENTS.map((c) => c.group));
    for (const g of groups) {
      expect(GROUP_ORDER).toContain(g);
    }
  });

  it('wip field is boolean when present', () => {
    const withWip = COMPONENTS.filter((c) => 'wip' in c);
    for (const c of withWip) {
      expect(typeof c.wip).toBe('boolean');
    }
  });
});
