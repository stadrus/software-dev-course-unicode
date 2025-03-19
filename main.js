inputString = "Code";
console.log(inputString.charCodeAt(0));
console.log(inputString.charCodeAt(2));
let firstCodePoint = 67;
let thridCodePoint = 100;

let codes = [72,101,108,108];
let characters = String.fromCharCode(codes[0])+String.fromCharCode(codes[1])+String.fromCharCode(codes[2])+String.fromCharCode(codes[3]);
console.log(characters);
let wordFromCodePoints = "Hell";

let codeString = "Launch";
console.log(codeString.charCodeAt(0));
console.log(codeString.charCodeAt(5));

let launchFirstChar = 76;
let launchLastChar = 104;
let swappedChar = `${String.fromCharCode(launchLastChar)}aunc${String.fromCharCode(launchFirstChar)}`;
console.log(swappedChar);
let swappedString = "hauncL";