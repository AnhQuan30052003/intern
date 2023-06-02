export default class Testimonials {
  constructor () {
    this.$this = $('.mod-testimonials')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick () {
    this.$this.find('.slider').slick({
      slidesToShow: 3,
      dots: true,
      arrows: true,
      rows: 0,

      centerMode: true,
      focusOnSelect: true,
      
      dotsClass: 'button-dots',
      prevArrow: '<button class="button-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
      nextArrow: '<button class="button-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        }
      ]
    })
  }
}
new Testimonials().init()