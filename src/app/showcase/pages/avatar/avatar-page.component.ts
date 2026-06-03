import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-avatar-page',
  standalone: true,
  imports: [PageHeaderComponent, AvatarComponent],
  templateUrl: './avatar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPageComponent {
  protected readonly snippet = `<kit-avatar size="large" contrast="dark" variant="text">LM</kit-avatar>

<kit-avatar variant="image">
  <img src="avatar.jpg" alt="Luiz" />
</kit-avatar>

<!-- anel de progresso -->
<kit-avatar variant="text" [percentage]="75">LM</kit-avatar>`;
}
