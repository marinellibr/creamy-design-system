import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [PageHeaderComponent, LoadingComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent {
  protected readonly snippet = `<creamy-kit-loading />
<creamy-kit-loading size="large" variant="neutral" />
<creamy-kit-loading icon="lock_base" size="large" />
<creamy-kit-loading variant="on-brand" [showIcon]="false" />`;
}
