import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item = '';
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.delete.emit(this.item);
  }
}
