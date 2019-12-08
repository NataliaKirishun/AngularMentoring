import { EventEmitter, Input, Output } from '@angular/core';

export class BasicInputComponent<T> {
  @Input() inputValue: T;
  @Output() inputChange: EventEmitter<T> = new EventEmitter<T>();

  public handleChange(): void {
    this.inputChange.emit(this.inputValue);
  }
}
