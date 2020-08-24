<template>
  <div class="home">
    <div class="main">
      <!-- Revolution Layer Slider -->
      <div class="carousel">
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/tab_s6_1.8.2020.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/K_ni_m_10_n_m_Xiaomibr_u_i_gi_m_gi_.png"
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iphone_8_plus_14.8.2020.pngv1.png"
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://cdn.tgdd.vn/2020/08/banner/800-300-800x300-30.png"
              alt=""
              width="100%"
            />
          </div>
        </VueSlickCarousel>
      </div>

      <section class="banner flash-sale">
        <div class="container-fluid">
          <div class="container flash-sale__content" align="center">
            <h3 class="title">OUR CATEGORIES</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <carousel>
            <div>
              <article>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg"
                  alt=""
                />
                <div class="title">
                  <h3 align="center">Samsung</h3>
                </div>
              </article>
            </div>
            <div>
              <article>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png"
                  alt=""
                />
                <div class="title">
                  <h3 align="center">Iphone</h3>
                </div>
              </article>
            </div>
            <div>
              <article>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-rog-phone3-1-recovered-recovered.jpg"
                  alt=""
                />
                <div class="title">
                  <h3 align="center">Xiaomi</h3>
                </div>
              </article>
            </div>
            <div>
              <article>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_-_reno4_-_blue_-_jpeg.jpg"
                  alt=""
                />
                <div class="title">
                  <h3 align="center">Oppo</h3>
                </div>
              </article>
            </div>
            <div>
              <article>
                <img
                  src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg"
                  alt=""
                />
                <div class="title">
                  <h3 align="center">Samsung</h3>
                </div>
              </article>
            </div>
          </carousel>
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
      <section class="product__content">
        <div class="container">
          <div class="row"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  methods: {},

  name: "home",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "samsung",
          url: "",
          price: 3000
        },
        {
          id: 1,
          name: "iphone",
          url: "",
          price: 3000
        }
      ]
    };
  },
  components: {
    VueSlickCarousel,
    carousel
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
.flash-sale
  margin-top: 100px
  margin-bottom: 100px
  h3
    font-family: "Poppins-Bold", sans-serif
    color: #fe4536
    margin-bottom: 0
    line-height: 1.5
    font-weight: bold
.owl-nav
  display: none
// Kết thúc flash sale

article
  background-color: #f5f5f5
  padding: 0 1rem
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

// Bắt đầu flash sale
// Kết thúc slide top
// Kết thúc slide top

// Bắt đầu flash sale
// Kết thúc slide top


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px)
    .carousel
        width: 100%
        height: auto
</style>
