/* 
Composition: 
Person = sleep
Teacher = sleep + teach
Student = sleep + code
Tutor = code + sleep + teach
*/

import Person from './Person.js';
import Student from './Student.js';
import Teacher, { teachers } from './Teacher.js';
import Tutor from './Tutor.js';

/* By instanciating Person, the object got a __proto__ prop which signifies that 
the object inherit from the Person. */
const me = new Person('Ilya', 'Stepanov');

console.log(Object.getPrototypeOf(me)); //expected output: object containing constuctor and __proto__

//The sleep method is added to Person.prototype and thus to me.__proto__
Person.prototype.sleep = function () {
    console.log(`${this.firstName} is now sleeping`);
};

Student.prototype = new Person(); //now reynaldo can access Person's methods
Student.prototype.constructor = Student; //bringing back the Student's constructor

//Finally you can define Student's related methods
Student.prototype.code = function () {
    console.log(`${this.firstName} is now coding`);
};

const reynaldo = new Student('3', 'programming', 'Reynaldo', 'Quintero');

//reynaldo can now sleep and code
console.log(reynaldo.sleep());
console.log(reynaldo.code());


//The Teacher
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
    console.log(`${this.firstName} is teaching ${this.subject}`);
}

const mAmblard = Object.assign(new Teacher('maths', 'Frederic', 'Amblard'), teachers.amblard);
console.log(mAmblard);

//Here mPetit is not a teacher, so he doesn't have Teacher.prototype as a proto, 
//so he can't teach :/
const mPetit = Object.create(teachers.petit);
console.log(mPetit.nationality); //Expected output: French


//Finally create a student-teacher (tutor)

//Paul is basically a Student, a Teacher and a Person
//When creating a Student, we also have a Person.
//Same for Teacher

Tutor.prototype = Object.assign(Teacher.prototype, Student.prototype);
Tutor.prototype.constructor = Tutor;

const paul = new Tutor('Amblard', 'Paul', 'BI', '5', 'Strategy');

//Now paul can do all of the actions of the 3 entities
console.log(paul);
console.log(paul.code(), paul.sleep(), paul.teach());

/* We can really see the advantage of proto inheritance compared to the classical
one. Tutot ends up being a combination of a Teacher and a Student, which would have
been tricky and uneasy to reprensent in classical OOP. */
