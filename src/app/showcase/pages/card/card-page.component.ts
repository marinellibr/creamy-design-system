import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, CardComponent],
  templateUrl: './card-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent {
  protected readonly snippet = `<creamy-kit-card>
  <!-- conteúdo -->
</kit-card>`;
}
