import { AlertCurr } from 'app/models/currency.model';
import { Currency } from 'app/models/currency.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-range',
  templateUrl: './currency-range.component.html',
  styleUrls: ['./currency-range.component.css']
})
export class CurrencyRangeComponent implements OnInit {

  currencyForm: FormGroup;
  currencyList: Currency[];
  alertFor: AlertCurr;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CurrencyRangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.currencyList = data.currencyList;
    this.alertFor = data.alertFor;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const id = this.alertFor.currency ? this.alertFor.currency.id : '';
    this.currencyForm = this.fb.group({
      currency: [id, Validators.required],
      min: this.alertFor.min_price,
      max: this.alertFor.max_price
    });
  }

  onSubmitForm() {
    if (this.currencyForm.valid) {
      const val = this.currencyForm.value;
      this.alertFor = new AlertCurr();
      this.alertFor.currency = this.currencyList.filter(el => el.id === val.currency)[0];
      this.alertFor.max_price = val.max;
      this.alertFor.min_price = val.min;
      this.dialogRef.close();
    }

  }

}
