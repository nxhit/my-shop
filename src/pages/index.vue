<template>
  <div class="home">
    <div class="main">
      <!-- Revolution Layer Slider -->
      <div class="carousel">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="1/3"
            img-src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/K_ni_m_10_n_m_Xiaomibr_u_i_gi_m_gi_.png"
          >
          </b-carousel-slide>
          <b-carousel-slide
            caption="2/3"
            img-src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iphone_8_plus_14.8.2020.pngv1.png"
          >
          </b-carousel-slide>
          <b-carousel-slide
            caption="3/3"
            img-src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/tab_s6_1.8.2020.jpg"
          >
          </b-carousel-slide>
        </b-carousel>
      </div>

      <section class="banner flash-sale__content">
        <div class="container-fluid">
          <app-carousel></app-carousel>
        </div>
      </section>

      <section class="banner special-offers__content">
        <div class="banner__parallax">
          <div class="banner__parallax-text">
            <h3 class="sub-title">
              Special offers
            </h3>
            <h2>
              Blackberry
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Dolores autem, aut accusamus error corporis ad vero expedita
              necessitatibus nihil. <br />
              Atque maiores vero velit impedit odio quia aliquam quos officiis
              quod.
            </p>
            <button class="btn btn--danger">
              Mua ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},

  name: "home",
  data() {
    return {
      slide1: [
        {
          id: 1,
          url: "../assets/slide/1.jpg",
          caption: "bala"
        },
        {
          id: 2,
          url: "../assets/slide/1.jpg",
          caption: "bala"
        },
        {
          id: 3,
          url: "../assets/slide/1.jpg",
          caption: "bala"
        }
      ]
    };
  }
};
</script>

<style lang="sass">

.main
    height: 2000px
    margin-right: auto
    margin-left: auto
section
    padding-top: 1rem
    padding-bottom: 1rem
// bắt đầu slide top

// Kết thúc slide top

// Bắt đầu flash sale

// Kết thúc flash sale


.banner
    // Bắt đầu special-offers
    &__parallax
        /* The image used */
        background-image: url("../assets/background/special-offers.jpg")

        /* Set a specific height */
        min-height: 500px

        /* Create the parallax scrolling effect */
        background-attachment: fixed
        background-position: center
        background-repeat: no-repeat
        background-size: cover

        display: flex
        justify-content: center
        align-items: center

        &-text
            padding: 30px
            text-align: center
            h3
                font-family: "Poppins-Bold", sans-serif
                color: #fe4536
                margin-bottom: 0
                line-height: 1.5
                font-weight: bold
                white-space: normal
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
            h2
                font-size: 3rem
                font-family: "Poppins-Bold", sans-serif
                color: #fff
                margin: 0
                line-height: 1.5
                white-space: normal
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
            p
                color: #fff
                line-height: 1.5
                white-space: normal
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 3
                -webkit-box-orient: vertical
            .btn
                padding: 15px 28px
                border-radius: 3px
                font-family: "Poppins-Bold", sans-serif
                font-size: 0.75rem
                line-height: 13px
                font-weight: bold
                text-transform: uppercase
                border: none
                &--danger
                    background-color: #fe4536
                    border-color: #fe4536
                    color: #fff
                    &:hover
                        background-color: #131313
                        border-color: #131313
                        transition: 0.5s
// Kết thúc special-offers

// Bắt đầu flash sale
// Kết thúc slide top

// Bắt đầu flash sale
// Kết thúc slide top

// Bắt đầu flash sale
// Kết thúc slide top


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px)
    .carousel
        width: 100%
        height: auto
</style>
