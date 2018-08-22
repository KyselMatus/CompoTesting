import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

const LOWER_X_BOUND = 7;
const UPPER_X_BOUND = 13;

@Component({
  selector: 'app-ngx-credit-cards',
  templateUrl: './ngx-credit-cards.component.html',
  styleUrls: ['./ngx-credit-cards.component.css']
})
export class NgxCreditCardsComponent implements OnInit {
  public cardModel;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  valuechange(newValue) {
    // Mask
    let result = this.keepOnlyDigits(newValue);
    result = this.maskCreditCard(result);

    // Hiding 7th-12th digit as 'X' (char index 7-13)
    result = this.replaceSubstrOfCreditCard(result, LOWER_X_BOUND, UPPER_X_BOUND, 'X');
    // Workaround for wrong ngModel updating
    // Source: https://stackoverflow.com/questions/43213582/angular-ngmodel-doesnt-update-when-ngmodelchange-keeps-value
    this.cardModel = null;
    this.cdRef.detectChanges();
    this.cardModel = result;
    this.cdRef.detectChanges();
  }

  keepOnlyDigits = (str) => {
    const begining = str.substr(0, LOWER_X_BOUND).replace(/\D/g, '');
    const middle = str.substr(LOWER_X_BOUND, UPPER_X_BOUND - LOWER_X_BOUND + 1);
    const end = str.substr(UPPER_X_BOUND + 1, str.length - UPPER_X_BOUND + 1).replace(/\D/g, '');
    return begining.concat(middle, end);
  }

  maskCreditCard = (str) => {
    if (str[4] && str[4] !== ' ') {
      str = [str.slice(0, 4), str.slice(4)].join(' ');
    }
    if (str[9] && str[9] !== ' ') {
      str = [str.slice(0, 9), str.slice(9)].join(' ');
    }
    if (str[14] && str[14] !== ' ') {
      str = [str.slice(0, 14), str.slice(14)].join(' ');
    }
    if (str.length === 5 || str.length === 10 || str.length === 15) {
      str = str.substr(0, str.length - 1);
    }
    return str;
  }

  replaceSubstrOfCreditCard = (formattedCc, lowerBound, upperBound, replacementChar) => {
    const len = formattedCc.length;
    let result = formattedCc;
    if (len > lowerBound) {
      upperBound = (len <= upperBound) ? (len - 1) : upperBound;
      let index = lowerBound;
      while (index <= upperBound) {
        if (index !== 4 && index !== 9 && index !== 14) {
          result = this.setCharAt(result, index, replacementChar);
        }
        index++;
      }
    }
    return result;
  }

  setCharAt = (str, index, chr) => {
    if (index > str.length - 1) { return str; }
    return str.substr(0, index) + chr + str.substr(index + 1);
  }
}
