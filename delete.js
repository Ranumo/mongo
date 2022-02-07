/* eslint-disable new-cap */
require('./dbconnection');
const Student = require('./models/Student');
// deleteOne argumentit: olio joka kertoo kohteen ja callback
Student.deleteOne({ studentcode: 'a1234' }, (err, obj) => {
  if (err) {
    return console.error(err);
  }
  console.log('Your will has been done, my master. Object has been deleted');
});
