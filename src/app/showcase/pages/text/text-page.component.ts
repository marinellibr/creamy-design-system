import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-text-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, TextComponent],
  templateUrl: './text-page.component.html',
  styleUrl: './text-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageComponent {
  protected readonly snippet = `<!-- Title -->
<creamy-kit-text type="title" size="large">Grande Título</creamy-kit-text>

<!-- Body com bold -->
<creamy-kit-text type="body" [bold]="true">Texto em destaque</creamy-kit-text>

<!-- Label com underline -->
<creamy-kit-text type="label" size="small" [underline]="true" color="variant">
  Label com underline
</creamy-kit-text>`;
}
