/**
 * Stubs de todos os exports de creamy-kit usados neste projeto.
 * Usado em testes via moduleNameMapper — evita depender do build da biblioteca.
 */
import { Component, Directive, InjectionToken, Provider } from '@angular/core';

@Component({ selector: 'creamy-kit-stub', template: '', standalone: true })
class StubComponent {}

// actions
export const ButtonComponent = StubComponent;

// forms
export const InputComponent = StubComponent;
export const TextboxComponent = StubComponent;
export const PasswordComponent = StubComponent;
export const SearchComponent = StubComponent;
export const DropdownComponent = StubComponent;
export const MultiDropdownComponent = StubComponent;
export const CheckboxComponent = StubComponent;
export const RadioComponent = StubComponent;
export const SwitchComponent = StubComponent;
export const CodeComponent = StubComponent;
export const CalendarComponent = StubComponent;
export const DatePickerComponent = StubComponent;
export type RadioOption = { label: string; value: string };

// navigation
export const BreadcrumbComponent = StubComponent;
export const TabBarComponent = StubComponent;
export const TabBarItemComponent = StubComponent;
export const HeaderSearchComponent = StubComponent;
export const HeaderTitleComponent = StubComponent;
export const HeaderLargeTitleComponent = StubComponent;
export const HeaderProfileComponent = StubComponent;

// feedback
export const AlertComponent = StubComponent;
export const SnackbarComponent = StubComponent;
export const BannerComponent = StubComponent;
export const BannerTagComponent = StubComponent;
export const BannerCardComponent = StubComponent;
export const LoadingComponent = StubComponent;
export const TooltipComponent = StubComponent;

// data-display
export const AvatarIconComponent = StubComponent;
export const AvatarTextComponent = StubComponent;
export const AvatarImageComponent = StubComponent;
export const CardComponent = StubComponent;
export const DividerComponent = StubComponent;

// media
export const IconComponent = StubComponent;
export const ImageComponent = StubComponent;
export const BrandSquareComponent = StubComponent;
export const BrandHorizontalComponent = StubComponent;
export const BrandCardholderComponent = StubComponent;

// typography
export const TextComponent = StubComponent;

// core / resources
export interface CreamyKitResources {
  iconsBaseUrl: string;
  brandsBaseUrl: string;
}

export const CREAMY_KIT_RESOURCES_DEFAULTS: CreamyKitResources = {
  iconsBaseUrl: '',
  brandsBaseUrl: '',
};

export const CREAMY_KIT_RESOURCES = new InjectionToken<CreamyKitResources>(
  'CREAMY_KIT_RESOURCES_MOCK',
  { providedIn: 'root', factory: () => CREAMY_KIT_RESOURCES_DEFAULTS },
);

export function provideCreamyKitResources(
  config: Partial<CreamyKitResources>,
): Provider {
  return {
    provide: CREAMY_KIT_RESOURCES,
    useValue: { ...CREAMY_KIT_RESOURCES_DEFAULTS, ...config },
  };
}

// base
@Directive({ standalone: true })
export abstract class BaseValueAccessor<T> {
  protected onChange: (value: T) => void = () => {};
  protected onTouched: () => void = () => {};
  abstract writeValue(value: T): void;
  registerOnChange(fn: (value: T) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(_: boolean): void {}
}
