import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPONENTS } from '../../component-registry';

/**
 * Landing do showcase: introdução + atalhos rápidos para os componentes
 * já implementados.
 */
@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ov">
      <h1 class="ov__title">Creamy Kit — Componentes</h1>
      <p class="ov__lead">
        Documentação viva do design system. Escolha um componente na barra
        lateral. Os marcados com <span class="ov__chip">WIP</span> ainda não
        têm página de demonstração.
      </p>

      <div class="ov__stats">
        <div class="ov__stat">
          <strong>{{ ready }}</strong>
          <span>implementados</span>
        </div>
        <div class="ov__stat">
          <strong>{{ wip }}</strong>
          <span>WIP</span>
        </div>
        <div class="ov__stat">
          <strong>{{ total }}</strong>
          <span>no total</span>
        </div>
      </div>

      <h2 class="ov__section">Implementados</h2>
      <div class="ov__grid">
        @for (item of readyItems; track item.slug) {
          <a class="ov__card" [routerLink]="['/components', item.slug]">
            <span class="ov__card-label">{{ item.label }}</span>
            <code class="ov__card-selector">&lt;{{ item.selector }}&gt;</code>
          </a>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .ov__title {
        margin: 0 0 0.5rem;
        color: var(--text-heading);
      }
      .ov__lead {
        margin: 0 0 2rem;
        max-width: 720px;
        line-height: 1.6;
        color: var(--text-body);
      }
      .ov__chip {
        font-size: 0.65rem;
        font-weight: 700;
        padding: 0.1rem 0.4rem;
        border-radius: 999px;
        background: var(--feedbacks-alert-variant, #f58122);
        color: #fff;
        vertical-align: middle;
      }
      .ov__stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 2.5rem;
        flex-wrap: wrap;
      }
      .ov__stat {
        display: flex;
        flex-direction: column;
        min-width: 120px;
        padding: 1rem 1.25rem;
        border: 1px solid var(--border-soft);
        border-radius: 12px;
        background: var(--background-variant);

        strong {
          font-size: 1.75rem;
          color: var(--primary-base);
        }
        span {
          font-size: 0.8rem;
          color: var(--text-body-2);
        }
      }
      .ov__section {
        margin: 0 0 1rem;
        color: var(--text-heading);
        font-size: 1.1rem;
      }
      .ov__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 0.875rem;
      }
      .ov__card {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        padding: 0.875rem 1rem;
        border: 1px solid var(--border-soft);
        border-radius: 10px;
        background: #fff;
        text-decoration: none;
        transition: border-color 0.12s ease, box-shadow 0.12s ease;

        &:hover {
          border-color: var(--primary-base);
          box-shadow: 0 2px 10px rgba(18, 140, 254, 0.1);
        }
      }
      .ov__card-label {
        font-weight: 600;
        color: var(--text-heading);
      }
      .ov__card-selector {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--text-body-2);
      }
    `,
  ],
})
export class OverviewPageComponent {
  protected readonly readyItems = COMPONENTS.filter((c) => !c.wip);
  protected readonly ready = this.readyItems.length;
  protected readonly total = COMPONENTS.length;
  protected readonly wip = this.total - this.ready;
}
