import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderTitleComponent } from 'creamy-kit';
import { COMPONENTS, ComponentEntry, GROUP_ORDER } from '../component-registry';

interface NavGroup {
  name: string;
  items: ComponentEntry[];
}

/**
 * Shell do showcase: sidebar (lista de todos os componentes, agrupados, com
 * selo WIP) à esquerda + `<router-outlet>` à direita.
 */
@Component({
  selector: 'app-showcase-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderTitleComponent],
  templateUrl: './showcase-layout.component.html',
  styleUrl: './showcase-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseLayoutComponent {
  /** Termo de filtro da sidebar. */
  protected readonly filter = signal('');

  /** Estado de abertura/fechamento da sidebar. */
  protected readonly sidebarOpen = signal(true);

  /** Quantidade de itens prontos / total, para o rodapé da sidebar. */
  protected readonly readyCount = COMPONENTS.filter((c) => !c.wip).length;
  protected readonly totalCount = COMPONENTS.length;

  /** Componentes agrupados e filtrados. */
  protected readonly groups = computed<NavGroup[]>(() => {
    const q = this.filter().trim().toLowerCase();
    const match = (c: ComponentEntry) =>
      !q ||
      c.label.toLowerCase().includes(q) ||
      c.selector.toLowerCase().includes(q);

    return GROUP_ORDER.map((name) => ({
      name,
      items: COMPONENTS.filter((c) => c.group === name && match(c)),
    })).filter((g) => g.items.length > 0);
  });

  protected onFilter(value: string): void {
    this.filter.set(value);
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
