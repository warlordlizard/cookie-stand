'use strict';

var hours = ['6am', '7am', '8am','9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//day 2 constructor

var allStores = [];

function Store(name, minCust, maxCust, avgCookie) {
  this.name= name;
  this.minCust= minCust;
  this.maxCust= maxCust;
  this.avgCookie= avgCookie;
  this.custEachHr= [];
  this.cookiesEachHr= [];
  this.totalDailySales= 0;
  this.calcCustEachHr= function(){
    for(var i = 0; i < hours.length; i++) {
      this.custEachHr.push(random(this.minCust, this.maxCust));
    }
  };
  this.calcCookiesEachHr= function(){
    this.calcCustEachHr();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custEachHr[i] * this.avgCookie);
      this.cookiesEachHr.push(oneHour);
      this.totalDailySales += oneHour;
    };
  };

  this.calcCookiesEachHr();
  allStores.push(this);
};
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac International Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);
