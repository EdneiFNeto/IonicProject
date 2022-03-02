/* eslint-disable @typescript-eslint/naming-convention */
import { APIService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

interface Verses {
  book_id: string;
  book_name: string;
  chapter: number;
  text: string;
}

interface Data {
  reference: string;
  verses: Verses[];
  text: string;
}
@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  data: Data | any  = {
    reference: '',
    verses: [],
    text: ''
  };

  verses: Verses[] = [];
  constructor(private service: APIService) { }

  ngOnInit() {
    this.service.getApi().then(result => {
      this.data = result;
      const {verses} = this.data;
      verses.forEach(element => {
        this.verses.push(element);
      });

      console.log(this.verses);
    }).catch(error => console.error(error));
  }

}
