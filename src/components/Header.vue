<template>
  <header id="headerOne" class="header header--desktop">
    <div class="container">
      <div class="header__inner">
        <div class="header--left logo">
          <router-link class="logo__link" to="/home">
            <span class="logo__text">NXH</span>SHOP
          </router-link>
        </div>
        <div class="header--center">
          <nav class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-item">
                <a class="header__link" href="/home">Home</a>
              </li>
              <li class="header__menu-item">
                <a class="header__link" href="#"
                  >Shop<i class="fa fa-angle-down" aria-hidden="true"></i
                ></a>
                <ul class="sub sub__shop">
                  <li><a href="/*">shop 1</a></li>
                  <li><a href="/about">Shop 2</a></li>
                </ul>
              </li>
              <li class="header__menu-item">
                <a class="header__link" href="/product">Products</a>
              </li>
              <li class="header__menu-item">
                <a class="header__link" href="#"
                  >Pages<i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul class="sub sub__pages">
                  <li><a href="/*">404 Page</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">contact</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/signup">SignUp</a></li>
                  <li><a href="/detail/1">Detail</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header--right">
          <nav class="header__menu right-options">
            <ul class="header__menu-list">
              <li class="header__menu-item">
                <button class="btn btn__profile">
                  <i class="fa fa-user"></i>
                </button>
                <ul class="sub sub__profile">
                  <li>
                    <a href="#">Tài khoản</a>
                  </li>
                  <li>
                    <a href="#">Yêu thích</a>
                  </li>
                  <li>
                    <a href="/login">Đăng xuất</a>
                  </li>
                </ul>
              </li>
              <li class="header__menu-item">
                <button class="btn btn__shopping-cart">
                  <i class="fa fa-shopping-bag"></i>
                </button>
                <ul class="sub sub__shopping-cart">
                  <li>
                    <div class="item-thumb">
                      <div class="image">
                        <img
                          class="img-fluid"
                          src="https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg"
                          alt="Product Image"
                        />
                      </div>
                    </div>
                    <div class="item-detail">
                      <h3>iPhone 11 128GB</h3>
                      <div class="item-s">
                        1 x 22.990.000₫
                        <i class="fa fa-trash"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span class="item-summary">
                      Total&nbsp;:&nbsp;
                      <span>$145.00</span>
                    </span>
                  </li>
                  <li>
                    <a class="btn btn-secondary btn-link btn-block" href="/cart"
                      >View Cart</a
                    >
                    <a class="btn btn-danger btn-block" href="/checkout"
                      >Checkout</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
$primary-color: #ffc87a
$text-color: #1a2b5f

@mixin flex($align: flex-start, $justify: flex-start, $wrap: nowrap)
    display: flex
    align-items: $align
    justify-content: $justify
    flex-wrap: $wrap

.row
    display: flex
    flex-wrap: wrap
.logo
    color: $text-color
    font-size: 2.5rem
    font-weight: 600
    &__text
        color: $primary-color
    &__link:hover
        text-decoration: none

.header
    background-color: #fff
    padding: 0 1rem
    border-top: 1px solid #dee2e6
    border-bottom: 1px solid #dee2e6
    width: 100%
    &__inner
        @include flex(center, center)
    &__menu
        display: flex
        padding-left: 0
        margin-bottom: 0
        &-list
            list-style: none
            margin-bottom: 0
            align-items: center
            @include flex(center)
        &-item
            margin-right: 1rem
            padding: 1px 2px
            position: relative
            z-index: 1
            .btn
                background-color: #fff
                &:hover
                    color: $primary-color
                    border-color: $text-color
                &__profile
                    font-size: large
                &__profile, &__shopping-cart
                    height: 40px
                    width: 40px
                    border-radius: 50%
                    border: 1px solid #dee2e6

            .sub
                display: none
                position: absolute
                background-color: #fff
                border: 1px solid #dee2e6
                padding: 1rem 1rem
                right: -2.5rem
                &__profile
                    width: 110px
                &__shopping-cart
                    width: 250px
                &__pages
                    width: 130px

                li
                    list-style: none
                    margin-left: 0
                    a
                        color: #333
                        &:hover
                            transition: 0.5s
                            color: $primary-color
                            text-decoration: none
                .btn-danger
                    background-color: red
                    color: #fff
                .btn-secondary
                    background-color: grey
                    color: #fff
            &:hover .sub
                display: block

    .right-options
        display: flex

    &__link
        font-size: 1.2rem
        color: $text-color
        display: block
        transition: color .25s linear, border .25s linear
        &:hover
            color: $primary-color
            text-decoration: none
        i
          display: inline-block
    &--left,
    &--center,
    &--right
        display: inline-block
        vertical-align: top
    &--left
        width: 25%
    &--center
        width: 55%
    &--right
        width: 20%

/* Small devices (landscape phones, 576px and up) */
// @media (max-width: 576px)
/* Medium devices (tablets, 768px and up) */
@media (max-width: 768px)
    .header
      display: none

/* Large devices (desktops, 992px and up) */
// @media (min-width: 992px)


// /* Extra large devices (large desktops, 1200px and up) */
// @media (min-width: 1200px)
</style>
