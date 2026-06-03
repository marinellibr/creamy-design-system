import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-divider-page',
  standalone: true,
  imports: [PageHeaderComponent, DividerComponent],
  templateUrl: './divider-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerPageComponent {
  protected readonly snippet = `<creamy-kit-divider weight="2px" color="border-medium" />
<creamy-kit-divider weight="4px" color="error" />`;
}
