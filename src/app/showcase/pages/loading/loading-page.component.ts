import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent, SwitchComponent, InputComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [PageHeaderComponent, LoadingComponent, SwitchComponent, InputComponent, FormsModule],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent {
  protected readonly snippet = `<creamy-kit-loading />
<creamy-kit-loading size="xlarge" variant="neutral" />
<creamy-kit-loading icon="lock_base" size="large" />
<creamy-kit-loading variant="on-brand" [showIcon]="false" />`;

  protected readonly showIcon = signal(true);
  protected readonly iconName = signal('circle_variant');
  protected readonly size = signal<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>('large');
  protected readonly variant = signal<'primary' | 'neutral' | 'on-brand'>('primary');
  protected readonly searchQuery = signal('');

  protected readonly icons = [
    'circle_variant', 'lock_base', 'search_variant', 'settings_base', 'home_base',
    'user_base', 'bell_base', 'star_base', 'heart_base', 'check_base'
  ];

  protected readonly filteredIcons = computed(() =>
    this.icons.filter(icon =>
      icon.toLowerCase().includes(this.searchQuery().toLowerCase())
    )
  );

  updateSearch(query: string): void {
    this.searchQuery.set(query);
  }

  selectIcon(icon: string): void {
    this.iconName.set(icon);
    this.searchQuery.set('');
  }
}
