import { fromEvent, interval } from 'rxjs';
import { filter, first, take, takeWhile, takeUntil, last, skip, skipWhile, skipUntil } from 'rxjs/operators';

// filter只是过滤不会完结
// interval(100).pipe(
//   filter(x => x % 3 === 0 && x < 4)
// ).subscribe((e) => {
//   console.log('filter', e);
// },
//   undefined,
//   () => console.log('com')
// )

// fisrt 会导致流完结
// 如果流完结仍然没有符合的数据 那么就会给一个空
// interval(100).pipe(
//   take(3),
//   first(x => x > 5),
// ).subscribe(
//   (e) => console.log('first', e),
//   err => console.log('first err  ', err),
//   () => console.log('com first')
// )

// 而last就是相反了

// take是一个族
// take就是获取多少个数据 等于可以获取多个数据的first
// takeLast是获取多个最后的数据 等于多个的last
// takeWhile功能等于filter 但是第二个参数是index 当出现第一个不能够被takeWhile处理的数据的时候 将会完结
// 可以看到take族都会让流进行完结
// interval(100).pipe(
//   takeWhile(x => x % 3 === 0)
// ).subscribe((e) => {
//   console.log('takeWhile', e);
// },
//   undefined,
//   () => console.log('com takeWhile')
// )

// takeUntil 接受一个observable作为参数 
// 他控制什么时候结束获取参数

// const i$ = interval(150).pipe(take(3), last())
// interval(100).pipe(
//   takeUntil(i$)
// ).subscribe((e) => {
//   console.log('takeUntil', e);
// },
//   undefined,
//   () => console.log('com takeUntil')
// )

// sikp
// 跳过多少个以后重新进行获取
// 在上游完结的时候完结
// interval(1000).pipe(
//   take(3),
//   skip(1)
// ).subscribe((e) => {
//   console.log('skip', e);
// },
//   undefined,
//   () => console.log('com skip')
// )
// 而skipWhile跟sikpUtil就是互相对应的了

// 这里我们要注意的是 
// skipWhile(x => x > 3)
// 因为在一开始的时候就没有出现这个情况 所以从一开始就会进行输出
// 并且即使在后面出现大于3的情况 也不会进行跳过

// interval(1000).pipe(
//   skipWhile(x => x < 3)
// ).subscribe((e) => {
//   console.log('skipWhile', e);
// },
//   undefined,
//   () => console.log('com skip')
// )

interval(1000).pipe(
  skipUntil(interval(1500).pipe(take(3),last()))
).subscribe((e) => {
  console.log('skipUntil', e);
},
  undefined,
  () => console.log('com skip')
)