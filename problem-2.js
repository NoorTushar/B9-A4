function checkName(name) {
   if (typeof name !== "string") {
      return "invalid";
   }
   const nameLength = name.length;
   const lastCharacter = name[nameLength - 1];

   if (
      lastCharacter === "A" ||
      lastCharacter === "a" ||
      lastCharacter === "y" ||
      lastCharacter === "Y" ||
      lastCharacter === "i" ||
      lastCharacter === "I" ||
      lastCharacter === "e" ||
      lastCharacter === "E" ||
      lastCharacter === "o" ||
      lastCharacter === "O" ||
      lastCharacter === "u" ||
      lastCharacter === "U" ||
      lastCharacter === "w" ||
      lastCharacter === "W"
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
