import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, InputComponent],
  templateUrl: './input-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPageComponent {
  protected readonly snippet = `<creamy-kit-input
  title="E-mail"
  placeholder="seu@email.com"
  helper="Usaremos para login"
  [(ngModel)]="email">
  <svg icon>...</svg>
</kit-input>`;
}
