const mongoose = require('mongoose');
const GradeSchema = require('./Grade');

const StudentSchema = new mongoose.Schema({
  studentcode: {
    type: String,
    unique: true,
    required: true,
    match: /^[a-z]{l}[0-9]{4}$/,
  },
  name: { type: String, required: true }, //max: 80, esimerkissä
  email: { type: String, required: true },
  studypoints: { type: Number, required: false, min: 0, max: 300 },
  grades: { type: [GradeSchema], required: true },
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
