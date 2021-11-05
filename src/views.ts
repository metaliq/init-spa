import { html } from "lit"
import { up } from "@metaliq/up"

import { HelloWorld } from "./types"

/**
 * A view template function, using Google's `lit` package and the built-in power of JS template literals.
 */
export const greetMeView = (model: HelloWorld) => html`
  <label class="mq-label">
    Enter your name (or "World" if you prefer)
    <input class="mq-input" type="text" 
      @input=${up(setName, model)}>
  </label>
  ${model.name ? html`
    <p>Hello, ${model.name}!</p>
  ` : ""}
`

/**
 * A process that sets the `name` value on the  model from the event target.
 */
function setName (model: HelloWorld, event: Event) {
  model.name = (<HTMLInputElement>event.target).value
}
