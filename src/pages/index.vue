<template>
  <div class="home">
    <div class="main">
      <!-- Revolution Layer Slider -->
      <div class="carousel">
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
          <div v-for="b in banners" :key="b.id">
            <img :src="b.url" alt="" width="100%" />
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
            <div class="item-card" v-for="item in items" :key="item.id">
              <b-card>
                <img :src="item.url" alt="" class="image" />
                <div class="middle">
                  <b-button
                    class="detail"
                    data-toggle="modal"
                    data-target="quickViewModal"
                    @click="modaldetail()"
                    ><i class="fa fa-eye" aria-hidden="true"></i
                  ></b-button>
                </div>
                <b-card-text>
                  <!-- <router-link
                    :to="{ name: '{{item.name}}', params: { id: 1 } }"
                    >{{ item.name }}</router-link
                  > -->
                  <h4>
                    <a href="/detail/1">{{ item.name }}</a>
                  </h4>
                  <p>${{ item.price }}</p>
                </b-card-text>

                <b-button @click="addtoCart()" href="#" variant="primary"
                  >Add to cart</b-button
                >
              </b-card>
            </div>
          </carousel>
          <div
            class="modal"
            id="quickViewModal"
            tabindex="-1"
            role="dialog"
            style="display:none"
            aria-hidden="true"
          >
            <div class="modal__content" role="document">
              <div class="modal-body">
                <div class="container">
                  <!-- tt chi tiết modal -->
                </div>
              </div>
            </div>
          </div>
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
            <button class="btn btn--danger" @click="muangay()">
              Mua ngay
            </button>
          </div>
        </div>
      </section>

      <section class="product__content">
        <div class="container">
          <div class="row">
            <div class="col-4" v-for="item in items" :key="item.id">
              <b-card>
                <img :src="item.url" alt="" class="image" />
                <div class="middle">
                  <b-button
                    class="detail"
                    data-toggle="modal"
                    data-target="quickViewModal"
                    @click="modaldetail()"
                    ><i class="fa fa-eye" aria-hidden="true"></i
                  ></b-button>
                </div>
                <b-card-text>
                  <!-- <router-link
                    :to="{ name: '{{item.name}}', params: { id: 1 } }"
                    >{{ item.name }}</router-link
                  > -->
                  <p>${{ item.price }}</p>
                </b-card-text>

                <b-button @click="addtoCart()" href="#" variant="primary"
                  >Add to cart</b-button
                >
              </b-card>
            </div>
          </div>
          <paginate
            :page-count="20"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate>
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
  props: ["id"],
  methods: {
    addtoCart() {
      this.$toasted.show("Thêm thành công");
    },
    muangay() {
      alert("Sản phẩm đã cháy hàng");
    },
    modaldetail() {},
    clickCallback(pageNum) {
      console.log(pageNum);
    }
  },

  name: "home",
  data() {
    return {
      banners: [
        {
          id: 1,
          url:
            "https://cdn.cellphones.com.vn/media/ltsoft/promotion/tab_s6_1.8.2020.jpg"
        },
        {
          id: 2,
          url:
            "https://cdn.cellphones.com.vn/media/ltsoft/promotion/tab_s6_1.8.2020.jpg"
        },
        {
          id: 3,
          url:
            "https://cdn.cellphones.com.vn/media/ltsoft/promotion/tab_s6_1.8.2020.jpg"
        }
      ],
      items: [
        {
          id: 1,
          name: "Samsung",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg",
          price: 2000
        },
        {
          id: 2,
          name: "iPhone",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png",
          price: 3000
        },
        {
          id: 3,
          name: "Xiaomi",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-rog-phone3-1-recovered-recovered.jpg",
          price: 1000
        },
        {
          id: 4,
          name: "Vsmart",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/v/s/vsmart-active-3_2_.png",
          price: 950
        },
        {
          id: 5,
          name: "Oppo",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_-_reno4_-_blue_-_jpeg.jpg",
          price: 950
        },
        {
          id: 6,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
        },
        {
          id: 7,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
        },
        {
          id: 8,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
        },
        {
          id: 9,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
        },
        {
          id: 10,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
        },
        {
          id: 11,
          name: "Huawei",
          url:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p40_pro_0000_layer_2.jpg",
          price: 950
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
    height: auto
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
.item-card
  text-align: center
  padding: 2rem
  h4
    font-size: 28px
    color: #131313
  p
    color: #fe4536
    font-weight: bold
  .detail
    background-color: #f5f5f5
    color: #131313
    border: none
    border-radius: 50%
    &:hover
      background-color: #6c757d
      color: #fff

  &:hover
    .middle
      opacity: 1
  .middle
    transition: .5s ease
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
  .image
    opacity: 1
    display: block
    width: 100%
    height: auto
    transition: .5s ease
    backface-visibility: hidden

.product__content
  text-align: center
  padding: 2rem
  h4
    font-size: 28px
    color: #131313
  p
    color: #fe4536
    font-weight: bold
  .detail
    background-color: #f5f5f5
    color: #131313
    border: none
    border-radius: 50%
    &:hover
      background-color: #6c757d
      color: #fff

  &:hover
    .middle
      opacity: 1
  .middle
    transition: .5s ease
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
  .image
    opacity: 1
    display: block
    width: 100%
    height: auto
    transition: .5s ease
    backface-visibility: hidden
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
