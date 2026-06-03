import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-alert-page',
  standalone: true,
  imports: [PageHeaderComponent, AlertComponent],
  templateUrl: './alert-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertPageComponent {
  protected readonly snippet = `<kit-alert
  feedback="success"
  title="Tudo certo!"
  linkText="Ver detalhes"
  linkHref="/pedidos/123">
  Sua operação foi concluída.
</kit-alert>

<kit-alert variant="snackbar" feedback="error">
  Não foi possível salvar.
</kit-alert>`;
}
