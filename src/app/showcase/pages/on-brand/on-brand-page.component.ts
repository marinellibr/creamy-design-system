import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DropdownComponent,
  PasswordComponent,
  SearchComponent,
  TextboxComponent,
} from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-on-brand-page',
  standalone: true,
  imports: [
    FormsModule,
    PageHeaderComponent,
    DropdownComponent,
    PasswordComponent,
    SearchComponent,
    TextboxComponent,
  ],
  templateUrl: './on-brand-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnBrandPageComponent {
  readonly countryOptions = [
    { label: 'Brasil', value: 'br' },
    { label: 'Portugal', value: 'pt' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Japão', value: 'jp' },
    { label: 'Alemanha', value: 'de' },
  ];

  protected readonly snippet = `<kit-dropdown variant="on-brand" ... />
<kit-search   variant="on-brand" ... />
<kit-password variant="on-brand" ... />
<kit-textbox  variant="on-brand" ... />`;
}
