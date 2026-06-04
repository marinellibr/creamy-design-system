import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, ButtonComponent],
  templateUrl: './button-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPageComponent {
  protected readonly snippet = `<creamy-kit-button>Solid Button</kit-button>
<creamy-kit-button appearance="outline">Outline</kit-button>
<creamy-kit-button contrast="on-brand">On-brand</kit-button>`;
}
