# @plato/signal

A signal is a specific event to which observers can subscribe to receive.

Instead of an inheritable class, this object is meant to be created for each distinct signal which is emitted.

## Usage

```ts
import { Signal } from "@plato/signal";

const onMessage = new Signal();

onMessage.receive((message: string) => {
	plato.log("Got message: " + message);
});

onMessage.emit("Hello Plato!");
```
