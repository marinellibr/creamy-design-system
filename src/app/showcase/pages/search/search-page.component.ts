import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, SearchComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  protected readonly snippet = `<creamy-kit-search placeholder="Pesquisar…">
  <svg iconRight>...</svg>
</creamy-kit-search>

<creamy-kit-search placeholder="Compacta" [small]="true">
  <svg iconRight>...</svg>
</creamy-kit-search>

<!-- Desabilitado -->
<creamy-kit-search placeholder="Desabilitado" [disabled]="true" />`;
}
