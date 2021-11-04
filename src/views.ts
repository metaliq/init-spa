import { html } from "lit"
import { up } from "@metaliq/up"

import { HelloWorld } from "./types"

/**
 * A view template function, using Google's `lit` package and the built-in power of JS template literals
 */
export const greetMeView = (model: HelloWorld) => html`
  <div>Enter your name (or "World" if you prefer)</div>
  <input type="text" @input=${up(setName, model)}/>
  ${model.name ? html`
    <div>Hello, ${model.name}!</div>
  ` : ""}
`

/**
 * A process that accepts the model and updates its name
 */
function setName (model: HelloWorld, event: Event) {
  model.name = (<HTMLInputElement>event.target).value
}
