// Iterators
/*
function createIterator(items) {
	var i = 0;
	return {
		next: function() {
			var done = (i >= items.length);
			var value = !done ? items[i++] : undefined;

			return {
				done: done,
				value: value
			}
		}
	};
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// за всички по-нататъшни извиквания
console.log(iterator.next()); // "{ value: undefined, done: true }"
*/

//Generators

function* createIterator() {
	yield 1;
	yield 2;
	yield 3;
}

let iterator1 = createIterator();

console.log(iterator1.next().value); //1
console.log(iterator1.next().value); //2
console.log(iterator1.next().value); //3



//for
let createIterator1 = function*(items) {
	for (let i = 0; i < items.length; i++) {
		yield items[i];
	}
}

let iterator2 = createIterator1([1, 2, 3]);

console.log(iterator2.next()); // "{ value: 1, done: false }"
console.log(iterator2.next()); // "{ value: 2, done: false }"
console.log(iterator2.next()); // "{ value: 3, done: false }"
console.log(iterator2.next()); // "{ value: undefined, done: true }"

// за всички по-нататъшни извиквания
console.log(iterator2.next()); // "{ value: undefined, done: true }"

var o = {
	createIterator2: function*(items) {
		for (let i = 0; i < items.length; i++) {
			yield items[i];
		}
	}
};
let iterator3 = o.createIterator2([1, 2, 3]);

var o = { * createIterator2(items) {
		for (let i = 0; i < items.length; i++) {
			yield items[i];
		}
	}
};

let iterator3 = o.createIterator2([1, 2, 3]);


//for-of

let values = [1, 2, 3];
for (let num of values) {
	console.log(num);
}


//Итератор по подразбиране
function isIerable(object) {
	return typeof object[Symbol.iterator] === 'function';
}
console.log(isIerable([1, 2, 3])); //true
console.log(isIerable('Hello')); //true
console.log(isIerable(new Map())); //true
console.log(isIerable(new Set())); //true
console.log(isIerable(new WeakMap())); //false
console.log(isIerable(new WeakSet())); //false


let values2 = [1, 2, 3];
let iterator4 = values2[Symbol.iterator]();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"


//Създаване на iterables

let collection = {
	items: [],
	* [Symbol.iterator]() {
		for (let item of this.items) {
			yield item;
		}
	}
};
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
	console.log(x); //1 2 3
}



//Iteratoris for arrays, maps and sets

//entries() връша ключове и данни

let colors = ['red', 'green', 'blue'];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Undersanding ECMAScript 6');
data.set('format', 'ebook');

for (let entry of colors.entries()) {
	console.log(entry);
}
//[0, "red"] 
//[1, "green"] 
//[2, "blue"]

for (let entry of tracking.entries()) {
	console.log(entry);
}
//[1234, 1234]
//[5678, 5678]
//[9012, 9012]

for (let entri of data.entries()) {
	console.log(entry);
}
//["title", "Understanding ECMAScript 6"]
//["format", "ebook"]


//values() връща само данни

let colors = ["red", "green", "blue"];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let value of colors.values()) {
	console.log(value);
}
//"red"
//"green"
//"blue"

forfor(let value of tracking.values()) {
		console.log(value);
	}
	//1234
	//5678
	//9012
for (let value of data.values()) {
	console.log(value);
}
//"Understanding ECMAScript 6"
//"ebook"



//keys() връща само ключове

let colors = ["red", "green", "blue"];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let key of colors.keys()) {
	console.log(key);
}
//0 
//1 
//2 

for (let key of tracking.keys()) {
	console.log(key);
}
//1234 
//5678
//9012

for (let key of data.keys()) {
	console.log(key);
}
//"title"
//"format"


//по подразбиране

let colors = ["red", "green", "blue"];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

//също, като използването на colors.values()
for (let value of colors) {
	console.log(value);
}
//"red"
//"green"
//"blue"
//също, като използването на tracking.values()
for (let num of tracking) {
	console.log(num);
}
//1234 
//5678 
//9012 
//също, като използването на data.entries()
for (let entry of data) {
	console.log(entry);
}
//["title", "Understanding ECMAScript 6"]
//["format", "ebook"]

//разграждане по подразбиране

let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
// също, като използването на data.entries()()
for (let [key, value] of data) {
	console.log(key + '=' + value);
}


//Stirng iterators

