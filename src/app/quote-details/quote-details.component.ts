import { Quote } from '../quote'; 
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() quoteData:any=new EventEmitter()
  quote:any=new Quote("","","",new Date)
  constructor() { }

  ngOnInit(): void {
  }
  quoteFunction(){
    this.quoteData.emit(this.quote)
  }
}
