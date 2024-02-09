"use strict";
function calculateMoney(ticketSale) {
   const ticketSaleQty = Number(ticketSale);
   if (ticketSaleQty < 0) {
      return "ERROR: please enter a positive number";
   }
   const perTicketPrice = 120;
   const securityCost = 500;
   const lunchPerStuff = 50;
   const totalStuff = 8;

   const lunchCost = lunchPerStuff * totalStuff;

   const totalCost = securityCost + lunchCost;

   const totalRevenue = ticketSaleQty * perTicketPrice;

   const moneyRemaining = totalRevenue - totalCost;

   return moneyRemaining;
}

console.log(calculateMoney(2));
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-1));
