const wordCountEngine = require('./challenge');
const assert = require('assert');

// eslint-disable-next-line no-undef
describe('count number of words in document', function () {
  // eslint-disable-next-line no-undef
  it('it should return [ ["practice", "3"], ["perfect", "2"], ["makes", "1"], ["youll", "1"], ["only", "1"], ["get", "1"], ["by", "1"], ["just", "1"] ]', function () {
    const sampleDocument =
      "Practice makes perfect. you'll only get Perfect by practice. just practice!";
    const result = [
      ['practice', '3'],
      ['perfect', '2'],
      ['makes', '1'],
      ['youll', '1'],
      ['only', '1'],
      ['get', '1'],
      ['by', '1'],
      ['just', '1'],
    ];
    assert.deepStrictEqual(wordCountEngine(sampleDocument), result);
  });
});
