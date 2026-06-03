import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [PageHeaderComponent, SearchComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  protected readonly snippet = `<kit-search placeholder="Pesquisar…">
  <svg iconRight>...</svg>
</kit-search>

<kit-search placeholder="Compacta" [small]="true">
  <svg iconRight>...</svg>
</kit-search>`;
}
