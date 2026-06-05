import { ChangeDetectionStrategy, Component, OnInit, input, signal } from '@angular/core';

/**
 * Bloco "ver código" reutilizável nas páginas do showcase.
 * Renderiza um botão de alternância + o snippet de uso do componente.
 */
@Component({
  selector: 'ds-code-block',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="code-toggle" (click)="toggle()">
      {{ open() ? 'ocultar código' : 'ver código' }}
    </button>
    @if (open()) {
      <pre class="code-snippet"><code>{{ code() }}</code></pre>
    }
  `,
})
export class CodeBlockComponent implements OnInit {
  /** Snippet exibido quando aberto. */
  readonly code = input<string>('');

  /** Estado inicial (aberto/fechado). */
  readonly startOpen = input<boolean>(false);

  protected readonly open = signal(false);

  ngOnInit(): void {
    this.open.set(this.startOpen());
  }

  toggle(): void {
    this.open.update((v) => !v);
  }
}
