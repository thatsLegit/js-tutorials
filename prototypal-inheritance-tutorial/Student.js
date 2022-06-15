import Person from './Person.js';

export function Student(id, study, firstName, lastName) {
    Person.call(this, firstName, lastName);

    this.id = id;
    this.study = study;
};

export default Student;