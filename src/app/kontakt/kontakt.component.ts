import { Component, OnInit } from '@angular/core';
import { NgForm } from  '@angular/forms';
import { Kontakt } from '../models/kontakt.model';
import {  BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth: Date = new Date (2018, 0, 30);
	kontakt: Kontakt = {
		id: null,
		name: null,
		gender: null,
		email: '',
		phoneNumber: null,
		contactPreference: null,
		dateOfBirth: null,
  }

  constructor() {
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue',
   dateInputFormat: 'DD/MM/YYYY' });
   
   }

  ngOnInit() {
  }
}
