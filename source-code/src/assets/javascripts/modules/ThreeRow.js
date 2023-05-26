export default class ThreeRow {
  constructor () {
    this.$this = $('mod-three-row')
  }
  init() {
    if (this.$this.length) {
      this.Show();
    }
  }
  Show() {
    $(document).ready(function() {
      $('.nav').click(function() {
        $('.nav').hide();
        alert('Da duoc click');
      });
    });
  }
}
new ThreeRow().init()

console.log('Run file ThreeRow.js');