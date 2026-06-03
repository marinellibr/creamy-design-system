import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [PageHeaderComponent, HeaderComponent],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {
  protected readonly snippet = `<!-- search (com voltar ou avatar) -->
<kit-header placeholder="O que sua pele procura?" />
<kit-header type="search" back placeholder="..." (backClick)="voltar()" />
<kit-header type="search" avatarSrc="perfil.jpg" placeholder="..." />

<!-- title / large-title / profile -->
<kit-header type="title" back title="Title">
  <button actions>...</button>
</kit-header>
<kit-header type="large-title" back subtitle="Small" title="Large" />
<kit-header type="profile" avatarSrc="perfil.jpg" title="User" subtitle="Sub" />`;
}
