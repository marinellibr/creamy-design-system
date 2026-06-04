import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

/**
 * Cabeçalho padrão de uma página de componente: nome + seletor + "ver código".
 *
 * O botão "ver código" não abre mais o snippet inline — ele rola a página até a
 * seção `<ds-code-example>` (id `ds-code-example`), renderizada no fim da página,
 * logo abaixo do card "Como usar".
 */
@Component({
  selector: 'ds-page-header',
  standalone: true,
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
        <button type="button" class="code-toggle" (click)="scrollToCode()">
          ver código
        </button>
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
  private readonly doc = inject(DOCUMENT);

  readonly label = input<string>('');
  readonly selector = input<string>('');
  readonly code = input<string>('');

  /** Rola a página até a seção de código no fim do conteúdo. */
  scrollToCode(): void {
    this.doc
      .getElementById('ds-code-example')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
