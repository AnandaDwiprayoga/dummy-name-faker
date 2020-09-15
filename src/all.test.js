const all = require('./data/names.json');


test('should matching result', () => {
   const isAllDataString = all.every(val => {
       return typeof val === 'string';
   })

   expect(isAllDataString).toBe(true);
});
