"use strict";
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
console.log(10, checkName("Salman"));
console.log(11, checkName("RAFEE"));
console.log(12, checkName("Jhankar"));
console.log(13, checkName(19));
console.log(14, checkName(["Rashed"]));
