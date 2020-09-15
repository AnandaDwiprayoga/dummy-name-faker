const all = require("./all");


test('make sure all item in array is string', () => {
   const isAllDataString = all().every(val => {
       return typeof val === 'string';
   })

   expect(isAllDataString).toBe(true);
});


