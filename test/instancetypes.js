var test = require('tape');
var types = require('../instancetypes');

test('instance types is an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(types));
});

test('instance types array has a range function', function(t) {
  t.plan(1);
  t.ok(typeof types.range == 'function');
});

test('can get a range from the types', function(t) {
  t.plan(1);
  t.deepEqual(types.range('micro', 'medium'), ['micro', 'small', 'medium']);
});
