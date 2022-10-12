import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createonomatopia',
  templateUrl: './createonomatopia.component.html',
  styleUrls: ['./createonomatopia.component.scss']
})
export class CreateonomatopiaComponent implements OnInit {

  newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia)
  }

}
