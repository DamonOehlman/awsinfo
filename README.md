# awsinfo

Some generally useful information for AWS that is mostly only documented and not
currently in code friendly form.


[![NPM](https://nodei.co/npm/awsinfo.png)](https://nodei.co/npm/awsinfo/)



## Helpers

### Instances

```js
var instances = require('awsinfo/instances');
```

Sourced from <http://aws.amazon.com/ec2/instance-types/>.

### Instance Sizes

```js
var types = require('awsinfo/instancesizes');
```

An array of the sizes of instances that are available.

#### `sizes#range(from, to) => []`

Filter the range of sizes down to only those between the specified
`from` and `to` values.

### Utilities

Some helper functions for massaging instance information into a useful format.

### `toNames(instances) => []`

Convert the multi-dimensional instance information into a flattened
array of instance names, i.e. `['m2.small', 'm2.medium', ...]`.

## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
