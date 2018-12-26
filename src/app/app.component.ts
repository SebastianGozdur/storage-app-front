import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage-app-front';

  constructor(private http: HttpClient) {

  }

  addItem(item) {
    console.log(item);
    alert(item);
  }

  removeItem(id) {

  }

  updateItem(item) {

  }

  getAllItems() {
    this.http.get("http://localhost:3000/storage/api/v1/items").subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
