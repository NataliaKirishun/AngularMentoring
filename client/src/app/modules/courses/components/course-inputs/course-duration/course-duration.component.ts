import {Component, forwardRef, Input} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  AbstractControl,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true,
    }
  ]
})
export class CourseDurationComponent implements ControlValueAccessor, Validator {
  @Input() ngClass: any;
  public isDisabled: boolean;
  public duration = new FormControl('');

  get value(): number {
    return this.duration.value;
  }

  private onChange = (duration: number) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(duration?: number): void {
    if (duration) {
      this.duration.setValue(duration);
    } else {
      this.onTouched();
    }
    this.onChange(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return Number.isNaN(Number(control.value))  ? {'isNotNumber': {value: control.value}} : null;
  }
}
