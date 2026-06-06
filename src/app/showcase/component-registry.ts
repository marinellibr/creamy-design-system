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
  /** Seletor Angular (ex.: `creamy-kit-button`). `—` quando não houver um único. */
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
  { slug: 'button', label: 'Button', selector: 'creamy-kit-button', group: 'Geral' },
  { slug: 'card', label: 'Card', selector: 'creamy-kit-card', group: 'Geral' },
  { slug: 'divider', label: 'Divider', selector: 'creamy-kit-divider', group: 'Geral' },
  { slug: 'icon', label: 'Icon', selector: 'creamy-kit-icon', group: 'Geral' },
  {
    slug: 'brand',
    label: 'Brand',
    selector: 'creamy-brand-*',
    group: 'Geral',
  },

  // -------------------------- Formulários --------------------------
  { slug: 'input', label: 'Input', selector: 'creamy-kit-input', group: 'Formulários' },
  { slug: 'password', label: 'Password', selector: 'creamy-kit-password', group: 'Formulários' },
  { slug: 'textbox', label: 'Textbox', selector: 'creamy-kit-textbox', group: 'Formulários' },
  { slug: 'dropdown', label: 'Dropdown', selector: 'creamy-kit-dropdown', group: 'Formulários' },
  {
    slug: 'multidropdown',
    label: 'MultiDropdown',
    selector: 'creamy-kit-multidropdown',
    group: 'Formulários',
  },
  { slug: 'search', label: 'Search', selector: 'creamy-kit-search', group: 'Formulários' },
  { slug: 'checkbox', label: 'Checkbox', selector: 'creamy-kit-checkbox', group: 'Formulários' },
  { slug: 'code', label: 'Code', selector: 'creamy-kit-code', group: 'Formulários' },
  { slug: 'calendar', label: 'Calendar', selector: 'creamy-kit-calendar', group: 'Formulários' },
  {
    slug: 'date-picker',
    label: 'DatePicker',
    selector: 'creamy-kit-date-picker',
    group: 'Formulários',
  },
  { slug: 'radio', label: 'Radio', selector: 'creamy-kit-radio', group: 'Formulários' },
  { slug: 'switch', label: 'Switch', selector: 'creamy-kit-switch', group: 'Formulários' },

  // ----------------------------- Feedback -----------------------------
  {
    slug: 'alert',
    label: 'Alert',
    selector: 'creamy-kit-alert · creamy-kit-snackbar',
    group: 'Feedback',
  },
  {
    slug: 'banner',
    label: 'Banner',
    selector: 'creamy-kit-banner · creamy-kit-banner-tag · creamy-kit-banner-card',
    group: 'Feedback',
  },
  { slug: 'loading', label: 'Loading', selector: 'creamy-kit-loading', group: 'Feedback' },
  {
    slug: 'progress',
    label: 'Progress',
    selector: 'creamy-kit-progress',
    group: 'Feedback',
    wip: true,
  },
  { slug: 'tooltip', label: 'Tooltip', selector: 'creamy-kit-tooltip', group: 'Feedback' },

  // ---------------------------- Navegação ----------------------------
  {
    slug: 'breadcrumb',
    label: 'Breadcrumb',
    selector: 'creamy-kit-breadcrumb',
    group: 'Navegação',
  },
  {
    slug: 'header',
    label: 'Header',
    selector:
      'creamy-kit-header-search · creamy-kit-header-title · creamy-kit-header-large-title · creamy-kit-header-profile',
    group: 'Navegação',
  },
  {
    slug: 'pagination',
    label: 'Pagination',
    selector: 'creamy-kit-pagination',
    group: 'Navegação',
    wip: true,
  },
  {
    slug: 'tab-bar',
    label: 'TabBar',
    selector: 'creamy-kit-tab-bar · creamy-kit-tab-bar-item',
    group: 'Navegação',
  },
  { slug: 'tabs', label: 'Tabs', selector: 'creamy-kit-tabs', group: 'Navegação', wip: true },

  // ------------------------ Exibição de dados ------------------------
  {
    slug: 'avatar',
    label: 'Avatar',
    selector: 'creamy-kit-avatar-icon · creamy-kit-avatar-text · creamy-kit-avatar-image',
    group: 'Exibição de dados',
  },
  { slug: 'image', label: 'Image', selector: 'creamy-kit-image', group: 'Exibição de dados' },
  {
    slug: 'list',
    label: 'List',
    selector: 'creamy-kit-list',
    group: 'Exibição de dados',
    wip: true,
  },
  {
    slug: 'product-card',
    label: 'ProductCard',
    selector: 'creamy-kit-product-card',
    group: 'Exibição de dados',
    wip: true,
  },
  {
    slug: 'shortcut',
    label: 'Shortcut',
    selector: 'creamy-kit-shortcut',
    group: 'Exibição de dados',
    wip: true,
  },
  {
    slug: 'tag',
    label: 'Tag',
    selector: 'creamy-kit-tag',
    group: 'Exibição de dados',
    wip: true,
  },

  // ----------------------------- Overlays -----------------------------
  { slug: 'modal', label: 'Modal', selector: 'creamy-kit-modal', group: 'Overlays', wip: true },
  {
    slug: 'sheets',
    label: 'Sheets',
    selector: 'creamy-kit-sheets',
    group: 'Overlays',
    wip: true,
  },

  // ---------------------------- Tipografia ----------------------------
  { slug: 'text', label: 'Text', selector: 'creamy-kit-text', group: 'Tipografia' },
  {
    slug: 'text-link',
    label: 'TextLink',
    selector: 'creamy-kit-text-link',
    group: 'Tipografia',
    wip: true,
  },

  // ----------------------------- Padrões -----------------------------
  {
    slug: 'on-brand',
    label: 'Inputs · on-brand',
    selector: 'variant="on-brand"',
    group: 'Padrões',
  },
];
