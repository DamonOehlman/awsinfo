var sizes = require('./instancesizes');

/**
  ### Instances

  ```js
  var instances = require('awsinfo/instances');
  ```

Sourced from <http://aws.amazon.com/ec2/instance-types/>.

**/
var instances = module.exports = [
  [ 't2', sizes.range('micro', 'medium') ],
  [ 'm3', sizes.range('medium', '2xlarge'), { ssd: true } ],
  [ 'c4', sizes.range('large', '8xlarge') ],
  [ 'c3', sizes.range('large', '8xlarge'), { ssd: true } ],
  [ 'g2', [ '2xlarge' ], { ssd: true } ],
  [ 'r3', sizes.range('large', '8xlarge'), { ssd: true } ],
  [ 'i2', sizes.range('xlarge', '8xlarge'), { ssd: true } ],
  [ 'hs1', [ '8xlarge' ], { ssd: true } ]
];
