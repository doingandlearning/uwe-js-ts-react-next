const noop = () => {};

function getAddress() {
  return {
    city: "Brighton",
    county: "Sussex",
    postcode: "BN1",
    coords: {
      lat: 50.8225,
      long: 0.1372,
    },
  };
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6];
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]];
}

test("can be used to pull apart objects", () => {
  // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
  // const address = getAddress();
  // const city = address.city;
  // const county = address.county;
  // const postcode = address.postcode;;
  const { city, county, postcode } = getAddress();

  expect(city).toBe("Brighton");
  expect(county).toBe("Sussex");
  expect(postcode).toBe("BN1");
});

test("sets missing values to undefined", () => {
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  const { address } = getAddress();
  expect(address).toBeUndefined();
});

test("can alias destructured variables", () => {
  // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to ci, co, z, respectively
  const { city: ci, county: co, postcode: p } = getAddress();
  expect(ci).toBe("Brighton");
  expect(co).toBe("Sussex");
  expect(p).toBe("BN1");
  expect(() => noop(city)).toThrow();
  expect(() => noop(county)).toThrow();
  expect(() => noop(postcode)).toThrow();
});

test("can destructure nested variables", () => {
  // Using destructuring, call `getAddress()` and create `lat` and `long` variables.
  const {
    coords: { lat, long },
  } = getAddress();
  expect(lat).toBe(50.8225);
  expect(long).toBe(0.1372);
  expect(() => noop(coords)).toThrow();
});

test("can be used to pull apart arrays", () => {
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  const [one, two] = getNumbers();
  expect(one).toBe(1);
  expect(two).toBe(2);
});

test("can skip indexes in arrays", () => {
  // Call getNumbers and pull the first value out as `one` and the third as `three`
  const [one, , three] = getNumbers();
  expect(one).toBe(1);
  expect(three).toBe(3);
  expect(() => noop(two)).toThrow();
});

test("can reach nested arrays", () => {
  // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `six`.
  const [one, , [three, , [, six]]] = getNestedNumbers();
  expect(one).toBe(1);
  expect(three).toBe(3);
  expect(six).toBe(6);
});
