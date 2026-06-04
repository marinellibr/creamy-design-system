import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipComponent, SwitchComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-tooltip-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, TooltipComponent, SwitchComponent, FormsModule],
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
}
