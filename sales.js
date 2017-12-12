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
      // console.log(oneHour, 'one hour');
      this.cookiesEachHr.push(oneHour);
      this.totalDailySales += oneHour;
      // console.log(this.totalDailySales, 'total');
    };
  };
  // this.render= function(){
  //   this.calcCookiesEachHr();
  //   var ulEl = document.getElementById('pike');
  //   // console.log (ulEl, 'ulEl');
  //   for(var i = 0; i < hours.length; i++){
  //     var liEl = document.createElement('li');
  //     liEl.textContent = hours[i] + ': ' + this.cookiesEachHr[i] + ' cookies';
  //     ulEl.appendChild(liEl)
  //   }
  // }
  this.calcCookiesEachHr();
  allStores.push(this);
};
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac International Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);
//
//
// var pike = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   custEachHr : [],
//   cookiesEachHr: [],
//   totalDailySales: 0,
//   calcCustEachHr: function(){
//     for(var i = 0; i < hours.length; i++) {
//       this.custEachHr.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHr: function(){
//     this.calcCustEachHr();
//     for(var i = 0; i < hours.length; i++) {
//       var oneHour = Math.ceil(this.custEachHr[i] * this.avgCookie);
//       console.log(oneHour, 'one hour');
//       this.cookiesEachHr.push(oneHour);
//       this.totalDailySales += oneHour;
//       console.log(this.totalDailySales, 'total');
//     };
//   },
//   render: function(){
//     this.calcCookiesEachHr();
//     var ulEl = document.getElementById('pike');
//     // console.log (ulEl, 'ulEl');
//     for(var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesEachHr[i] + ' cookies';
//       ulEl.appendChild(liEl)
//     }
//   }
// };
//
// var airport = {
//   name: 'Seatac International Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   custEachHr : [],
//   cookiesEachHr: [],
//   calcCustEachHr: function(){
//     for(var i = 0; i < hours.length; i++) {
//       this.custEachHr.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHr: function(){
//     this.calcCustEachHr();
//     for(var i = 0; i < hours.length; i++) {
//       this.cookiesEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCookie));
//     };
//   },
// }
//
// var center = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   custEachHr : [],
//   cookiesEachHr: [],
//   calcCustEachHr: function(){
//     for(var i = 0; i < hours.length; i++) {
//       this.custEachHr.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHr: function(){
//     this.calcCustEachHr();
//     for(var i = 0; i < hours.length; i++) {
//       this.cookiesEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCookie));
//     };
//   },
// }
//
// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   calcCustEachHr: function(){
//     for(var i = 0; i < hours.length; i++) {
//       this.custEachHr.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHr: function(){
//     this.calcCustEachHr();
//     for(var i = 0; i < hours.length; i++) {
//       this.cookiesEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCookie));
//     };
//   },
// }
//
// var alki = {
//   name: 'Alki Beach',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   custEachHr : [],
//   cookiesEachHr: [],
//   calcCustEachHr: function(){
//     for(var i = 0; i < hours.length; i++) {
//       this.custEachHr.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHr: function(){
//     this.calcCustEachHr();
//     for(var i = 0; i < hours.length; i++) {
//       this.cookiesEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCookie));
//     };
//   },
// }
// // render on page load
// // pike.render();
