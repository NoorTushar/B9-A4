"use strict";
function monthlySavings(arr, livingCost) {
   if (!Array.isArray(arr) || typeof livingCost !== "number") {
      return "invalid input";
   }

   let totalPayment = 0;

   for (let payment of arr) {
      const tax = 20 / 100;
      if (payment >= 3000) {
         payment = payment - payment * tax;
      }
      totalPayment += payment;
   }

   const totalSavings = totalPayment - livingCost;

   if (totalSavings < 0) {
      return "earn more";
   } else {
      return totalSavings;
   }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
/**
 * add payment/ earning
 * if earning 3000 or more, tax 20% cut
 * living cost minus
 * if net earning 0 or less than 0, return "earn more"
 *
 *
 * Input : ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।
 * Output: either a number or a string
 *
 * Challenge 📢 : ফাংশন টি তখন ই “invalid input” string টি রি টার্ন করবে ।
 * ● যদি প্রথম প্যারামি টার টি Array না হয়
 * ● যদি ও 2য় প্যারামি টার টি নাম্বার না হয়
 *
 * SAMPLE INPUT SAMPLE OUTPUT
 * [ 1000 , 2000 , 3000 ] , 5400 = 0
 * [ 1000 , 2000 , 2500 ] , 5000 = 500
 * [ 900 , 2700 , 3400] , 10000 = “earn more”
 * 100, [ 900 , 2700 , 3400] = invalid input
 *
 *
 */
