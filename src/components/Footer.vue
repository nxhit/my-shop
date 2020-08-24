<template>
  <div class="footer">
    <!-- footer -->
    <footer class="footer-three">
      <div class="container footer--bottom">
        <!-- footer left -->
        <div class="footer--left">
          <router-link class="footer__link logo" to="/home">
            <span class="logo__text">NXH</span>SHOP
          </router-link>
          <p class="footer__links">
            <a class="footer__link" href="/home">Home</a> ·
            <a class="footer__link" href="about">About</a> ·
            <a class="footer__link" href="/contact">Contact</a> ·
            <a class="footer__link" href="#">Shop</a>
          </p>
        </div>
        <!-- footer center -->
        <div class="footer--center">
          <div class="footer__address">
            <i class="fa fa-map-marker"></i>
            <p>
              <span>47 Đường A, Phường Phú Thạnh</span> Quận Tân Phú,TP Hồ Chí
              Minh
            </p>
          </div>
          <div class="footer__phone">
            <i class="fa fa-phone"></i>
            <p>
              <a href="tel:+84 342 429 342">+84 342 429 342</a>
            </p>
          </div>
          <div class="footer__mail">
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:nguyenxuanhoangit@gmail.com"
                >nguyenxuanhoangit@gmail.com</a
              >
            </p>
          </div>
        </div>
        <!-- footer right -->
        <div class="footer--right">
          <p class="footer__about">
            <span>About the Shop</span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            alias quo, accusamus ea nostrum sint, doloremque quos repellat dicta
            laudantium soluta. Laboriosam, officia reiciendis. Obcaecati ducimus
            blanditiis quis? Repellat, eligendi.
          </p>
          <div class="footer--icons">
            <a href="http://facebook.com/nxhit">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="http://twitter.com/xhoangit">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="http://instagram.com/nxhit">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="http://github.com/nxhit">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="container-fluid footer__copyright-main">
        <div class="footer__copyright-content">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12">
                <div class="footer__info">Copyright &copy; 2020 by nxhit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
$primary-color: #ffc87a
$text-color: #1a2b5f

@mixin flex($align: flex-start, $justify: flex-start, $wrap: nowrap)
    display: flex
    align-items: $align
    justify-content: $justify
    flex-wrap: $wrap

.footer
    background-color: #fff
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12)
    box-sizing: border-box
    width: 100%
    text-align: left
    font: bold 16px sans-serif
    padding: 0
    margin-top: 80px
    bottom: 0

    a:hover
        text-decoration: none
    &-three
        background-color: #3E3E3E
        margin: 60px 0 0 0

    .container
        width: 100%
        padding-right: 15px
        padding-left: 15px
        margin-right: auto
        margin-left: auto
        bottom: 0
    &--bottom
        padding-top: 60px
        padding-bottom: 60px

    &__copyright-main
        border-top: 1px solid #dee2e6
        padding: 0.8rem
        line-height: 1.8
        background-color: #fff
    &__info
        font-size: 0.75rem
        color: #000
        text-align: center
    .container-fluid
        width: 100%
        padding-left: 1rem
        padding-right: 1rem
        margin-left: auto
        margin-right: auto


    &--left,
    &--center,
    &--right
        display: inline-block
        vertical-align: top

    &--left
        width: 40%
        .logo
            color: #fff
            font-size: 2.5rem
            font-weight: 600
            margin: 0
            &__text
                color: $primary-color
    &--center
        a:hover
            color: $primary-color
    &__links
        color: #fff
        margin: 20px 0 12px
        padding: 0

        //định dạng phần tử trong thẻ a
        a
            display: inline-block
            line-height: 1.8
            text-decoration: none
            color: inherit
            -webkit-transition: all 0.5s ease
            -moz-transition: all 0.5s ease
            -o-transition: all 0.5s ease
            -ms-transition: all 0.5s ease
            transition: all 0.5s ease

        //hiệu ứng khi rê chuột vào thẻ a
        a:hover
            color: $primary-color
            -webkit-transform: rotate(360deg)
            -moz-transform: rotate(360deg)
            -o-transform: rotate(360deg)
            -ms-transform: rotate(360deg)
            transform: rotate(360deg)


    &__nick-name
        color: #fff
        font-size: 14px
        font-weight: normal
        margin: 0


    &--center
        width: 40%
        i
            background-color: #33383b
            color: #fff
            font-size: 25px
            width: 38px
            height: 38px
            border-radius: 50%
            text-align: center
            line-height: 42px
            margin: 10px 15px
            vertical-align: middle

        i.fa-envelope
            font-size: 17px
            line-height: 38px

        p
            display: inline-block
            color: #fff
            vertical-align: middle
            margin: 0

            span
                display: block
                font-weight: normal
                font-size: 14px
                line-height: 2
                color: #fff
            a
                color: #fff


    &--right
        width: 20%


    &__about
        line-height: 20px
        color: #92999f
        font-size: 13px
        font-weight: normal
        margin: 0

        span
            display: block
            color: #ffffff
            font-size: 14px
            font-weight: bold
            margin-bottom: 20px


    &--icons
        margin-top: 25px
        a
            display: inline-block
            width: 35px
            height: 35px
            cursor: pointer
            background-color: #33383b
            border-radius: 2px
            font-size: 20px
            color: #ffffff
            text-align: center
            line-height: 35px
            margin-right: 3px
            margin-bottom: 5px
            -webkit-transition: all 0.5s ease
            -moz-transition: all 0.5s ease
            -o-transition: all 0.5s ease
            -ms-transition: all 0.5s ease
            transition: all 0.5s ease

        a:hover
            -webkit-transform: rotate(360deg)
            -moz-transform: rotate(360deg)
            -o-transform: rotate(360deg)
            -ms-transform: rotate(360deg)
            transform: rotate(360deg)




@media (max-width: 880px)
    .footer
        font: bold 14px sans-serif

        &--left,
        &--center,
        &--right
            display: block
            width: 100%
            margin-bottom: 40px
            text-align: center

        &--center i
            margin-left: 0
</style>
