/*let firstname = 'Spencer'
firstname = 'Toby'          // We can re-assign this variable

let lastname = 'Jay'
let fullname = firstname + ' ' + lastname

console.log(`${firstname} ${lastname}`)
console.log(`${firstname} ${lastname}`.length)
console.log(`${firstname} ${lastname}`.trim().length)
console.log(`${firstname} ${lastname}`.toLowerCase())
console.log(`${firstname} ${lastname}`.toUpperCase())
console.log(`${firstname} ${lastname}`.split(' '))


let isEmployed = true
isEmployed = false

console.log(isEmployed)

let age = 1
age = age + 1
let name;
name = 'Cipher'

console.log('My dog ' + name + ' is turnning ' + age)

const date = "December 11, 2020" //We are not allowed to re-assign this variable
console.log(typeof date)


var myVar = "I am \"double quoted\" string inside \"double quoted\""
var myVar = 'I am "double quoted" string inside "double quoted"'
var myVar = `'I am "double quoted" string inside "double quoted"'`

var myStr = "Jello World"
console.log(myStr[0])
myStr[0] = "H" //we cannot change by this
myStr = "Hello World"
myStr= 'Hello World'


var myArr = [10,20,30]
myArr[0]    //gives 10
myArr[0] = 100    // we can modify array like this, but not string


var pushArr = [10,20,"John"]
pushArr.push(["Harry"])

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push(["Kiwi","YumYum"],[100]);       //Add last

var popArr = [[10,20],['H','W'],["Haha","Try"]]
var newArr = popArr.pop()                     //Remove last

var pushArr = [10,20,"John"]
pushArr.shift()                    //Remove first

var pushArr = [10,20,"John"]
pushArr.unshift("Harry")                      //Add First

console.log(pushArr)



function printMessage()
{
    console.log("Hello World")
}

function ourfunctionWithArgs(a,b)
{
    console.log(a-b)
}
ourfunctionWithArgs(50,40)


    
     //Scope Variables

aw=10     // it makes global variable it can access anywhere within the project

var globalVar = 50       //global variable          //can use let here too

function fun1(){
    // var anotherGlobalVar = 100;          //with var, scope within the function, can't access to another function or oustide of that funtion
    anotherGlobalVar = 100;                  //without var, it makes global variable it can access anywhere within the project

}
function fun2(){
    var output = ""
    if (typeof globalVar != "undefined")
    {
        output += "My global " + globalVar;
    }
    if (typeof anotherGlobalVar != "undefined")
    {
        output += " My another global " + anotherGlobalVar
    }
    console.log(output)
}
fun1()
fun2()                //Output: My global 50 My another global 100


var outerWear = "T-shirt"

function myOutfit()
{
    var outerWear = "sweater"
    return outerWear;
}

console.log(myOutfit())             //sweater
console.log(outerWear)              //T-shirt

var outerWear = "T-shirt"

function myOutfit()
{
    outerWear = "sweater"
    return outerWear;
}

console.log(myOutfit())             //sweater
console.log(outerWear)              //sweater


function minusSeven(num)
{
    return num - 7
}
console.log(minusSeven(10))

var sum = 0
function addNumbers()
{
    sum += 3
}
console.log(addNumbers())         //undefined

            //Queue                     
function nextInLine(arr,item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));                      //convert Object into string
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


function equalityfunc(val)                                       // == -> perform type conversion, === -> no type conversion
{
    if (val !== 17)                                               //7 == 7 gives equal , 7 == '7' gives equal (at 2 equality perform type conversion, string converted to number)                                                          //7 == '7' gives equal
    {                                                           //7 === 7 gives qual , 7 === '7' not equal because of restriction (strictly equality operator)                                                       
        console.log("Equal")
    }
    else
    {
        console.log("Not Equal")
    }
}
   
equalityfunc(7)

var hello;
console.log(hello)              //undefined


var count = 0

function countingCards(card)
{
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0)
    {
        holdbet = 'Bet'
    }
    return count + " " + holdbet
}

countingCards(2); countingCards(3); countingCards(7); countingCards('K'); countingCards('A');
console.log(countingCards(4))


            //JS objects
var testObject = {                                                            //properties: value
    "hello": 1,
    "hi": "world",              //if no space use dot notation, we can use bracket notation too
    "bye okay": "take care",      //if space use bracket notation
     16: 'Harry Spencer'
};

var dotNotation = testObject.hi;
var bracketNotation = testObject["bye okay"]
console.log(dotNotation)
console.log(bracketNotation)

//to access number property
var playerName = 16
console.log(testObject[playerName])

//updating object property
testObject.hello = 6
console.log(testObject.hello)


//Add property to object
testObject.name = "Toby"
testObject["wingardium Leviosa"] = "Spell"
console.log(testObject)

//delete property
delete testObject.hi
delete testObject[playerName]
console.log(testObject)


function lookupFunc(val)
{
    var lookup = {
        "hello": "world",
        "what": "How's you doing",
        "bye": "take care",
        "see you": "soon"
    };

    return lookup[val]
}

console.log(lookupFunc("bye"))

var myObj = {
    "hello": "world",
    "what": "How's you doing",
    "bye": "take care",
    "see you": "soon"
}


//if it has that property
function checkProperty(checkObj)
{
    if (myObj.hasOwnProperty(checkObj)){
        return myObj[checkObj]
    }
    else
    {
        return "Not Found"
    }
}

console.log(checkProperty(16))

          //Nested objects
var myMusic = [
  {
    "hello": "world",
    "what": "How's you doing",
    "bye": "take care",
    "see you": "soon",
    "vowels" : [
        'a',
        'e',
        'i',
        'o',
        'u'
    ],
    "gold": true
  },
  {
    "hi": "world",
    "who": "How's you doing",
    "tata": "take care",
    "okay": "soon",
    "colors" : [
        "red",
        "blue",
        "white"
    ],
    "diamond": false
  }
]

// console.log(myMusic)
// console.log(myMusic[0].vowels[4])
console.log(myMusic[0]["see you"])

//Accessing nested objects
var myMusic =  {
 "hello" : {
    "what":  {
         "bye": "take care",
          "see you": "soon"
    },
     "who" : {
         "are you?": "okay"
     }
  } 
};

console.log(myMusic.hello.what["see you"])
console.log(myMusic.hello.who["are you?"])



                 //Record Collection
var collection = {
    "2458" : {
        "hi": "world",
        "who": "How's you doing",
        "colors" : [
            "red",
            "blue",
            "white"
        ]
    },
    "2459" : {
        "howdy": "world",
        "great": "How's you doing",
        "flowers" : [
            "rose",
            "sunflower"
        ]
    },
    "1459" : {
        "goodbye": "world",
        "see you" : []
    },
    "5895" : {
        "movie": "harry potter"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updatedRecords(id,prop,val)
{
    // if (val === "")
    // {
    //     delete collection[id][prop]
    // }
    // else if (prop == "flowers")
    // {
    //     collection[id][prop] = collection[id][prop] || []           //if there is no array of flowers, then create empty array and if there is just copy that array
    //     collection[id][prop].push(val)
    // }
    // else
    // {
    //     collection[id][prop] = val
    // }
    return collection
}

// console.log(updatedRecords(2459,"flowers","tulip"))
console.log(2459,"flowers","hello")


var myArray = []
var i = 0
while (i<5) {
    myArray.push(i)
    i++
}

console.log(myArray)

Math.random()
Math.floor(Math.random())                            //random whole number
parseInt(str)               //convert to int            e.g str ='56'


//Ternary Operator
a === b ? true : false  

               //ES6 
var catName = "Quincy"
var catName = "Milo"                             //var allows declare multiple times same variable
catName = "Kindo"                                //we can change the var value by setting the same variavle 

let dogName = "Quincy"
let dogName = "Milo"                               //let does not allow to declare same variable in multiple times
dogName = "Kindo"                                //we can change the let value by setting the same variavle 

//catches common coding mistakes in unsave action -> "use strict"

function checkScope()                                      //block scope is: block scope
{                                                          //function scope is: block scope
    var i = "function scope"
    if (true)
    {
        var i = "block scope"
        console.log("block scope is: " + i)
    }
    console.log("function scope is: " + i)
    return i
}

checkScope()

function checkScope()                                      //block scope is: block scope
{                                                          //function scope is: function scope
    let i = "function scope"
    if (true)
    {
        let i = "block scope"
        console.log("block scope is: " + i)
    }
    console.log("function scope is: " + i)
    return i
}

checkScope()


//const -> we can't re-assign variables but we can update const array and const objects
const s = [2,7]
s[0] = 10
s[1] = 17


const MATH_CONSTANTS = {
    PI : 3.14
}

try {
    MATH_CONSTANTS.PI = 99
}catch(err)
{
    console.log(err)
}

console.log(MATH_CONSTANTS.PI)


// But we can freeze to not update object by object.freeze
const MATH_CONSTANTS = {
    PI : 3.14
}
Object.freeze(MATH_CONSTANTS)
try {
    MATH_CONSTANTS.PI = 99
}catch(err)
{
    console.log(err)
}

console.log(MATH_CONSTANTS.PI)

//IMPORTANT NOTE: we update array and object of variable (var , let , const)
         
function normalFunction()
{
    console.log("Normal Function")
}
var magic = function(){     //Anonymous function
    return 'Hello World'
}



//Arrow Functions    : better to use when one function contains another function as an argument
var magic = (i) => {
    i++
    return i
}

var anotherMagic = () => 'hello world' //ARROW FUNCTIONS       //if we have single line in return
console.log(anotherMagic())


var magicFuncWithPara = (arr1,arr2) => arr1.concat(arr2)
console.log(magicFuncWithPara([1,2],[5,6,7]))


const realNumberedArray = [2,-3.19,4,0,7,-4,5-6.2]

const squareList = (arr) => {
    // const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0)
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x=> x*x)     //here two arrow functions are used, if we have one argument we can write like that
    return squaredIntegers
}

console.log(squareList(realNumberedArray))


function sum(x,y,z){
    const args = [x,y,z]
    return args.reduce((a,b) => a+b,0)
}
console.log(sum(1,2,3))
//before
//rest argument change argument into array
//after
function sum(...args){
    return args.reduce((a,b) => a+b,0)
}
console.log(sum(1,2,3,4))  //now pass any number of arguments


const i = [10,70]
// let j = i             output : [20,70]
let j = [...i]         //  output: [10,70]        //by using spread operator
i[0] = 20
console.log(j)


//destructing assignment to assign variables from objects
const voxel = {x:3.4 , y:7.3, z: 10.5}
var a = voxel.x
var b = voxel.y
var c = voxel.z

//now we can assign like that
const { x:a , y:b , z:c} = voxel

*/
const LOCAL_FORECAST = {
    tomorrow : {
        min : 10,
        max : 20
    }
}
function maxOfTomorrow(localForecast)
{
    const { tomorrow : { max : maxTomorrow }} = localForecast
    return maxTomorrow
}
console.log(maxOfTomorrow(LOCAL_FORECAST))

//template strings 

var name = "Guzman"
var thing = "Party"

console.log(`my name is ${name} 
and i like to ${thing}`)


/* var -> declare var function scope outside not access, but in block it can access
let,const -> declare let in function scope outside not access, not in block scope.
var,let -> setting/changing value in function and block scope can access */ 



class Parent {
    age = 27
    constructor() {

    }
    static bar(){

    }
    foo()
    {

    }
}

/*var parent = new Parent()
parent.age
Parent.bar()*/

class Child extends Parent {
    constructor(){
        super()
    }
    baz(){

    }
}

var child = new Child()
child.baz()
child.foo()    //can not do because static
child.bar()


//we can use destruction to load libraries
import { each, omit } from "loadash"

import { foo as foolish, bar } from "myModule"
// or we can export things
export var foo = 3;
export function bar(){

}
