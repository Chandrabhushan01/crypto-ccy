import { Currency, AlertCurr } from 'app/models/currency.model';
import { AlertDialogComponent } from 'app/alert-dialog/alert-dialog.component';
import { CurrencyRangeComponent } from 'app/currency-range/currency-range.component';
import { ApiService } from 'app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'symbol', 'price'];
  showCurrencies: string[] = ['BTC', 'XRP', 'ETH', 'XLM', 'LTC'];

  currencyList: Currency[];
  currencyList$: Observable<Currency[]>;
  alertFor: AlertCurr = new AlertCurr();

  constructor(
    private service: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCorrencies();
  }

  getCorrencies() {
    this.currencyList$ = timer(0, 1000 * 60).pipe(
      switchMap(() => this.service.requestApi('get', environment.currecy_api_url)),
      map((res: any) => {
        const list: Currency[] = Object.values(res.data);
        this.currencyList = list.filter(el => this.showCurrencies.indexOf(el.symbol) > -1);
        if (this.alertFor) {
          this.openAlertDialog();
        }
        return this.currencyList;
      }),
    );
  }

  openInputDialog() {
    const dialogRef = this.dialog.open(CurrencyRangeComponent, {
      width: '400px',
      data: {currencyList: this.currencyList, alertFor: this.alertFor}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.alertFor = dialogRef.componentInstance.alertFor;
    });
  }

  openAlertDialog() {
    if (this.alertFor && this.alertFor.currency) {
      const curr = this.currencyList.filter(el => el.id === this.alertFor.currency.id)[0];
      const price = curr.quotes.USD.price;
      let msg: string = null;
      if (this.alertFor.max_price < price) {
        msg = 'Your favourite currency ' + curr.name + ' has crossed maximum limit of $'
        + this.alertFor.max_price + ' and new price is $' + price;
      }
      if (this.alertFor.min_price > price) {
        msg = 'Your favourite currency ' + curr.name + ' has crossed minimum limit of $'
        + this.alertFor.min_price + ' and new price is $' + price;
      }
      if (msg) {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(AlertDialogComponent, {
          width: '400px',
          data: msg
        });
      }
    }
  }

}
