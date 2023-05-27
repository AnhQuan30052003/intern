export default class ThreeRow {
  constructor () {
    this.$this = $('mod-three-row')
  }
  init() {
    this.showHidden();
  }
  showHidden() {
    $(document).ready(function() {
      $('.nav').click(function() {
        if ($('.content').is(':hidden')) {
          $('.content').slideDown();
          $('.plus').attr('src', '../../assets/images/sub.svg');
        }
        else {
          $('.content').slideUp();
          $('.plus').attr('src', '../../assets/images/plus.svg');
        }
      });
    });
  }
}
new ThreeRow().init()

console.log('Run file ThreeRow.js');