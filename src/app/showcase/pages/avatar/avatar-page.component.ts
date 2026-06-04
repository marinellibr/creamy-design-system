import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AvatarIconComponent,
  AvatarImageComponent,
  AvatarTextComponent,
} from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-avatar-page',
  standalone: true,
  imports: [
    PageHeaderComponent, CodeExampleComponent,
    AvatarIconComponent,
    AvatarTextComponent,
    AvatarImageComponent,
  ],
  templateUrl: './avatar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPageComponent {
  protected readonly snippet = `<creamy-kit-avatar-icon name="user_base" contrast="dark" size="large" />

<creamy-kit-avatar-text text="LM" contrast="variant" size="medium" />

<creamy-kit-avatar-image src="avatar.jpg" alt="Luiz" size="large" />

<!-- anel de progresso -->
<creamy-kit-avatar-text text="LM" [percentage]="75" />`;
}
