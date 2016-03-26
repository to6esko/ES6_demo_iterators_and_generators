(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _marked = [createIterator].map(regeneratorRuntime.mark);

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

function createIterator() {
	return regeneratorRuntime.wrap(function createIterator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 1;

				case 2:
					_context.next = 4;
					return 2;

				case 4:
					_context.next = 6;
					return 3;

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var iterator1 = createIterator();

console.log(iterator1.next().value); //1
console.log(iterator1.next().value); //2
console.log(iterator1.next().value); //3

/*

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
let values2 = [1, 2, 3];
let iterator4 = values2[Symbol.iterator]();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
*/

},{}]},{},[1]);
