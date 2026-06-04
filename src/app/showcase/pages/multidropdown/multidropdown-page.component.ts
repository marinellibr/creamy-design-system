import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiDropdownComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-multidropdown-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, CodeExampleComponent, MultiDropdownComponent],
  templateUrl: './multidropdown-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultidropdownPageComponent {
  readonly countryOptions = [
    { label: 'Brasil', value: 'br' },
    { label: 'Portugal', value: 'pt' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Japão', value: 'jp' },
    { label: 'Alemanha', value: 'de' },
  ];

  protected readonly snippet = `<creamy-kit-multidropdown
  title="Tags"
  placeholder="Selecione uma ou mais"
  [options]="options"
  [(ngModel)]="tags" />`;
}
