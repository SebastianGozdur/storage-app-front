import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private choosenMenuElementFlag: number = 1;

  constructor(private http: HttpClient) {

  }

  setFlagVariable(choosenMenuElement: number) {
    this.choosenMenuElementFlag = choosenMenuElement;
  }

  addItem(item) {
    console.log(item);
    alert(item);
  }

  removeItem(id) {

  }

  updateItem(item) {

  }
}
