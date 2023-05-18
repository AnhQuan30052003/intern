let max = 101
let p = 0
let Space = {
  '0p5': '1px',
  '1p5': '3px',
  '2p5': '5px',
  '3p5': '7px',
  '4p5': '9px',
  '50vw': '50vw',
  '100vw': '100vw',
  '50vh': '50vh',
  '100vh': '100vh'
}

for (let i = 0; i < max; i++) {
  Space[i] = i * 2 + 'px'
  p = i + 'p'
  Space[p] = i + '%'
}
// console.log(Space)

module.exports = {
  Space
}
