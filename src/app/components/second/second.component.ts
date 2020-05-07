import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    ID: new FormControl(''),
    Name: new FormControl(''),
    Detail: new FormControl(''),
    Quantity: new FormControl(''),
    Price : new FormControl(''),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }

}
