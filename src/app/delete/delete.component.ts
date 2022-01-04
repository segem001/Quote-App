import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Output() delete=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  deleteData(sure:any){
 this.delete.emit(sure)
  }
}
