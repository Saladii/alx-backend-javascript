export default function getStudentIdsSum(students) {
  return students.map((std) => std.id).reduce(
    (prev, curr) => prev + curr,
  );
}
