import { CountEvent } from "@tahasoft/shared/src/CountEvent.ts";
import "@tahasoft/ui/src/signal-example";
import { SignalExample } from "@tahasoft/ui/src/signal-example.ts";
import { count } from "@tahasoft/ui/src/signals.ts";

const el = document.createElement("signal-example") as SignalExample;
document.body.append(el);

setInterval(() => {
  count.value = count.value + 1;
}, 1000);

window.addEventListener("count-changed", (evt: CountEvent) => {
  console.log("count-changed", evt.count);
});
