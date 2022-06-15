
const obj = {
    get name() {
        return this._name.toUpperCase();
    },
    set name(value) {
        this._name = value;
    },
    get id() {
        return this._id.toString(2); // Returns binary of a number
    },
    set id(value) {
        this._id = value;
    }
};

//Dans les accessors, on pourrait avoir this.nimporteQuoi, ça marcherait tout aussi bien.
//On utilise le _ simplement par convention, pour savoir à quoi on accède.

obj.name = 'Arfat';
console.log(obj.name);
// => 'ARFAT'

obj.id = 5;
console.log(obj.id);
  // => '101