import { interval, timer } from "rxjs";
import { throttleTime, debounceTime, filter, tap, debounce, throttle, auditTime, sample, sampleTime, mapTo, distinct, map, distinctUntilChanged } from "rxjs/operators";

// 加入数据处理不过来了 就需要进行回压控制
// 有损回压

// 节流
// interval(200).pipe(
//   throttleTime(1000)
// ).subscribe(x => console.log(x))

// 防抖
// 上游数据要通过debounceTime 产出数据的速率就一定要更大一点
// interval(1000).pipe(
//   filter(x => Math.random() > 0.5),
//   tap(x => console.log('tap', x)),
//   debounceTime(1500)
// ).subscribe(x => console.log(x))

// 这两个是特例
// 去掉time则是通过数据流来进行控制

// 其实可以猜测一下的，就是当这个数据流产生数据的时候的数据
// 传入一个函数
// 这个函数返回一个 observable
// 在这个observable产生数据 之前 所有的数据都会被丢弃
// 直到这个 observable产生数据之后 再重新产生一个observable

// 实现throtteTime
// interval(500).pipe(
//   throttle(x => timer(1000))
// ).subscribe(x => console.log(x))

// interval(1000).pipe(
//   throttle(x => timer(x * 100))
// ).subscribe(x => console.log(x))

// audit 与 throttle 对应
// 不同的是throttle传递是第一个值
// 而audit是最后一个
// interval(1000).pipe(
//   auditTime(1500)
// ).subscribe(x => console.log('auditTime', x))

// 采样不会被上游的数据的产生效率影响到
// 而是每过多少时间就进行一次采集
// sampleTime会记录每一个时间块上游推下来的最后一个数据，到了每个时间块结尾，就把这个时间块上游的最后一个数据推给下游
// interval(1000).pipe(
//   sampleTime(1600)
// ).subscribe(x => console.log('sampleTime', x))


// 根据数据进行回压控制
// distinct 都是根据数据进行清除操作的
// distincChage是跟上一个进行对比
// interval(500).pipe(
//   // map(x => Math.floor(Math.random() * 100)),
//   map(x => ({ x: Math.floor(Math.random() * 10) })),
//   // distinct(x => x.x,interval(300)) 在300ms后进行数据的清除
//   distinct(x => x.x)
// ).subscribe(x => console.log(x))

interval(500).pipe(
  // map(x => Math.floor(Math.random() * 100)),
  map(x => ({ x: Math.floor(Math.random() * 10) })),
  // distinct(x => x.x,interval(300)) 在300ms后进行数据的清除
  distinctUntilChanged((a, b) => a.x === b.x)
).subscribe(x => console.log(x))