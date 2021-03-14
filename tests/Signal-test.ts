import * as tape from "tape";
import { Signal } from "../lib";

tape("Signal.receive", (t) => {
	t.plan(3);

	const sig = new Signal();

	sig.receive((a, b) => {
		t.equal(a, 10);
		t.equal(b, 20);
	});

	t.equal(sig.receiverCount, 1);

	sig.emit(10, 20);
});

tape("Signal.ignore", (t) => {
	const sig = new Signal();

	const rec = () => {
		t.fail("This receiver should have been ignored");
	};

	sig.receive(rec);
	sig.ignore(rec);

	sig.emit();
	t.end();
});

tape("Signal.purge", (t) => {
	const sig = new Signal();

	sig.receive(() => {
		t.fail("This receiver should have been purged");
	});

	sig.purge();
	sig.emit();
	t.end();
});
