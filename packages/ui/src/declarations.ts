import type { CountEvent, SignalExample } from "./signal-example.ts";

declare global {
  interface WindowEventMap {
    "count-changed": CountEvent;
  }

  interface HTMLElementTagNameMap {
    "signal-example": SignalExample;
  }
}
