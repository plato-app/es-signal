# signal

A signal is a specific event to which observers can subscribe to receive. Instead of an inheritable class, this object is meant to be created for each distinct signal which is emitted.

## Usage

JavaScript:

```js
var Signal = require("signal").Signal;

var onMessage = new Signal();

onMessage.receive(function (message) {
	plato.log("Message: " + message);
});
```

TypeScript:

```ts
import { Signal } from "signal"

let onMessage = new Signal()

onMessage.receive(message => {
	plato.log("Message: " + message)
})
```
