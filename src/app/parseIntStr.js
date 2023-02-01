export default function parseIntStr(str, radix) {
  return str.split(', ').map((n) => parseInt(n, radix));
}
