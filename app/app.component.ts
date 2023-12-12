import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  name = 'Angular 5';
  users = [];

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  GetData() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {
        this.users = data;
      });
  }

  ClearData() {
    this.users = [];
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}

}
