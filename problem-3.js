function deleteInvalids(array) {
   if (!Array.isArray(array)) {
      return "ERROR! Please Enter an Array.";
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
