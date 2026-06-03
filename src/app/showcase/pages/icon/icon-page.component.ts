import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { IconComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ICON_BASE_URL, ICON_NAMES } from './icon-catalog';

@Component({
  selector: 'app-icon-page',
  standalone: true,
  imports: [PageHeaderComponent, IconComponent],
  templateUrl: './icon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPageComponent {
  /** Catálogo completo (do creamy-kit-resources). */
  readonly iconNames = ICON_NAMES;

  /** Termo digitado no autocomplete. */
  readonly iconQuery = signal('');

  /** Ícone atualmente em preview. */
  readonly selectedIcon = signal<string>('arrow_right');

  /** Foco do input — controla a visibilidade do dropdown de sugestões. */
  readonly iconInputFocused = signal(false);

  /** Cor aplicada ao ícone em preview. Usa CSS vars do design system. */
  readonly selectedIconColor = signal<string>('var(--neutral-base)');

  /** Tamanho do ícone em pixels (default: medium). */
  readonly selectedIconSize = signal<number>(24);

  /** Presets de tamanho. */
  readonly iconSizePresets: { label: string; value: number }[] = [
    { label: 'Small', value: 16 },
    { label: 'Medium', value: 24 },
    { label: 'Large', value: 32 },
  ];

  /** Paleta com as cores principais do Creamy Kit (tokens do design system). */
  readonly iconColorSwatches: { label: string; value: string }[] = [
    { label: 'Neutral', value: 'var(--neutral-base)' },
    { label: 'Primary', value: 'var(--primary-base)' },
    { label: 'Primary variant', value: 'var(--primary-variant)' },
    { label: 'Secondary', value: 'var(--secondary-base)' },
    { label: 'Secondary variant', value: 'var(--secondary-variant)' },
    { label: 'Information', value: 'var(--feedbacks-information)' },
    { label: 'Success', value: 'var(--feedbacks-success-variant-2)' },
    { label: 'Alert', value: 'var(--feedbacks-alert-variant-2)' },
    { label: 'Error', value: 'var(--feedbacks-error)' },
  ];

  /** Sugestões filtradas pelo termo digitado (até 12 itens). */
  readonly iconSuggestions = computed<string[]>(() => {
    const q = this.iconQuery().trim().toLowerCase();
    if (!q) return this.iconNames.slice(0, 12);
    return this.iconNames.filter((n) => n.toLowerCase().includes(q)).slice(0, 12);
  });

  /** URL raw do ícone em preview. */
  readonly selectedIconUrl = computed(() => this.iconUrl(this.selectedIcon()));

  /** Total de matches reais (não só os 12 mostrados). */
  readonly iconMatchCount = computed<number>(() => {
    const q = this.iconQuery().trim().toLowerCase();
    if (!q) return this.iconNames.length;
    return this.iconNames.filter((n) => n.toLowerCase().includes(q)).length;
  });

  /** Snippet HTML do consumidor — passa nome, tamanho e cor via inputs. */
  readonly iconHtmlSnippet = computed(() => {
    const name = this.selectedIcon();
    const size = this.selectedIconSize();
    const color = this.selectedIconColor();
    return `<creamy-kit-icon name="${name}" [size]="${size}" color="${color}" />`;
  });

  /** Snippet TypeScript — como importar o componente standalone. */
  readonly iconTsSnippet = `import { IconComponent } from 'creamy-kit';

@Component({
  standalone: true,
  imports: [IconComponent],
  // ...
})`;

  iconUrl(name: string): string {
    return `${ICON_BASE_URL}/${name}.svg`;
  }

  onIconQueryChange(value: string): void {
    this.iconQuery.set(value);
  }

  selectIcon(name: string): void {
    this.selectedIcon.set(name);
    this.iconQuery.set(name);
    this.iconInputFocused.set(false);
  }

  selectIconColor(value: string): void {
    this.selectedIconColor.set(value);
  }

  selectIconSize(value: number): void {
    if (Number.isFinite(value) && value > 0) {
      this.selectedIconSize.set(Math.round(value));
    }
  }

  onIconSizeInput(value: string): void {
    this.selectIconSize(Number(value));
  }

  preserveFocus(event: Event): void {
    event.preventDefault();
  }

  onIconInputFocus(): void {
    this.iconInputFocused.set(true);
  }

  onIconInputBlur(): void {
    setTimeout(() => this.iconInputFocused.set(false), 120);
  }
}
