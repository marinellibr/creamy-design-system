import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipComponent, SwitchComponent, IconComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';
import { ICON_NAMES } from '../icon/icon-catalog';

@Component({
  selector: 'app-tooltip-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, TooltipComponent, SwitchComponent, IconComponent, FormsModule],
  templateUrl: './tooltip-page.component.html',
  styleUrl: './tooltip-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipPageComponent {
  protected readonly snippet = `<creamy-kit-tooltip text="Copiar" />
<creamy-kit-tooltip text="Excluir" icon="trash_base" />
<creamy-kit-tooltip text="Configurações" icon="settings_base" variant="contrast" />`;

  protected readonly text = signal('Copiar para área de transferência');
  protected readonly icon = signal('copy_base');
  protected readonly ativo = signal(false);

  protected readonly variant = computed(() =>
    this.ativo() ? ('contrast' as const) : ('default' as const)
  );

  readonly iconNames = ICON_NAMES;
  readonly iconQuery = signal('copy_base');
  readonly iconInputFocused = signal(false);

  readonly iconSuggestions = computed<string[]>(() => {
    const q = this.iconQuery().trim().toLowerCase();
    if (!q) return this.iconNames.slice(0, 12);
    return this.iconNames.filter((n) => n.toLowerCase().includes(q)).slice(0, 12);
  });

  readonly iconMatchCount = computed<number>(() => {
    const q = this.iconQuery().trim().toLowerCase();
    if (!q) return this.iconNames.length;
    return this.iconNames.filter((n) => n.toLowerCase().includes(q)).length;
  });

  onIconQueryChange(value: string): void {
    this.iconQuery.set(value);
    this.icon.set(value);
  }

  selectIcon(name: string): void {
    this.icon.set(name);
    this.iconQuery.set(name);
    this.iconInputFocused.set(false);
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
