import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-dropdown-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, CodeExampleComponent, DropdownComponent],
  templateUrl: './dropdown-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownPageComponent {
  readonly countryOptions = [
    { label: 'Brasil', value: 'br' },
    { label: 'Portugal', value: 'pt' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Japão', value: 'jp' },
    { label: 'Alemanha', value: 'de' },
  ];

  protected readonly snippet = `<creamy-kit-dropdown
  title="País"
  placeholder="Selecione um país"
  [options]="options"
  [(ngModel)]="pais" />`;
}
