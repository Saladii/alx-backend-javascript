const readDatabase = require('../utils');
const path = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const csSwe = await readDatabase(path);
      const cs = csSwe.cs;
      const swe = csSwe.swe;
      const hdr = 'This is the list of our students\n';
      const c = `Number of students in CS: ${cs.length}. List: ${cs.toString().split(',').join(', ')}\n`;
      const s = `Number of students in SWE: ${swe.length}. List: ${swe.toString().split(',').join(', ')}\n`;
      const out = hdr + c + s;
      response.status(200).send(out);
    } catch (ex) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const mjr = request.params;
      if (mjr !== 'CS' && mjr !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        const csSwe = await readDatabase(path);
        const cs = csSwe.cs;
        const swe = csSwe.swe;
        if (mjr === 'CS') {
          const out = `List: ${cs.toString().split(',').join(', ')}`;
          response.status(200).send(out);
        } else {
          const out = `List: ${swe.toString().split(',').join(', ')}`;
          response.status(200).send(out);
        }
      }
    } catch (ex) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
