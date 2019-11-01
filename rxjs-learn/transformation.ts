import { interval, timer } from "rxjs";
import { pluck, map, bufferTime, windowTime, mergeAll, zipAll, buffer, filter, bufferToggle, take, concatAll, concatMap, mergeMap, scan } from "rxjs/operators";

// 转化类型的操作符

// map 跟mapTo就不再进行赘述了

// pluck可以字段处理key不存在的情况
// interval(1000).pipe(
//   map(x => ({ x: {x:x} })),
//   pluck('x','x')
// ).subscribe(item => console.log('pluck', item))


// 我们前面介绍过有损回压 而通过转化类型的操作符我们可以实现无损回压 也就是把累计的数据打包给下游
// 从某种意义上来说 无损回压就是把数据的处理权交给了下游

// buffer产生数组
// window产生observable
// interval(1000).pipe(
//   bufferTime(4000)
// ).subscribe(item => console.log('bufferTime', item))

// interval(1000).pipe(
//   windowTime(4000),
//   mergeAll()
// ).subscribe(item => console.log('windowTime', item))

// bufferWhen windowWhen 则是根据observable进行控制的


// er toggle则是开关 接受两个参数
// 一个开启 一个结束
// interval(100).pipe(
//   bufferToggle(interval(500).pipe(
//     filter(x => Math.random() < 0.2)
//   ), (x) => { console.log('x', x); return timer(x) })
// ).subscribe(item => console.log('bufferToggle', item))

// 而window 跟buffer 则是只需要接受一个 这一个是开始也是结束


// 各种map操作
// cancatMap =cancatAll+map

// 下面的效果是一致的
const project = (x: number) => interval(100).pipe(take(x))
// interval(1000).pipe(
//   map(project),
//   concatAll()
// ).subscribe(item => console.log('concatAll', item))

// interval(1000).pipe(
//   concatMap(project)
// ).subscribe(item => console.log('concatAll', item))


// interval(1000).pipe(
//   mergeMap(project)
// ).subscribe(item => console.log('concatAll', item))

// swichMap 跟 exhaustMap也是一样

// scan可能是RxJS中对构建交互式应用程序最重要的一个操作符
// 因为它能够维持应用的当前状态
// 一方面可以根据数据流持续更新这些状态
// 另一方面可以持续把更新的状态传给另一个数据流用来做必要处理。

// 一个非常有用的作用就是可以产生index给哪些需要index的来用
interval(1000).pipe(
  map(x => Math.floor(Math.random() * 10)),
  scan((a, b,index) => {
    console.log('a', a);
    console.log('b', b);
    return index
  })
).subscribe(x => console.log('scan', x))