import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabBarComponent, TabBarItemComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-tab-bar-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CodeExampleComponent,
    TabBarComponent,
    TabBarItemComponent,
    FormsModule,
  ],
  templateUrl: './tab-bar-page.component.html',
  styleUrl: './tab-bar-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarPageComponent {
  protected readonly snippet = `<creamy-kit-tab-bar [(ngModel)]="abaAtiva">
  <creamy-kit-tab-bar-item icon="home_base" label="Home" value="home" />
  <creamy-kit-tab-bar-item icon="search_variant" label="Search" value="search" />
  <creamy-kit-tab-bar-item icon="settings_base" label="Settings" value="settings" />
  <creamy-kit-tab-bar-item icon="user_base" value="profile" />
</creamy-kit-tab-bar>`;

  protected readonly selected = signal<string | null>(null);
}
