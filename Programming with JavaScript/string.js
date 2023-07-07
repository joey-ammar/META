let greeting = "Howdey";
console.log(greeting.length);
console.log(greeting[0]);
for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

console.log(greeting.charAt(0) + " CHARTAT");
console.log(greeting.concat("JOEY") + " concat");
console.log(greeting.indexOf("w") + " INdexof");
console.log(greeting.lastIndexOf("y") + " lastindexof");
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']);
