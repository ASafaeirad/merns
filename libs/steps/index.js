const havePrecision = value => value.toString().indexOf('.') > -1;

function steps(initial = 0, step = 1, lastValue = 1) {
  let arr = [];

  if (step === 0 || typeof step !== 'number') {
    throw new Error(`[steps] Step is invalid: resived ${step}`);
  }

  let precision = 0;

  if (havePrecision(step)) {
    precision = (step.toString()).split('.')[1].length;
  }

  for (let value = initial, i = 0; value <= lastValue; i++) {
    arr[i] = value;
    value = Number((value + step).toFixed(precision));
  }

  if (arr[arr.length - 1] !== lastValue) {
    throw new Error(`[steps] Can't reach end with ${step} step`);
  }

  return arr;
}

module.exports = steps;
