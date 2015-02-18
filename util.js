var flatten = require('whisk/flatten');
var eq = require('whisk/equality');

/**
  ### Utilities

  Some helper functions for massaging instance information into a useful format.

**/

exports.limitSize = function(instances, size) {

  function justMatchingSize(data) {
    return [data[0], data[1].filter(eq(size))].concat(data.slice(2));
  }

  function hasSize(data) {
    return data[1].length > 0;
  }

  return instances.map(justMatchingSize).filter(hasSize);
};

exports.limitType = function(instances, type) {
  return instances.filter(function(data) {
    return data[0] === type;
  });
};

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
