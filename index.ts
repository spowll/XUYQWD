import { EventsSDK } from "github.com/octarine-public/wrapper/index"

console.log("Heldslo world!")
EventsSDK.on("GameStarted", () => {
	console.log("Hellsssssssssssssssssso world!")
})

console.log("Heldslo world!")
EventsSDK.on("GameEnded", () => {
	console.log("Hellsssssssssssssssssso world!")
})

