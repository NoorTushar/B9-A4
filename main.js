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

console.log(deleteInvalids([NaN, 1, 12, 0, -1, "hello", undefined]));
console.log(
   deleteInvalids([
      1,
      null,
      undefined,
      18,
      -19,
      NaN,
      "12",
      [1, 2],
      { ob: "lala" },
   ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

function password(obj) {
   const name = obj.name;
   const birthYear = obj.birthYear;
   let siteName = obj.siteName;

   if (
      birthYear.toString().length !== 4 ||
      name === undefined ||
      birthYear === undefined ||
      siteName === undefined
   ) {
      return "invalid";
   }

   siteName = siteName[0].toUpperCase() + siteName.slice(1);

   const password = `${siteName}#${name}@${birthYear}`;

   return password;
}

console.log(
   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
console.log(
   password({ name: "kolimuddin", birthYear: 19999, siteName: "google" })
);

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
