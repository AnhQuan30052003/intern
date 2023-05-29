export default class SliderDemo {
  constructor () {
    this.$this = $('.mod-slick-slider')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick () {
    this.$this.find('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
      // focusOnSelect: true,
      // adaptiveHeight: true,
      rows: 0,
      
      prevArrow: '<button class="slick-prev button-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
      nextArrow: '<button class="slick-next button-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    })
  }
}
new SliderDemo().init()