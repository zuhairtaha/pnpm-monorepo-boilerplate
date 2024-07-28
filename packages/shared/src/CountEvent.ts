export class CountEvent extends Event {
  constructor(public count: number) {
    super("count-changed", {
      bubbles: true
    });
  }
}

declare global {
  interface WindowEventMap {
    "count-changed": CountEvent;
  }
}
