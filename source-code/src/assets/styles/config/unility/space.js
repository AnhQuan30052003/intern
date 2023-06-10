let Space = {
  0: '0px',
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

let p = 0
let max = 1000
for (let i = 0; i <= max; i+=0.5) {
  Space[i] = i * 2 + 'px'
  p = i + 'p'
  Space[p] = i + '%'
}

module.exports = {
  Space
}
