import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
   upvoteCount:number=0
   downvoteCount:number=0
  constructor() { }

  ngOnInit(): void {
  }
  countVote(){
  this.upvoteCount++
  }
}
