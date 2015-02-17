/**
  ### Instance Sizes

  ```
  var types = require('awsinfo/instancesizes');
  ```

  An array of the sizes of instances that are available.

**/
var sizes = module.exports = [
  'micro',
  'small',
  'medium',
  'large',
  'xlarge',
  '2xlarge',
  '4xlarge',
  '8xlarge'
];

/**
  #### `sizes#range(from, to) => []`

  Filter the range of sizes down to only those between the specified
  `from` and `to` values.

**/
sizes.range = function(from, to) {
  var fromIdx = sizes.indexOf(from);
  var toIdx = sizes.indexOf(to);

  if (fromIdx < 0 || toIdx < 0) {
    return [];
  }

  return sizes.filter(function(_, idx) {
    return idx >= fromIdx && idx <= toIdx;
  });
};
