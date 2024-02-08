function calculateMoney(ticketSale) {
   if (ticketSale < 0) {
      return "ERROR: please enter a positive input number";
   }
   const perTicketPrice = 120;
   const securityCost = 500;
   const lunchPerStuff = 50;
   const totalStuff = 8;

   const lunchCost = lunchPerStuff * totalStuff;

   const totalCost = securityCost + lunchCost;

   const totalRevenue = ticketSale * perTicketPrice;

   const moneyRemaining = totalRevenue - totalCost;

   return moneyRemaining;
}

function checkName(name) {
   if (typeof name !== "string") {
      return "invalid";
   }

   const lastCharacter = name[name.length - 1].toLowerCase();

   if (
      lastCharacter === "a" ||
      lastCharacter === "y" ||
      lastCharacter === "i" ||
      lastCharacter === "e" ||
      lastCharacter === "o" ||
      lastCharacter === "u" ||
      lastCharacter === "w"
   ) {
      return "Good Name";
   } else {
      return "Bad Name";
   }
}

function deleteInvalids(array) {
   if (!Array.isArray(array)) {
      return "ERROR: please enter an array.";
   }
   const validArray = [];
   for (item of array) {
      if (typeof item === "number" && !isNaN(item)) {
         validArray.push(item);
      }
   }
   return validArray;
}

function password(obj) {
   const name = obj.name;
   const birthYear = obj.birthYear;
   let siteName = obj.siteName;

   if (
      name === undefined ||
      birthYear === undefined ||
      siteName === undefined ||
      birthYear.toString().length !== 4
   ) {
      return "invalid";
   }

   siteName = siteName[0].toUpperCase() + siteName.slice(1);

   const password = `${siteName}#${name}@${birthYear}`;

   return password;
}

function monthlySavings(arr, livingCost) {
   if (!Array.isArray(arr) || typeof livingCost !== "number") {
      return "invalid input";
   }

   let totalPayment = 0;

   for (payment of arr) {
      const tax = 0.2;
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
