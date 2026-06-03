import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-code-page',
  standalone: true,
  imports: [PageHeaderComponent, CodeComponent],
  templateUrl: './code-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodePageComponent {
  protected readonly snippet = `<creamy-kit-code title="Código" [length]="6" [(ngModel)]="codigo" />
<creamy-kit-code [length]="4" [error]="true" />`;
}
