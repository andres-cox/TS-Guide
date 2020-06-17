//BOOLEAN

let expression1: boolean = true;
let expression2: boolean
let expression3 = true; //not recommended

(expression1) ? console.log('is true') : console.log('is false');

let expression4: boolean = isItBoolean(); //TS notice that the function return a boolean

function isItBoolean(): boolean {
    return true;
    // return 'true'; //this recognized the error because we declare data type of return
}

//NUMBERS
let number1: number = 5;
let number2: number;    //defualt is undefined
let number3 = 4;        //no recommended

// (number1 > number2) ? console.log('num 1 is greater') : console.log('num 1 is lower');
//this compiles but it shows an error because number 2 is not defined

//STRINGS
let str1: string = "str1";
let str2: string = 'str2';
let str3: string = `str3`; //template strings

function isItStr() { return 'hello' }

// Whit template strings we can do more things
let str4: string = `this is template strings
1. ${str1} string 1
2. function:${ isItBoolean()}, ${isItStr()}
3. result: ${ 4 + 5}
`;

console.log(str4);


//declaring the type of a var helps us to see methods allowed for that var
let concat: string = str1 + ', ' + str2 + str3;
let concatTemplateStr: string = `${str1} ${str2} ${str3}`; // this is the sase as above but in JS 

console.log(concatTemplateStr);

//ANY
let typeAny1: any = 23; //this no compiles as a problem even though we use it later as a string
let typeAny2;           //this is undefined but is type any

//With type any we dont have help by the IDE
typeAny1 = "hello";
console.log(typeAny1.charAt(0));

typeAny1 = 32;
console.log(typeAny1.toFixed(2));

typeAny1 = true;
console.log(typeAny1);

//ARRAYS
let arrNumber: number[] = [1, 23, 423, 4221];
let arrStrings: string[] = ['message1', 'msg2', 'msg3'];



