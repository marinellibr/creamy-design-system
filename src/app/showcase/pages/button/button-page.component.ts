import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [PageHeaderComponent, ButtonComponent],
  templateUrl: './button-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPageComponent {
  protected readonly snippet = `<kit-button>Solid Button</kit-button>
<kit-button appearance="outline">Outline</kit-button>
<kit-button contrast="on-brand">On-brand</kit-button>`;
}
