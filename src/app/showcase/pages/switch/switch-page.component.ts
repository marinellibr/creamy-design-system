import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwitchComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-switch-page',
  standalone: true,
  imports: [PageHeaderComponent, SwitchComponent, FormsModule],
  templateUrl: './switch-page.component.html',
  styleUrl: './switch-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchPageComponent {
  protected readonly snippet = `<!-- Default (azul) -->
<creamy-kit-switch [(ngModel)]="ativo" />

<!-- Cor customizada -->
<creamy-kit-switch [(ngModel)]="feature" color="var(--feedbacks-success)" />`;

  protected readonly defaultState = signal(false);
  protected readonly successState = signal(false);
  protected readonly neutralState = signal(false);
  protected readonly warningState = signal(false);
}
