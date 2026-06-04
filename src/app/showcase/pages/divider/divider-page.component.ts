import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-divider-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, DividerComponent],
  templateUrl: './divider-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerPageComponent {
  protected readonly snippet = `<creamy-kit-divider weight="2px" color="border-medium" />
<creamy-kit-divider weight="4px" color="error" />`;
}
