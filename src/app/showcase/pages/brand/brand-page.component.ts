import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrandSquareComponent,
  BrandHorizontalComponent,
  BrandCardholderComponent,
} from 'creamy-kit';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ALL_BRANDS, BRAND_NAMES, BrandType, BrandSize } from './brand-catalog';

@Component({
  selector: 'app-brand-page',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    BrandSquareComponent,
    BrandHorizontalComponent,
    BrandCardholderComponent,
  ],
  templateUrl: './brand-page.component.html',
  styleUrl: './brand-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandPageComponent {
  readonly allBrands = ALL_BRANDS;
  readonly brandNames = BRAND_NAMES;

  readonly brandQuery = signal('');
  readonly selectedBrand = signal<string>('visa');
  readonly selectedBrandType = signal<BrandType>('square');
  readonly selectedBrandSize = signal<BrandSize>('medium');
  readonly brandInputFocused = signal(false);

  readonly brandSizePresets: { label: string; value: BrandSize }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  readonly brandTypePresets: { label: string; value: BrandType }[] = [
    { label: 'Square', value: 'square' },
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Cardholder', value: 'cardholder' },
  ];

  readonly brandSuggestions = computed<string[]>(() => {
    const q = this.brandQuery().trim().toLowerCase();
    if (!q) return this.allBrands.slice(0, 12) as string[];
    return this.allBrands
      .filter((n) => n.toLowerCase().includes(q))
      .slice(0, 12) as string[];
  });

  readonly brandMatchCount = computed<number>(() => {
    const q = this.brandQuery().trim().toLowerCase();
    if (!q) return this.allBrands.length;
    return this.allBrands.filter((n) => n.toLowerCase().includes(q)).length;
  });

  readonly brandHtmlSnippet = computed(() => {
    const brand = this.selectedBrand();
    const type = this.selectedBrandType();
    const size = this.selectedBrandSize();

    if (type === 'cardholder') {
      return `<creamy-brand-cardholder brandName="${brand}" />`;
    }

    return `<creamy-brand-${type} brandName="${brand}" size="${size}" />`;
  });

  readonly brandTsSnippet = `import {
  BrandSquareComponent,
  BrandHorizontalComponent,
  BrandCardholderComponent,
} from 'creamy-kit';

@Component({
  standalone: true,
  imports: [
    BrandSquareComponent,
    BrandHorizontalComponent,
    BrandCardholderComponent,
  ],
  // ...
})`;

  onBrandQueryChange(value: string): void {
    this.brandQuery.set(value);
  }

  selectBrand(name: string): void {
    this.selectedBrand.set(name);
    this.brandQuery.set(name);
    this.brandInputFocused.set(false);
  }

  selectBrandType(type: BrandType): void {
    this.selectedBrandType.set(type);
  }

  selectBrandSize(size: BrandSize): void {
    this.selectedBrandSize.set(size);
  }

  preserveFocus(event: Event): void {
    event.preventDefault();
  }

  onBrandInputFocus(): void {
    this.brandInputFocused.set(true);
  }

  onBrandInputBlur(): void {
    setTimeout(() => this.brandInputFocused.set(false), 120);
  }
}
