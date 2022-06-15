import Person from './Person.js';

function Teacher(subject, firstName, lastName) {
    Person.call(this, firstName, lastName)

    this.subject = subject;
};

export const teachers = {
    amblard: {
        nationality: 'french',
        calculate() {
            console.log(`${this.name} is calculating`)
        }
    },
    petit: {
        nationality: 'french',
        read() {
            console.log(`${this.name} is reading`)
        }
    }
};

export default Teacher;