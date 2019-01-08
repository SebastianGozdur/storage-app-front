import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../api_config";

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.css']
})
export class ItemsManagerComponent implements OnInit {
  addForm : FormGroup;
  updateForm : FormGroup;

  constructor(private http: HttpClient, private formBuilder : FormBuilder) {
    this.addForm = this.formBuilder.group({
      add_name_cn: ['', ''],
      add_quantity_cn: ['', ''],
      add_related_price_cn: ['','']
    });

    this.updateForm = this.formBuilder.group({
      update_select_id_cn: ['',''],
      update_name_cn: ['',''],
      update_quantity_cn: ['',''],
      update_related_price_cn: ['','']
    });
  }

  ngOnInit() {
  }

  addItem() {
    if(this.addForm.value.add_name_cn != '' && this.addForm.value.add_quantity_cn != '' && this.addForm.value.add_related_price_cn != '') {
      let request = {
        name: this.addForm.value.add_name_cn,
        quantity: this.addForm.value.add_quantity_cn,
        related_price: this.addForm.value.add_related_price_cn
      };

      this.http.post(API_URL + 'storage/api/v1/items/add', request).subscribe(
        response => {
          alert('records created');
        },
        err => {
          alert('Error ocurred');
        }
      );
    } else {
      alert('One of the fields is empty');
    }
  }

  updateItem() {
    if(this.updateForm.value.update_name_cn != '' && this.updateForm.value.update_quantity_cn != '' && this.updateForm.value.update_related_price_cn != '') {
      let request = {
        name: this.updateForm.value.update_name_cn,
        quantity: this.updateForm.value.update_quantity_cn,
        related_price: this.updateForm.value.update_related_price_cn
      };

      this.http.put(API_URL + 'storage/api/v1/items/' + this.updateForm.value.update_select_id_cn + '/update', request).subscribe(
        response => {
          alert('Item updated');
        },
        err => {
          alert('Error ocurred');
        }
      );
    } else {
      alert('Fill all the fields');
    }
  }

  updateName() {
    if(this.updateForm.value.update_name_cn != '') {
      let request = {
        name : this.updateForm.value.update_name_cn
      };

      this.http.put(API_URL + 'storage/api/v1/items/' + this.updateForm.value.update_select_id_cn + '/update/name', request).subscribe(
        response => {
          alert('Item name updated');
        },
        err => {
          alert('Error ocurred');
        }
      );
    } else {
      alert('Name is empty');
    }
  }

  updateQuantity() {
    if(this.updateForm.value.update_quantity_cn != '') {
      let request = {
        quantity : this.updateForm.value.update_quantity_cn
      };

      this.http.put(API_URL + 'storage/api/v1/items/' + this.updateForm.value.update_select_id_cn + '/update/quantity', request).subscribe(
        response => {
          alert('Item quantity updated');
        },
        err => {
          alert('Error ocurred');
        }
      );
    } else {
      alert('Quantity is empty');
    }
  }

  updateRelatedPrice() {
    if (this.updateForm.value.update_related_price_cn != '') {
      let request = {
        related_price: this.updateForm.value.update_related_price_cn
      };

      this.http.put(API_URL + 'storage/api/v1/items/' + this.updateForm.value.update_select_id_cn + '/update/related_price', request).subscribe(
        response => {
          alert('Item price updated');
        },
        err => {
          alert('Error ocurred');
          console.log(err);
        }
      );
    } else {
      alert('Price is empty');
    }
  }
}
