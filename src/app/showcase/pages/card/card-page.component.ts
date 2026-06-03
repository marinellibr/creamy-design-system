import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [PageHeaderComponent, CardComponent],
  templateUrl: './card-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent {
  protected readonly snippet = `<creamy-kit-card>
  <!-- conteúdo -->
</kit-card>`;
}
