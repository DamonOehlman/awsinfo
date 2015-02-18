var util = require('../util');
var instances = require('../instances');
var test = require('tape');

test('can convert the instances into a flattened array of names', function(t) {
  t.plan(2);
  t.equal(util.toNames(instances)[0], 't2.micro');
  t.equal(util.toNames(instances).slice(-1)[0], 'hs1.8xlarge');
});

test('can filter to instance types that have a medium instance', function(t) {
  t.plan(1);
  t.deepEqual(util.toNames(util.limitSize(instances, 'medium')), ['t2.medium', 'm3.medium']);
});

test('can filter to instances that match a specific type', function(t) {
  t.plan(1);
  t.deepEqual(util.toNames(util.limitType(instances, 't2')), ['t2.micro', 't2.small', 't2.medium']);
});
