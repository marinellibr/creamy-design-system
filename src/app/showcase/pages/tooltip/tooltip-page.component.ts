import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-tooltip-page',
  standalone: true,
  imports: [PageHeaderComponent, TooltipComponent, FormsModule],
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
  protected readonly variant = signal<'default' | 'contrast'>('default');
  protected readonly showDefault = signal(true);
  protected readonly showContrast = signal(true);
}
