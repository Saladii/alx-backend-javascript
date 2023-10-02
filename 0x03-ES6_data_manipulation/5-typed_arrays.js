export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const v = new DataView(buf);
  v.setInt8(position, value);

  return v;
}
