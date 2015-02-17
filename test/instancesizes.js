var test = require('tape');
var sizes = require('../instancesizes');

test('instance sizes is an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(sizes));
});

test('instance sizes array has a range function', function(t) {
  t.plan(1);
  t.ok(typeof sizes.range == 'function');
});

test('can get a range from the sizes', function(t) {
  t.plan(1);
  t.deepEqual(sizes.range('micro', 'medium'), ['micro', 'small', 'medium']);
});
