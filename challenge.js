const wordCountEngine = (document) => {
  //your code goes here
  let result = [];
  const docArray = document.replace(/[.'!]/g, '').toLowerCase().split(' ');
  const docSet = new Set(docArray);
  docSet.forEach((setElement) => {
    let occurrances = docArray.filter((e) => e === setElement).length;
    result.push([setElement, occurrances.toString()]);
  });
  return result.sort((a, b) => parseInt(b[1]) - a[1]);
};

module.exports = wordCountEngine;

/*
`input:  document = "Practice makes perfect. you'll only`
                    `get Perfect by practice. just practice!"`

`output: [ ["practice", "3"], ["perfect", "2"],`
          `["makes", "1"], ["youll", "1"], ["only", "1"],` 
          `["get", "1"], ["by", "1"], ["just", "1"] ]`
          */
