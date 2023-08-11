import { AbstractControl, ValidationErrors } from '@angular/forms';

export function YearRangeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value >= 1895 && value <= 2050) {
    return null;  // La valeur est valide
  } else {
    return { yearRange: true };  // La valeur est invalide
  }
}
