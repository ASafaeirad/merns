/**
 * Get doc generator and count input to create N fake document
 * @param {number | number[]} countInput - Fake doc count or range
 * @param {function} generator - Doc Generator Function
 * @param {object} options - Contains includeCounter that pass index as param to generator function
 */
export const fakeInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + max;

export const fakeNTimes = async (countInput = 0, generator, { includeCounter } = {}) => {
  let count = countInput;

  if (Array.isArray(countInput)) {
    count = fakeInteger(count[0], count[1]);
  }

  const doc = new Array(count).fill(generator);

  if (includeCounter) {
    return Promise.all(doc.map((generate, index) => generate(index)));
  }

  return Promise.all(doc.map(generate => generate()));
};
