# @plato/signal

[![Node.js CI](https://github.com/plato-app/es-signal/actions/workflows/node.yml/badge.svg)](https://github.com/plato-app/es-signal/actions/workflows/node.yml) [![npm version](https://badge.fury.io/js/%40plato%2Fsignal.svg)](https://badge.fury.io/js/%40plato%2Fsignal)

A `Signal` is a specific event to which observers can subscribe to receive, with strong typing.

See the [API reference](https://plato-app.github.io/es-signal/) for more information.

## Why?

Instead of an inheritable class (like Node's `EventEmitter`), this library promotes [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance).

## Usage

```ts
import { Signal } from "@plato/signal";

const onPing = new Signal();

onPing.receive(() => {
	// Received the "onPing" signal
});

onPing.emit();
```

By default, a `SignalReceiver` will have a generic type of `(...args: any[]) => void`. However, you can strongly type receivers by passing a type variable when constructing a `Signal`:

```ts
// Create a signal with a strongly typed receiver
const onMessage = new Signal<(message: string) => void>();

onMessage.receive((message) => {
  // TODO: Do something with "message", which is a string
});

onMessage.emit("Hello Plato!");
```
