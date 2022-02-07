require('./dbconnection');
const Student = require('./models/Student');

// määrittele uusi arvosanaolio (newgrade) tässä

/*
argumenttit: kohde (studentcode), toimenpiteet, (callback jos käytämme)
Student.updateOne()

Toimenpiteet: { $push: {grades: newgrade}, $inc: { studypoints: 5}}
*/
