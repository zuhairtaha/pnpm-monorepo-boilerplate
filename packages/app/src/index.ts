import "@tahasoft/ui/src/declarations.ts";
import "@tahasoft/ui/src/signal-example";
import { count } from "@tahasoft/ui/src/signals.ts";

const el = document.createElement("signal-example");
document.body.append(el);

setInterval(() => {
  count.value = count.value + 1;
}, 1000);

window.addEventListener("count-changed", evt => {
  console.log("count-changed", evt.count);
});
