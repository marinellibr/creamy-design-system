import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextboxComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-textbox-page',
  standalone: true,
  imports: [PageHeaderComponent, TextboxComponent],
  templateUrl: './textbox-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextboxPageComponent {
  protected readonly snippet = `<creamy-kit-textbox
  title="Comentário"
  placeholder="Escreva aqui…"
  [maxLength]="120"
  [(ngModel)]="texto" />`;
}
