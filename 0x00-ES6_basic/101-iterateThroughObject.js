export default function iterateThroughObject(reportWithIterator) {
  let itemstr = '';
  let i = 0;

  for (const item of reportWithIterator) {
    if (Array.from(reportWithIterator).length - 1 === i) {
      itemstr += item;
    } else {
      itemstr += item;
      itemstr += ' | ';
    }
    i += 1;
  }
  return itemstr;
}
