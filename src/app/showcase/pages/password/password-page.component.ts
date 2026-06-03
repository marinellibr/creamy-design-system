import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PasswordComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-password-page',
  standalone: true,
  imports: [PageHeaderComponent, PasswordComponent],
  templateUrl: './password-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordPageComponent {
  protected readonly snippet = `<kit-password
  title="Senha"
  placeholder="Mínimo 8 caracteres"
  helper="Use letras e números"
  [(ngModel)]="senha" />`;
}
