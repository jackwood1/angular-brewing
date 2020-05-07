import { Component, OnInit } from '@angular/core';

import { Batch }    from '../batch';

@Component({
  selector: 'app-batch-start',
  templateUrl: './batch-start.component.html',
  styleUrls: ['./batch-start.component.css']
})
export class BatchStartComponent implements OnInit {
  categories = ['Red Wine', 'White Wine',
            'Hefewiezen', 'Pilsner'];
  kitVendors = ["Master Vinter", "Other"];

  //batch = new Batch(1, "Frist Batch", "Good try", "Red Wine", "02/03/2020", "Master Vinter", "2019091541921");

  batch = new Batch(1, "Second Batch", "Better try", "White Wine", "02/03/2020", "Other", "2019091541921");

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  constructor() { }

  ngOnInit() {
  }

}