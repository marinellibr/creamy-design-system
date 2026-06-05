import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-date-picker-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, CodeExampleComponent, DatePickerComponent],
  templateUrl: './date-picker-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerPageComponent {
  calendarDate = new Date(2026, 1, 8);

  protected readonly snippet = `<creamy-kit-date-picker
  title="Selecione a data"
  description="Description"
  infoText="Texto informativo sobre a escolha da data"
  [(ngModel)]="data"
  (confirm)="salvar($event)"
  (cancel)="fechar()"
  (closed)="fechar()" />

<!-- Desabilitado -->
<creamy-kit-date-picker title="Data" [disabled]="true" [(ngModel)]="data" />`;
}
