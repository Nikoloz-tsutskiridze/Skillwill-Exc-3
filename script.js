//exercise 1

function processNumbers(numbers) {
  if (numbers.length % 2 === 0 || numbers.length <= 2) {
    throw new Error(
      "The list must contain an odd number of elements greater than 2."
    );
  }

  const sumFirstTwo = numbers[0] + numbers[1];

  let productOfRest = 1;
  for (let i = 2; i < numbers.length; i++) {
    productOfRest *= numbers[i];
  }

  return [sumFirstTwo, productOfRest];
}

//exercise 2
function getCity(user) {
  const { banks } = user || {};
  const { address } = banks?.[2] || {};
  const { city } = address || {};
  return city;
}

const user = {
  banks: [
    { address: { city: "City1" } },
    { address: { city: "City2" } },
    { address: { city: "City3" } },
  ],
};

console.log(getCity(user));

const userWithoutCity = {
  banks: [{ address: { city: "City1" } }, { address: { city: "City2" } }],
};

console.log(getCity(userWithoutCity));

//exercise 3

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = { ...obj };
  for (const key in copy) {
    copy[key] = deepCopy(copy[key]);
  }

  return copy;
}
