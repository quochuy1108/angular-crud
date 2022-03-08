import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public icon: string = ''
  @Input() public className:string = ''
  @Input() public btnContent:string = ''

  @Output() public onClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

}
