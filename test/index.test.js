import assert from 'assert';

import c from '../src/index';

describe('get_in', () => {
  it('basic get_in test', () => {
    assert.equal(c({test: 1, test2: {test4:4}, test3:3}, ["test2", "test4"]), 4);
  });
  it('invalid object should return default value', () => {
    assert.equal(c(null, ["test2","test4"], 'asd'), 'asd');
  });
  it('not found should return default value', () => {
    assert.equal(c({test: 1, test2: {test4:4}, test3:3}, ["test2", "test4", "test5"], 'asd'), 'asd');
  });
});
