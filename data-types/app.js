//BOOLEAN
var expression1 = true;
var expression2;
var expression3 = true; //not recommended
(expression1) ? console.log('is true') : console.log('is false');
var expression4 = isItBoolean(); //TS notice that the function return a boolean
function isItBoolean() {
    return true;
    // return 'true'; //this recognized the error because we declare data type of return
}
//NUMBERS
var number1 = 5;
var number2; //defualt is undefined
var number3 = 4; //no recommended
// (number1 > number2) ? console.log('num 1 is greater') : console.log('num 1 is lower');
//this compiles but it shows an error because number 2 is not defined
//STRINGS
var str1 = "str1";
var str2 = 'str2';
var str3 = "str3"; //template strings
function isItStr() { return 'hello'; }
// Whit template strings we can do more things
var str4 = "this is template strings\n1. " + str1 + " string 1\n2. function:" + isItBoolean() + ", " + isItStr() + "\n3. result: " + (4 + 5) + "\n";
console.log(str4);
//declaring the type of a var helps us to see methods allowed for that var
var concat = str1 + ', ' + str2 + str3;
var concatTemplateStr = str1 + " " + str2 + " " + str3; // this is the sase as above but in JS 
console.log(concatTemplateStr);
//ANY
var typeAny1 = 23; //this no compiles as a problem even though we use it later as a string
var typeAny2; //this is undefined but is type any
//With type any we dont have help by the IDE
typeAny1 = "hello";
console.log(typeAny1.charAt(0));
typeAny1 = 32;
console.log(typeAny1.toFixed(2));
typeAny1 = true;
console.log(typeAny1);
//ARRAYS
var arrNumber = [1, 23, 423, 4221];
var arrStrings = ['message1', 'msg2', 'msg3'];
