import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-checkbox-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, CodeExampleComponent, CheckboxComponent],
  templateUrl: './checkbox-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPageComponent {
  checkedItems: string[] = ['terms'];
  readonly checkboxOptions = [
    { label: 'Aceito os termos de uso', value: 'terms' },
    { label: 'Receber novidades por e-mail', value: 'news' },
    { label: 'Lembrar deste dispositivo', value: 'remember' },
  ];

  protected readonly snippet = `options = [
  { label: 'Aceito os termos de uso', value: 'terms' },
  { label: 'Receber novidades', value: 'news' },
];

<creamy-kit-checkbox [options]="options" [(ngModel)]="marcados" />

<!-- sem os dividers -->
<creamy-kit-checkbox [options]="options" [divider]="false" [(ngModel)]="marcados" />`;
}
