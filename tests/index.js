const tape = require("tape");
const { Signal } = require("../dist");

tape("smoke", (t) => {
  t.plan(4);

  const sig = new Signal();

  sig.receive((a, b) => {
    t.equal(a, 10);
    t.equal(b, 20);
  });

  sig.receive((a, b) => {
    t.equal(a, 10);
    t.equal(b, 20);
  });

  const rec = () => {
    t.fail("This receiver should have been removed");
  };

  sig.receive(rec);
  sig.ignore(rec);

  sig.emit(10, 20);
});
