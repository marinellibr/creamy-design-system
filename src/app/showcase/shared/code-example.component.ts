import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Seção de exemplo de código exibida no fim de cada página do showcase,
 * logo abaixo do card "Como usar". O botão "ver código" do cabeçalho
 * (`ds-page-header`) rola a página até aqui (id `ds-code-example`).
 */
@Component({
  selector: 'ds-code-example',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (code()) {
      <section id="ds-code-example" class="ds-code-example">
        <h3 class="variant-label">Código</h3>
        <pre class="code-snippet"><code>{{ code() }}</code></pre>
      </section>
    }
  `,
  styles: [
    `
      .ds-code-example {
        scroll-margin-top: 80px;
        margin-top: 2.5rem;
      }
    `,
  ],
})
export class CodeExampleComponent {
  /** Snippet de uso do componente. */
  readonly code = input<string>('');
}
