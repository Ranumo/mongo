/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');
const newStudentObject = require('./NewTestStudentObject');

// Tee create samalla tavalla kuin mongoose-esimerkissä
const newStudent = Student(newStudentObject);
// hae tähän lisättävä olio. Create palauttaa promisen joka käsittelee
// homman voisi tehdä myös ilman promisea callbackilla
Student.create(newStudent)
  .then((doc) => {
    console.log('Document inserted succesfully' + doc);
  })
  .catch((err) => {
    console.error(err);
  });
