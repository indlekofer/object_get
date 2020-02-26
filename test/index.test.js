import assert from 'assert';

import c from '../src/index';

describe('object_get', () => {
  it('basic test', () => {
    assert.equal(c({test: 1, test2: {test4:4}, test3:3}, ["test2", "test4"]), 4);
  });
  it('invalid object should return default value', () => {
    assert.equal(c(null, ["test2","test4"], 'asd'), 'asd');
  });
  it('not found should return default value', () => {
    assert.equal(c({test: 1, test2: {test4:4}, test3:3}, ["test2", "test4", "test5"], 'asd'), 'asd');
  });
  it('basic test nullable = false', () => {
    assert.equal(c({test: 1, test2: {test4: null}, test3: 3}, ["test2", "test4"], 9, false), 9);
  });
});
