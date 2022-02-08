import { MetaSpec } from "metaliq"
import { max, notBlank } from "metaliq/lib/policies/validation/constraints/foundation"
import { isEmail, isPhoneNumber } from "metaliq/lib/policies/validation/constraints/business"
import { metaView } from "metaliq/lib/policies/presentation/presentation"

import { Contact, HelloWorld } from "./types"
import { greetMeView } from "./views"

// Reference the policy with an export if not specifically importing from it, to include it in type checking
export { TerminologySpec } from "metaliq/lib/policies/terminology/terminology"

/**
 * The default application spec shows a simple (but interactive) "Hello, World!" view.
 * Run with the command `metaliq run`.
 */
export const appSpec: MetaSpec<HelloWorld> = {
  view: metaView(greetMeView)
}

/**
 * A spec showing the use of terms from the Terminology and Validation policies
 * Run with the command `metaliq run contactSpec`.
 */
export const contactSpec: MetaSpec<Contact> = {
  label: "Contact",
  fields: {
    firstName: {
      label: "Given Name",
      validator: notBlank("Please tell us your first name")
    },
    lastName: {
      label: "Family Name",
      validator: notBlank("Please tell us your last name")
    },
    email: {
      label: "Email Address",
      validator: isEmail()
    },
    phone: {
      label: "Australian Phone Number",
      validator: isPhoneNumber()
    },
    age: {
      label: "Age if under 18",
      validator: max(17, "Age only needed for minors")
    }
  }
}
