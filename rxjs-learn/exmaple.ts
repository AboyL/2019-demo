import { interval } from "rxjs";
import { map } from "rxjs/operators";

interval(1000).pipe(
  map(x => x * 10)
).subscribe(x => console.log(x))