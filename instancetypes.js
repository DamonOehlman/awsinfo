var types = module.exports = [
  'micro',
  'small',
  'medium',
  'large',
  'xlarge',
  '2xlarge',
  '4xlarge',
  '8xlarge'
];

types.range = function(from, to) {
  var fromIdx = types.indexOf(from);
  var toIdx = types.indexOf(to);

  if (fromIdx < 0 || toIdx < 0) {
    return [];
  }

  return types.filter(function(_, idx) {
    return idx >= fromIdx && idx <= toIdx;
  });
};
