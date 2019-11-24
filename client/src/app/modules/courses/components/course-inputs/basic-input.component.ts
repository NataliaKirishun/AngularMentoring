import { EventEmitter, Output } from '@angular/core';

export class BasicInputComponent<T> {
  @Output() inputChange: EventEmitter<T> = new EventEmitter<T>();

  public inputValue = null;

  public handleChange(): void {
    this.inputChange.emit(this.inputValue);
  }
}
