import Teacher from './Teacher.js';
import Student from './Student.js';

function Tutor(lastName, firstName, subject, id, study) {
    Teacher.call(this, subject, firstName, lastName);
    Student.call(this, id, study, firstName, lastName);
};

export default Tutor;