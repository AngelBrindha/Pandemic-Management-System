import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app1-tab',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  // @Input()
  // book: any;
  @Input()
  idx: number = 0;
  currentTab = 1;

  constructor() {
    console.log("tab selected")
   }

  ngOnInit(): void {
    console.log("tab selected")
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault(); // To stop flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected: ' + this.currentTab);
  }
}
