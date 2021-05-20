import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static isValidPrice(control: AbstractControl) {
    const value = control.value;
    if (value > 1000) {
      return { invalid_price: true };
    }
    return null;
  }
}