import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CodeBlockComponent } from './code-block.component';

/**
 * Cabeçalho padrão de uma página de componente: nome + seletor + "ver código".
 */
@Component({
  selector: 'ds-page-header',
  standalone: true,
  imports: [CodeBlockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ds-page-head">
      <div class="ds-page-head__title">
        <h1>{{ label() }}</h1>
        @if (selector()) {
          <code class="ds-page-head__selector">&lt;{{ selector() }}&gt;</code>
        }
      </div>
      @if (code()) {
        <ds-code-block [code]="code()" />
      }
    </div>
  `,
  styles: [
    `
      .ds-page-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
        border-bottom: 2px solid var(--primary-base);
        padding-bottom: 0.75rem;
        margin-bottom: 1.75rem;
      }
      .ds-page-head__title {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      h1 {
        margin: 0;
        color: var(--text-heading);
        font-size: 1.75rem;
      }
      .ds-page-head__selector {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--text-body-2);
        background: var(--background-variant);
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
      }
    `,
  ],
})
export class PageHeaderComponent {
  readonly label = input<string>('');
  readonly selector = input<string>('');
  readonly code = input<string>('');
}
