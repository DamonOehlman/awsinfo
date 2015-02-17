var util = require('../util');
var instances = require('../instances');
var test = require('tape');

test('can convert the instances into a flattened array of names', function(t) {
  t.plan(2);
  t.equal(util.toNames(instances)[0], 't2.micro');
  t.equal(util.toNames(instances).slice(-1)[0], 'hs1.8xlarge');
});
