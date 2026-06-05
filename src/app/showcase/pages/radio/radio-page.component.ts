import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent, type RadioOption } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, RadioComponent, FormsModule],
  templateUrl: './radio-page.component.html',
  styleUrl: './radio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioPageComponent {
  protected readonly snippet = `<!-- Opções -->
const opcoes = [
  { label: 'Opção A', value: 'a' },
  { label: 'Opção B', value: 'b' },
];

<!-- Uso default (base cinza, variant azul) -->
<creamy-kit-radio [options]="opcoes" [(ngModel)]="selecionado" />

<!-- Cor customizada -->
<creamy-kit-radio [options]="opcoes" color="var(--primary-soft)" />

<!-- Desabilitado -->
<creamy-kit-radio [options]="opcoes" [disabled]="true" />`;

  protected readonly baseOptions: RadioOption[] = [
    { label: 'Opção A', value: 'a' },
    { label: 'Opção B', value: 'b' },
    { label: 'Opção C', value: 'c' },
  ];

  protected readonly selected = signal<string | null>(null);
  protected readonly selectedCustom = signal<string | null>(null);
}
