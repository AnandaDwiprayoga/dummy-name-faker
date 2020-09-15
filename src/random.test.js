const random = require('./random');
const all = require('./data/names.json');

test('should random name in array', () => {
    const randomName = random();
    const arrayFiltered = all.filter(val => val === randomName)

    expect(arrayFiltered.length).toEqual(1);
})
