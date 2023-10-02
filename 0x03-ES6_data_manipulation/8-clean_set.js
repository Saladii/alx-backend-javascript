export default function cleanSet(set, startString) {
  let text = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const x of set) {
      if (x && x.startsWith(startString)) {
        arr.push(x.slice(startString.length));
      }
    }
    text = arr.join('-');
  }
  return text;
}
