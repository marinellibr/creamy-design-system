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
<kit-header-search placeholder="O que sua pele procura?" />
<kit-header-search back placeholder="..." (backClick)="voltar()" />
<kit-header-search avatarSrc="perfil.jpg" placeholder="..." />

<!-- title / large-title / profile -->
<kit-header-title back title="Title">
  <button actions>...</button>
</kit-header-title>
<kit-header-large-title back subtitle="Small" title="Large" />
<kit-header-profile avatarSrc="perfil.jpg" title="User" subtitle="Sub" />`;
}
