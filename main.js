//task 20.5
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(object1, object2) {
  const keys1 = Object.getOwnPropertyNames(object1);
  const keys2 = Object.getOwnPropertyNames(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    const typeObjects =
      typeof object1[key] === 'object' && typeof object2[key] === 'object';

    if (
      (!typeObjects && object1[key] !== object2[key]) ||
      (typeObjects &&
        keys1.length !== keys2.length &&
        object1[key] !== object2[key])
    ) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));