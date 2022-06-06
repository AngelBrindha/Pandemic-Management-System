import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

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
    event.preventDefault();
    this.currentTab = tabIndex;
    console.log('Tab Selected: ' + this.currentTab);
  }
}
