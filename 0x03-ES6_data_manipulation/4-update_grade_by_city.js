export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades)) {
    return [];
  }

  if (!Array.isArray(students)) {
    return [];
  }

  const mp = students.filter((std) => std.location === city)
    .map((std) => {
      const [grades] = newGrades.filter((g) => g.studentId === std.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...std, grade };
    });

  return mp;
}
