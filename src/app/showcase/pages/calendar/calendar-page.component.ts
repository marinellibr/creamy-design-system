import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, CalendarComponent],
  templateUrl: './calendar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPageComponent {
  calendarDate = new Date(2026, 1, 8);

  protected readonly snippet = `<kit-calendar
  footerLabel="Data selecionada"
  footerValue="auto"
  [(ngModel)]="data" />`;
}
