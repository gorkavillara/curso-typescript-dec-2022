import { choices } from "../assets";

const choicesForType = [...choices] as const

type Choice = typeof choicesForType[number]

const miChoice: Choice = ""

console.log(miChoice)