import random from "./random";
import all from "./all";

test("should random name in array", () => {
  const randomName = random();
  const arrayFiltered = all().filter((val) => val === randomName);

  expect(arrayFiltered.length).toEqual(1);
});
