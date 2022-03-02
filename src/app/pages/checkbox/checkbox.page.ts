import { Component, OnInit } from '@angular/core';

interface Month {
  name: string;
  value: number;
  status: boolean;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  months: Month[] = [
    {
      name: 'JAN',
      value: 1,
      status: true
    },
    {
      name: 'FEV',
      value: 2,
      status: false
    },
    {
      name: 'MAR',
      value: 3,
      status: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showMonthSelected(month: Month){
    if(month.status === true)
    {console.log('month', month);}
  }


}
