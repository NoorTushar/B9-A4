/*function signature/sample */
function password(obj) {
   // { name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
   let name = obj.name;
   let birthYear = obj.birthYear;
   let siteName = obj.siteName;

   if (
      (birthYear.toString().length < 4 || name,
      birthYear,
      siteName === undefined)
   ) {
      return "invalid";
   }

   siteName = siteName[0].toUpperCase() + siteName.slice(1);
   let password = `${siteName}#${name}@${birthYear}`;
   return password;
}

console.log(
   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
