const Index = {
  '100': 100,
  '200': 200,
  'a-1': '-1',
  'a-2': '-2',
  '9999': 9999,
  'auto': 'auto'
}

let max = 100;
for (let i = 0; i <= max; i++) {
  Index[i] = i;
}

module.exports = {
  Index
}
