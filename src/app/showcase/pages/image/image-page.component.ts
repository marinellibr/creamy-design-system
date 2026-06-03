import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-image-page',
  standalone: true,
  imports: [PageHeaderComponent, ImageComponent],
  templateUrl: './image-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePageComponent {
  protected readonly snippet = `<creamy-kit-image size="medium" path="foto.jpg" alt="Descrição" />

<!-- tamanhos: xxsmall(90, r24) · xsmall(140) · small(321) ·
     medium(340, padrão) · large(355) -->
<creamy-kit-image size="xxsmall" path="foto.jpg" />`;
}
