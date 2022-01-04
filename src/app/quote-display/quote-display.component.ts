import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  count: any=0;

  constructor() { }

  ngOnInit(): void {
  }
  quotes:Quote[]=[
    new Quote ("Dominic","Allan","Happy coding",new Date())
  ]
  displayFunction(data:any){
 data.Timeposted=new Date(data.Timeposted)
 this.quotes.push(data)
  }
  myDeletes(deletes:boolean,index:number){
      if (deletes) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].Name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
   
  }
  
    }
    upvote(index:number){
      this.quotes[index].votes = this.quotes[index].votes + 1;
      if (this.quotes[index].votes>this.count) {
        this.count=this.quotes[index].votes;
      }
      
    }

  }