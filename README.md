# @plato/signal

A signal is a specific event to which observers can subscribe to receive.

Instead of an inheritable class (like Node's `EventEmitter`), this object is meant to be created for each distinct signal which is emitted.

## Usage

```ts
import { Signal } from "@plato/signal";

const onMessage = new Signal();

onMessage.receive((message: string) => {
	// TODO: Do something with "message"
});

onMessage.emit("Hello Plato!");
```

By default, Receivers have a generic type of `(...args: any[]) => void`. However, you can strongly type receivers by passing a type variable when constructing a `Signal`:

```ts
// Create a signal with a strongly typed receiver
const onMessage = new Signal<(message: string) => void>();

onMessage.receive((message) => { // <-- Type inference
  // TODO: Do something with "message"
});

onMessage.emit("Hello Plato!"); // <-- Strongly typed
```