var message = "A ð ®• B";
for (let i = 0; i < message.length; i++) {
	console.log(message[i]);
};
//A 
//(blank)
//(blank)
//(blank)
//(blank)
//B


var message1 = "A ð ®• B";
for (let c of message1) {
	console.log(c);
}
//A 
//(blank)
//ð ®• 
//(blank)
//B

//NodeList
var divs = document.getElementsByTagName('div');
for (let div of divs) {
	console.log(div.id);
}


//Spread

let map = new Map([
		['name', 'Todor'],
		['age', 47]
	]),
	array = [...map];
console.log(array); //[['name','Todor'],['age',47]]

let smallNumber = [1, 2, 3],
	bigNumber = [100, 101, 102],
	allNumbers = [0, ...smallNumber, ...bigNumber];
console.log(allNumbers.length); //7
console.log(allNumbers); //[0,1,2,3,100,101,102]

//Подаване на параметри на итераторите

function* createIterator3() {
	let first = yield 1;
	let second = yield first + 2;
	yield second + 3;
}
let iterator5 = createIterator3();

console.log(iterator5.next()); // "{ value: 1, done: false }"
console.log(iterator5.next(4)); // "{ value: 6, done: false }"
console.log(iterator5.next(5)); // "{ value: 8, done: false }"
console.log(iterator5.next()); // "{ value: undefined, done: true }"



//Error
function* createIterator4() {
	let first1 = yield 1;
	let second1;

	try {
		second1 = yield first1 + 2;
	} catch (ex) {
		second1 = 6;
	}
	yield second1 + 3;
}
let iterator6 = createIterator4;

console.log(iterator6.next()); // "{ value: 1, done: false }"
console.log(iterator6.next(4)); // "{ value: 6, done: false }"
console.log(iterator6.throw(new Error('Boom'))); // "{ value: 9, done: false }"
console.log(iterator6.next()); // "{ value: undefined, done: true }"


//Return

function* createIterator5() {
	yield 1;
	return;
	yield 2;
	yield 3;
}

let iterator7 = createIterator5();

console.log(iterator7.next()); // "{ value: 1, done: false }"
console.log(iterator7.next()); // "{ value: undefined, done: true }"



function* createIterator6() {
	yield 1;
	return 42;
}
let iterator8 = createIterator6();

console.log(iterator8.next()); // "{ value: 1, done: false }"
console.log(iterator8.next()); // "{ value: 42, done: true }"
console.log(iterator8.next()); // "{ value: undefined, done: true }"



//Делегирани генератори

function* createNumberIterator() {
	yield 1;
	yield 2;
}

function* createColorIternator() {
	yield 'red';
	yield 'green';
}

function* createCombinedIternator() {
	yield * createNumberIterator();
	yield * createCombinedIternator();
	yield true;
}

var iterator9 = createCombinedIternator();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: "red", done: false }"
console.log(iterator.next()); // "{ value: "green", done: false }"
console.log(iterator.next()); // "{ value: true, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"


function* createNumberIterator1() {
	yield 1;
	yield 2;
	yield 3;
}

function* createRepeatingIternator(count) {
	for (let i = 0; i < count; i++) {
		yield 'repeat';
	};
}

function* createCombinedIternator1() {
	let result = yield * createNumberIterator1();
	yield result; //for yield 3;
	yield * createRepeatingIternator(result);
}
var iterator10 = createCombinedIternator1();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: "repeat", done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"


//Asynchronick task running

let fs = require('fs');
fs.readFile('config.json', function(err, contents) {
	if (err) {
		throw err;
	}
	doSomethingWith(contents);
	console.log('Done');
});

function run(taskDef) {
	let task = taskDef();
	let result = task.next();

	function step() {
		if (!result.done) {
			result = task.next();
			step();
		}
	}
	step();
}

run(function*() {
	console.log(1);
	yield;
	console.log(2);
	yield;
	console.log(3);
});

//with data

function run(taskDef) {
	//създаване на итератор, предоставен на друго място
	let task = taskDef();
	//стартиране на task
	let result = task.next();
	//рекурсивна функция, която държи извикванията към next()
	function step() {
		result - task.next(result.value);
		step();
	}
	//старт на процеса
	step();
}

run(function*() {
	let value - yield 1;
	console.log(value); // 1
	values = yield value + 3;
	console.log(value);
})