"use strict";
function password(obj) {
   const name = obj.name;
   const birthYear = obj.birthYear;
   let siteName = obj.siteName;

   if (
      typeof obj !== "object" ||
      !name ||
      !birthYear ||
      !siteName ||
      typeof birthYear !== "number" ||
      birthYear.toString().length !== 4
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
console.log(
   password({ name: "rahat", birthYear: "2002", siteName: "Facebook" })
);
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
console.log(password({}));
