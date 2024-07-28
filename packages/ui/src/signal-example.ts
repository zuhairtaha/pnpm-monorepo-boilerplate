import { SignalWatcher } from "@lit-labs/preact-signals";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { count } from "./signals.ts";

@customElement("signal-example")
export class SignalExample extends SignalWatcher(LitElement) {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <p>The count is ${count.value}</p>
      <button @click=${this._onClick}>Increment</button>
    `;
  }

  private _onClick() {
    count.value = count.value + 1;
    this.dispatchEvent(new CountEvent(count.value));
  }
}

export class CountEvent extends Event {
  constructor(public count: number) {
    super("count-changed", { bubbles: true });
  }
}
