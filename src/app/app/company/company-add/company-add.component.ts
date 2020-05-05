import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.sass']
})
export class CompanyAddComponent implements OnInit {

  wizard = {
    elements: [
      {name: 'basic data'},
      {name: 'address'},
      {name: 'done'},
    ],
    current: 1,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onNext() {
    if (this.wizard.current < this.wizard.elements.length) {
      console.log('next');
      this.wizard.current++;
    } else {
      console.log('finish');
    }
  }

  onPrevious() {
    if (this.wizard.current > 1) {
      this.wizard.current--;
      console.log('previous');
    }
  }
}
