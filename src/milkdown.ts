import { Editor, rootCtx } from "@milkdown/core"
import { html } from "lit"
import { guard } from "lit/directives/guard.js"
import { MetaView } from "../../metaliq/lib/policies/presentation/presentation"
import { App } from "./types"

const editor = Editor.make().config((ctx) => {
  ctx.set(rootCtx, document.querySelector("#milkdown"))
})

export const milkdown: MetaView<App> = (app) => html`
  <div id="milkdown">
    ${guard([app], () => {
      setTimeout(async () => {
        await editor.create()
      }, 1000)
    })}
  </div>
`
