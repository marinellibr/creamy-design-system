/**
 * Registro único de todos os componentes do Creamy Kit.
 *
 * É a fonte da verdade para:
 *  - a navegação lateral (sidebar) do showcase;
 *  - a geração das rotas (`showcase.routes.ts`).
 *
 * `wip: true` → ainda **sem página de demonstração** implementada. A sidebar
 * marca com um selo "WIP" e a rota cai numa página placeholder.
 */
export interface ComponentEntry {
  /** Slug da rota: /components/<slug>. */
  slug: string;
  /** Nome exibido na sidebar e no título da página. */
  label: string;
  /** Seletor Angular (ex.: `kit-button`). `—` quando não houver um único. */
  selector: string;
  /** Grupo na sidebar. */
  group: string;
  /** `true` quando a página de demonstração ainda não foi implementada. */
  wip?: boolean;
}

/** Ordem dos grupos na sidebar. */
export const GROUP_ORDER: readonly string[] = [
  'Geral',
  'Formulários',
  'Feedback',
  'Navegação',
  'Exibição de dados',
  'Overlays',
  'Tipografia',
  'Padrões',
];

export const COMPONENTS: readonly ComponentEntry[] = [
  // ----------------------------- Geral -----------------------------
  { slug: 'button', label: 'Button', selector: 'kit-button', group: 'Geral' },
  { slug: 'card', label: 'Card', selector: 'kit-card', group: 'Geral' },
  { slug: 'divider', label: 'Divider', selector: 'kit-divider', group: 'Geral' },
  { slug: 'icon', label: 'Icon', selector: 'kit-icon', group: 'Geral' },
  { slug: 'brand', label: 'Brand', selector: 'creamy-brand-square · -horizontal · -cardholder', group: 'Geral' },

  // -------------------------- Formulários --------------------------
  { slug: 'input', label: 'Input', selector: 'kit-input', group: 'Formulários' },
  { slug: 'password', label: 'Password', selector: 'kit-password', group: 'Formulários' },
  { slug: 'textbox', label: 'Textbox', selector: 'kit-textbox', group: 'Formulários' },
  { slug: 'dropdown', label: 'Dropdown', selector: 'kit-dropdown', group: 'Formulários' },
  { slug: 'multidropdown', label: 'MultiDropdown', selector: 'kit-multidropdown', group: 'Formulários' },
  { slug: 'search', label: 'Search', selector: 'kit-search', group: 'Formulários' },
  { slug: 'checkbox', label: 'Checkbox', selector: 'kit-checkbox', group: 'Formulários' },
  { slug: 'code', label: 'Code', selector: 'kit-code', group: 'Formulários' },
  { slug: 'calendar', label: 'Calendar', selector: 'kit-calendar', group: 'Formulários' },
  { slug: 'date-picker', label: 'DatePicker', selector: 'kit-date-picker', group: 'Formulários' },
  { slug: 'radio', label: 'Radio', selector: 'kit-radio', group: 'Formulários', wip: true },
  { slug: 'switch', label: 'Switch', selector: 'kit-switch', group: 'Formulários', wip: true },

  // ----------------------------- Feedback -----------------------------
  { slug: 'alert', label: 'Alert', selector: 'kit-alert · kit-snackbar', group: 'Feedback' },
  { slug: 'banner', label: 'Banner', selector: 'kit-banner · kit-banner-tag · kit-banner-card', group: 'Feedback' },
  { slug: 'loading', label: 'Loading', selector: 'kit-loading', group: 'Feedback' },
  { slug: 'progress', label: 'Progress', selector: 'kit-progress', group: 'Feedback', wip: true },
  { slug: 'tooltip', label: 'Tooltip', selector: 'kit-tooltip', group: 'Feedback', wip: true },

  // ---------------------------- Navegação ----------------------------
  { slug: 'breadcrumb', label: 'Breadcrumb', selector: 'kit-breadcrumb', group: 'Navegação' },
  { slug: 'header', label: 'Header', selector: 'kit-header-search · …', group: 'Navegação' },
  { slug: 'pagination', label: 'Pagination', selector: 'kit-pagination', group: 'Navegação', wip: true },
  { slug: 'tab-bar', label: 'TabBar', selector: 'kit-tab-bar', group: 'Navegação', wip: true },
  { slug: 'tabs', label: 'Tabs', selector: 'kit-tabs', group: 'Navegação', wip: true },

  // ------------------------ Exibição de dados ------------------------
  { slug: 'avatar', label: 'Avatar', selector: 'kit-avatar-icon · -text · -image', group: 'Exibição de dados' },
  { slug: 'image', label: 'Image', selector: 'kit-image', group: 'Exibição de dados' },
  { slug: 'list', label: 'List', selector: 'kit-list', group: 'Exibição de dados', wip: true },
  { slug: 'product-card', label: 'ProductCard', selector: 'kit-product-card', group: 'Exibição de dados', wip: true },
  { slug: 'shortcut', label: 'Shortcut', selector: 'kit-shortcut', group: 'Exibição de dados', wip: true },
  { slug: 'tag', label: 'Tag', selector: 'kit-tag', group: 'Exibição de dados', wip: true },

  // ----------------------------- Overlays -----------------------------
  { slug: 'modal', label: 'Modal', selector: 'kit-modal', group: 'Overlays', wip: true },
  { slug: 'sheets', label: 'Sheets', selector: 'kit-sheets', group: 'Overlays', wip: true },

  // ---------------------------- Tipografia ----------------------------
  { slug: 'text-link', label: 'TextLink', selector: 'kit-text-link', group: 'Tipografia', wip: true },

  // ----------------------------- Padrões -----------------------------
  { slug: 'on-brand', label: 'Inputs · on-brand', selector: 'variant="on-brand"', group: 'Padrões' },
];
