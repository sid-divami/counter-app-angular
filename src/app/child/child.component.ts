import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() inputFromParent = 0;
  @Output() sendCount = new EventEmitter();
  increase() {
    this.inputFromParent++;
    this.sendCount.emit(this.inputFromParent);
  }
  decrease() {
    if (this.inputFromParent == 0) return;
    this.inputFromParent--;
    this.sendCount.emit(this.inputFromParent);
  }
  reset() {
    this.sendCount.emit(0);
  }
}
