import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../api_config";

@Component({
  selector: 'app-items-viewer',
  templateUrl: './items-viewer.component.html',
  styleUrls: ['./items-viewer.component.css']
})
export class ItemsViewerComponent implements OnInit {
  items : any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.http.get(API_URL + 'storage/api/v1/items').subscribe(
      data => {
        console.log(data);
        this.items = data;
      }
    );
  }

  order(id, quantity) {
    quantity = quantity - 1;
    let request = {
      quantity : quantity
    };

    this.http.put(API_URL + 'storage/api/v1/items/'+id+'/update/quantity', request).subscribe(
      response => {
        alert('Item quantity updated');
        this.getAllItems();
      },
      err => {
        alert('Error ocurred');
      }
    );
  }

  removeItem(id) {
    this.http.delete(API_URL + 'storage/api/v1/items/'+id+'/remove').subscribe(
      response => {
        alert('Item has been sucessfully removed');
        this.getAllItems();
      },
      err => {
        alert('Error ocurred');
      }
    );

  }
}
