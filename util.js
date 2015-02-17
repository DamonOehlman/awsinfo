var flatten = require('whisk/flatten');

/**
  ### Utilities

  Some helper functions for massaging instance information into a useful format.

**/

/**
  ### `toNames(instances) => []`

  Convert the multi-dimensional instance information into a flattened
  array of instance names, i.e. `['m2.small', 'm2.medium', ...]`.

**/
exports.toNames = function(instances) {
  var combined = instances.map(function(data) {
    return data[1].map(function(size) {
      return data[0] + '.' + size;
    });
  });

  return combined.reduce(flatten);
};
