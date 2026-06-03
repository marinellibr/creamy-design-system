import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

/**
 * Página placeholder para componentes ainda **sem implementação** de
 * demonstração (marcados como `wip` no registro). Lê `label`/`selector` do
 * `data` da rota.
 */
@Component({
  selector: 'app-wip-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wip">
      <span class="wip__badge">WIP</span>
      <h1 class="wip__title">{{ (data() && data()!.label) || 'Componente' }}</h1>
      @if (data() && data()!.selector) {
        <code class="wip__selector">&lt;{{ data()!.selector }}&gt;</code>
      }
      <p class="wip__text">
        Este componente existe na biblioteca <code>creamy-kit</code>, mas a
        página de demonstração ainda não foi implementada.
      </p>
    </div>
  `,
  styles: [
    `
      .wip {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        max-width: 560px;
        padding: 2.5rem;
        border: 1px dashed var(--border-strong);
        border-radius: 16px;
        background: var(--background-variant);
      }
      .wip__badge {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        padding: 0.2rem 0.5rem;
        border-radius: 999px;
        background: var(--feedbacks-alert-variant, #f58122);
        color: #fff;
      }
      .wip__title {
        margin: 0;
        color: var(--text-heading);
      }
      .wip__selector {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--text-body-2);
        background: var(--background-base);
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
      }
      .wip__text {
        margin: 0;
        line-height: 1.6;
        color: var(--text-body);

        code {
          font-family: monospace;
          font-size: 0.875em;
          background: var(--background-base);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }
      }
    `,
  ],
})
export class WipPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly data = toSignal(
    this.route.data.pipe(
      map((d) => d as { label?: string; selector?: string }),
    ),
  );
}
