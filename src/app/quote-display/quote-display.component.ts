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