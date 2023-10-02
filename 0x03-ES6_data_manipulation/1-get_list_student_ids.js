export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const newArr = students.map((std) => std.id);
  return newArr;
}
