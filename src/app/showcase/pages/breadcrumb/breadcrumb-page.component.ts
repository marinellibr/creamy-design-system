import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-breadcrumb-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeExampleComponent, BreadcrumbComponent],
  templateUrl: './breadcrumb-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbPageComponent {
  protected readonly snippet = `<creamy-kit-breadcrumb
  path="Início/Produtos/Tênis"
  (itemClick)="ir($event)" />`;
}
