const tape = require("tape");
const { Signal } = require("../dist/cjs");

tape("receive", (t) => {
	t.plan(3);

	const sig = new Signal();

	sig.receive((a, b) => {
		t.equal(a, 10);
		t.equal(b, 20);
	});

	t.equal(sig.receiverCount, 1);

	sig.emit(10, 20);
});

tape("ignore", (t) => {
	const sig = new Signal();

	const rec = () => {
		t.fail("This receiver should have been ignored");
	};

	sig.receive(rec);
	sig.ignore(rec);

	sig.emit();
	t.end();
});

tape("purge", (t) => {
	const sig = new Signal();

	sig.receive(() => {
		t.fail("This receiver should have been purged");
	});

	sig.purge();
	sig.emit();
	t.end();
});
