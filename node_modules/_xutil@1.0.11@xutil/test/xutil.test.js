'use strict';

const _ = require('..');
const assert = require('assert');

describe('test', function() {
  it('base', function() {
    assert.ok(_.ipv4);
    assert.ok(_.uuid());
  });
});
