import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [PageHeaderComponent, LoadingComponent],
  templateUrl: './loading-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent {
  protected readonly snippet = `<creamy-kit-loading />
<creamy-kit-loading size="small" />
<creamy-kit-loading size="large" variant="subtle" />`;
}
