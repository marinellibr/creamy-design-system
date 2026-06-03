import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent, SnackbarComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-alert-page',
  standalone: true,
  imports: [PageHeaderComponent, AlertComponent, SnackbarComponent],
  templateUrl: './alert-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertPageComponent {
  protected readonly snippet = `<creamy-kit-alert
  feedback="success"
  title="Tudo certo!"
  linkText="Ver detalhes"
  linkHref="/pedidos/123">
  Sua operação foi concluída.
</kit-alert>

<creamy-kit-snackbar feedback="error">
  Não foi possível salvar.
</kit-snackbar>`;
}
