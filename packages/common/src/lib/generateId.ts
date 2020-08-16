function* generateId() {
  let iterationCount = 0;

  for (let i = 0; i < 2000; i += 1) {
      iterationCount++;
      yield i;
  }

  return iterationCount;
}

export const generateID = generateId()