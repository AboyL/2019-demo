import { fromEvent, interval } from 'rxjs';
import { count, takeUntil, take, max, min, reduce, every, find, findIndex } from 'rxjs/operators';

// count max min reduce 必须等到完结
interval(100).pipe(
  take(3),
  count()
).subscribe((e) => console.log('count  ', e))

interval(100).pipe(
  take(3),
  max()
).subscribe((e) => console.log('max  ', e))

interval(100).pipe(
  take(3),
  min()
).subscribe((e) => console.log('min  ', e))

interval(100).pipe(
  take(4),
  reduce((a, b) => a + b)
).subscribe((e) => console.log('reduce  ', e))

// boolean类型的操作符有
// every find findIndex de
interval(100).pipe(
  take(4),
  every(x => x < 10)
).subscribe((e) => console.log('every  ', e))

interval(100).pipe(
  take(4),
  find(x => x <10)
).subscribe((e) => console.log('find  ', e))

interval(100).pipe(
  take(4),
  findIndex(x => x <10)
).subscribe((e) => console.log('findIndex  ', e))
