import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public text:string = ''
  public visible:boolean = false


  constructor(private common:CommonService) { }

  ngOnInit(): void {
  this.common.activeModal$.subscribe(data=>{
    this.visible = data
  })
    console.log('visibleInModal',this.visible);
  }

  public closeModal(): void {
    this.visible = false
  }

}
