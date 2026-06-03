import { Routes } from '@angular/router';
import { COMPONENTS } from './component-registry';
import { ShowcaseLayoutComponent } from './layout/showcase-layout.component';
import { WipPageComponent } from './pages/wip/wip-page.component';

/**
 * Mapa slug → carregador da página (lazy) para os componentes já
 * implementados. Quem não estiver aqui cai na página WIP.
 */
const READY_PAGES: Record<string, () => Promise<unknown>> = {
  button: () => import('./pages/button/button-page.component').then((m) => m.ButtonPageComponent),
  card: () => import('./pages/card/card-page.component').then((m) => m.CardPageComponent),
  divider: () => import('./pages/divider/divider-page.component').then((m) => m.DividerPageComponent),
  icon: () => import('./pages/icon/icon-page.component').then((m) => m.IconPageComponent),
  input: () => import('./pages/input/input-page.component').then((m) => m.InputPageComponent),
  password: () => import('./pages/password/password-page.component').then((m) => m.PasswordPageComponent),
  textbox: () => import('./pages/textbox/textbox-page.component').then((m) => m.TextboxPageComponent),
  dropdown: () => import('./pages/dropdown/dropdown-page.component').then((m) => m.DropdownPageComponent),
  multidropdown: () => import('./pages/multidropdown/multidropdown-page.component').then((m) => m.MultidropdownPageComponent),
  search: () => import('./pages/search/search-page.component').then((m) => m.SearchPageComponent),
  checkbox: () => import('./pages/checkbox/checkbox-page.component').then((m) => m.CheckboxPageComponent),
  code: () => import('./pages/code/code-page.component').then((m) => m.CodePageComponent),
  calendar: () => import('./pages/calendar/calendar-page.component').then((m) => m.CalendarPageComponent),
  'date-picker': () => import('./pages/date-picker/date-picker-page.component').then((m) => m.DatePickerPageComponent),
  alert: () => import('./pages/alert/alert-page.component').then((m) => m.AlertPageComponent),
  banner: () => import('./pages/banner/banner-page.component').then((m) => m.BannerPageComponent),
  breadcrumb: () => import('./pages/breadcrumb/breadcrumb-page.component').then((m) => m.BreadcrumbPageComponent),
  header: () => import('./pages/header/header-page.component').then((m) => m.HeaderPageComponent),
  avatar: () => import('./pages/avatar/avatar-page.component').then((m) => m.AvatarPageComponent),
  image: () => import('./pages/image/image-page.component').then((m) => m.ImagePageComponent),
  'on-brand': () => import('./pages/on-brand/on-brand-page.component').then((m) => m.OnBrandPageComponent),
  'brand': () => import('./pages/brand/brand-page.component').then((m) => m.BrandPageComponent),
  'loading': () => import('./pages/loading/loading-page.component').then((m) => m.LoadingPageComponent),
};

/** Rotas-filhas: uma por componente do registro. */
const componentRoutes: Routes = COMPONENTS.map((entry) => {
  const load = READY_PAGES[entry.slug];
  if (load && !entry.wip) {
    return {
      path: `components/${entry.slug}`,
      loadComponent: load as () => Promise<any>,
    };
  }
  // Sem página implementada → placeholder WIP.
  return {
    path: `components/${entry.slug}`,
    component: WipPageComponent,
    data: { label: entry.label, selector: entry.selector },
  };
});

export const showcaseRoutes: Routes = [
  {
    path: '',
    component: ShowcaseLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/overview/overview-page.component').then(
            (m) => m.OverviewPageComponent,
          ),
      },
      ...componentRoutes,
      { path: '**', redirectTo: '' },
    ],
  },
];
