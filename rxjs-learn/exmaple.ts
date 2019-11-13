import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";

// interval(1000).pipe(
//   map(x => x * 10)
// ).subscribe(x => console.log(x))

// const test$ = new Observable(subscribe => {
//   subscribe.next(1)
//   subscribe.next(2)
//   subscribe.next(3)
//   if (Math.random() > 0.9) {
//     subscribe.complete()
//   } else {
//     throw "1111";
//   }
// })
// test$.subscribe({
//   next(v) {
//     console.log(v)
//   },
//   complete() {
//     console.log('complete')
//   },
//   error(err) {
//     console.log('err', err)
//   }
// })

const test2$ = new Observable(subscribe => {
  let count = 0
  setInterval(() => {
    subscribe.next(++count)
  }, 1000)
})
test2$.subscribe({
  next(v) {
    console.log(v)
  },
  complete() {
    console.log('complete')
  },
  error(err) {
    console.log('err', err)
  }
})