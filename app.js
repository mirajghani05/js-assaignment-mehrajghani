// FULLNAME GREETING CHAP 1
var user = prompt("what is your frist name")
var lastName = prompt("what is your last name")
var fullName = user + "" + lastName;
console.log('Hello Jani', fullName)
// LENGHT OF MOBILE CHAP  2
var mobile = prompt("what is your fev mobile")
var lenght = mobile.length;
console.log("your fev mobile ", " {model}", "has ","{lenght}")
// pakistani  CHAP 3
var word = "pakistani"
var index = word.indexOf("n");
console.log(`index of "n" in "${word}" : ${index}`)
// last index CHAP4
var phrase ="Hello World"
var lastIndex = phrase.lastIndexOf("l");
console.log(`last index of "l" in"${phrase}" : ${lastIndex}`);
// CAHPTER 5 3RD INDEX
var string = "pakistani"
var thirdIndex = string.indexOf("i");
console.log(`the 3rd index of "i" in "${string}" : ${thirdIndex}" `);
// 7 
var city ="hyderabad"
var newCity = city.replace("hyder", "islam");
console.log("original word", city);
console.log("after replace", newCity);
// 8 
var message ="Miraj and Basheer are best friend. They play cricket and vollyball together."
var newMessage = message.replace(/and/g, "&");
console.log("original word:", message);
console.log("change into deff:", newMessage)
// CHAPTER 9
var str = "435"
var num = Number(str)
console.log("value:", str)
console.log("type:", typeof str);

console.log("value:", num)
console.log("type", typeof num)
// chapter 10 
var userInput = prompt("Enter any word")
var upperCaseText = userInput.toUpperCase();
console.log("original", userInput);
console.log("Upper", upperCaseText)
// 11
var input = prompt("Enter your city")
var words = input.toLowerCase().split("");
var titleCase ="";
for (var i = 0; i < words.length; i++ ){
titleCase += words[i].charAt(0).toUpperCase()+ 
words[i].slice(1)+ "";
}
console.log("Original", input);
console.log("title case", titleCase.trim)
// 12
var numm =35.36;
var strings = numm.toString()
var result = strings.replace(".","");
console.log("original", numm);
console.log("After Canverstion", result);
// 13
var username = prompt("Enter username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);

  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isValid = false;
    break;
  }
}

if (isValid) {
  console.log("Valid username:", username);
} else {
  console.log("Invalid username! Please enter a valid username.");
}
// 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
var searchItem = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem) {
    found = true;
    console.log(userInput + " is available at index " + i + " in our bakery.");
    break;
  }
}

if (!found) {
  console.log("We are sorry. " + userInput + " is not available in our bakery.");
}
// THE END SIR

