import {Component, forwardRef} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true,
    }
  ]
})
export class CourseDateComponent implements ControlValueAccessor, Validator {
  public isDisabled: boolean;
  public date = new FormControl('');
  private dateFormat = 'DD/MM/YYYY';

  get value(): string {
    return moment(this.date.value, this.dateFormat).toISOString();
  }

  private onChange = (date?: string) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(date?: number): void {
    if (date) {
      this.date.setValue(date);
    } else {
      this.onTouched();
    }
    this.onChange(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public validate(): ValidationErrors | null {
    const value = this.date.value;
    let formatCorrect = true;
    if (value) {
      formatCorrect = moment(value, this.dateFormat).format(this.dateFormat) === value;
    }
    return formatCorrect ? null : {'formatIncorrect': {value: value}};
  }
}
