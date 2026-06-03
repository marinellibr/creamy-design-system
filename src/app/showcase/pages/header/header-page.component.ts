import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  HeaderLargeTitleComponent,
  HeaderProfileComponent,
  HeaderSearchComponent,
  HeaderTitleComponent,
} from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    HeaderSearchComponent,
    HeaderTitleComponent,
    HeaderLargeTitleComponent,
    HeaderProfileComponent,
  ],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {
  protected readonly snippet = `<!-- search (com voltar ou avatar) -->
<creamy-kit-header-search placeholder="O que sua pele procura?" />
<creamy-kit-header-search back placeholder="..." (backClick)="voltar()" />
<creamy-kit-header-search avatarSrc="perfil.jpg" placeholder="..." />

<!-- title / large-title / profile -->
<creamy-kit-header-title back title="Title">
  <button actions>...</button>
</kit-header-title>
<creamy-kit-header-large-title back subtitle="Small" title="Large" />
<creamy-kit-header-profile avatarSrc="perfil.jpg" title="User" subtitle="Sub" />`;
}
