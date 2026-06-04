import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BannerCardComponent,
  BannerComponent,
  BannerTagComponent,
} from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { CodeExampleComponent } from '../../shared/code-example.component';

@Component({
  selector: 'app-banner-page',
  standalone: true,
  imports: [
    PageHeaderComponent, CodeExampleComponent,
    BannerComponent,
    BannerTagComponent,
    BannerCardComponent,
  ],
  templateUrl: './banner-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerPageComponent {
  protected readonly snippet = `<creamy-kit-banner
  title="Título"
  description="Descrição"
  iconColor="--feedbacks-success-variant-2"
  iconName="check_base" />

<creamy-kit-banner-tag
  iconName="wallet_base"
  tagValue="R$ 1.250,00" tagLabel="hoje" ... />

<creamy-kit-banner-card
  iconName="card_payment_method_base"
  trailingIconName="reload_base" ... />`;
}
