const obj = {};

Object.defineProperty(obj, 'id', {
    value: 42
});

console.log(obj);
// => { }

console.log(obj.id);
// => 42

Object.defineProperty(obj, 'name', {
    value: 'Arfat',
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(obj.name);
// => 'Arfat'

obj.name = 'Arfat Salman'

console.log(obj.name);
// => 'Arfat' 
// (instead of 'Arfat Salman')

Object.defineProperty(obj, 'lastName', {
    value: 'Salman',
    enumerable: false,
});

console.log(Object.keys(obj));
// => [ 'name' ]

delete obj.id;

console.log(obj.id);
// => 42

Object.defineProperties(obj, {
    property1: {
        value: 42,
        writable: true
    },
    property2: {}
});

console.log(obj.property1)
// => 42