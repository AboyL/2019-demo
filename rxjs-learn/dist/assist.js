"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// count max min reduce 必须等到完结
rxjs_1.interval(100).pipe(operators_1.take(3), operators_1.count()).subscribe(function (e) { return console.log('count  ', e); });
rxjs_1.interval(100).pipe(operators_1.take(3), operators_1.max()).subscribe(function (e) { return console.log('max  ', e); });
rxjs_1.interval(100).pipe(operators_1.take(3), operators_1.min()).subscribe(function (e) { return console.log('min  ', e); });
rxjs_1.interval(100).pipe(operators_1.take(4), operators_1.reduce(function (a, b) { return a + b; })).subscribe(function (e) { return console.log('reduce  ', e); });
// boolean类型的操作符有
// every find findIndex de
rxjs_1.interval(100).pipe(operators_1.take(4), operators_1.every(function (x) { return x < 10; })).subscribe(function (e) { return console.log('every  ', e); });
rxjs_1.interval(100).pipe(operators_1.take(4), operators_1.find(function (x) { return x < 10; })).subscribe(function (e) { return console.log('find  ', e); });
rxjs_1.interval(100).pipe(operators_1.take(4), operators_1.findIndex(function (x) { return x < 10; })).subscribe(function (e) { return console.log('findIndex  ', e); });
