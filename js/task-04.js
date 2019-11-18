'use strict';

class StringBuilder {
    constructor(value) {
        this.value = value;
    }
    get Value() {
        return this.value
    }

    append(str) {
        this.value += str;
    }

    prepend(str) {
        this.value = str += this.value;
    }

    pad(str) {
        this.append(str);
        this.prepend(str);
    }

}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.Value); // '.^'
builder.prepend('^');
console.log(builder.Value); // '^.^'
builder.pad('=');
console.log(builder.Value); // '=^.^='