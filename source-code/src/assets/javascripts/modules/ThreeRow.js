export default class ThreeRow {
  constructor () {
    this.$this = $('three-row')
  }
  init() {
    if (this.$this.length) {
      this.Show();
    }
  }
  Show() {
    $(document).ready(function() {
      $('nav-icon').click(function() {
        $(this).hide();
      });
    });
  }
}
new ThreeRow().init()