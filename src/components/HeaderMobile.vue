<template>
  <header id="headerMobile" class="header--mobile">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()"
        >&times;</a
      >
      <div class="overlay__content">
        <nav class="menu">
          <div class="logout-main">
            <div class="welcom">Welcome&nbsp;Guest!</div>
          </div>
          <div>
            <div id="accordion">
              <div class="card">
                <div class="card-header">
                  <a href="/home">Home</a>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a
                    class="card-link"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    <span>Shop</span> <i class="fas fa-angle-down"></i>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  data-parent="#accordion"
                >
                  <div class="card-body"><a href="#">Shop 1</a></div>
                  <div class="card-body"><a href="#">Shop 2</a></div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <a
                    class="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    Pages <i class="fas fa-angle-down"></i>
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    <a href="/about">About</a>
                  </div>
                  <div class="card-body">
                    <a href="/contact">Contact</a>
                  </div>
                  <div class="card-body">
                    <a href="/notfound">404</a>
                  </div>
                  <div class="card-body">
                    <a href="/login">Login</a>
                  </div>
                  <div class="card-body">
                    <a href="/signup">Signup</a>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <a
                    class="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseThree"
                  >
                    Cart <i class="fas fa-angle-down"></i>
                  </a>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <a href="/cart">View cart</a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a href="/login">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <span v-on:click="openNav">
      <i class="fas fa-bars" style="font-size:27px"></i>
    </span>
    <div class="logo">
      <router-link class="logo__link" to="/home">
        <span class="logo__text">NXH</span>SHOP
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "50%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
};
</script>

<style lang="sass" scoped>
.header
    &--mobile
        padding: 0 1rem 1rem 1rem
.overlay
    height: 100%
    width: 50%
    position: fixed
    z-index: 1
    top: 0
    left: 0
    color: #131313
    background-color: #fff
    overflow-x: hidden
    transition: 0.5s

    &__content
        position: relative
        top: 25px
        width: 100%
        margin-left: 1rem

    .closebtn
        text-decoration: none
        position: absolute
        top: -40px
        right: -8px
        font-size: 60px
    .menu
        &__item
            color: #131313
            &:hover
                color: #fe4536

    .btn
        padding: 15px 28px
        border-radius: 3px
        font-family: "Poppins-Bold", sans-serif
        font-size: 0.75rem
        line-height: 13px
        transition: 0.3s
        text-transform: uppercase
        border: none
a
  color: #131313
  font-weight: bold
  &:hover
    text-decoration: none
    color: #fe4536
.card
  background-color: #f5f5f5

@media screen and (max-height: 450px)
    .overlay
        a
            font-size: 20px
        .closebtn
            font-size: 40px
            top: 15px
            right: 35px
@media screen and (max-width: 767px)
    .header--mobile
        dislay: block
@media screen and (min-width: 767px)
    .header--mobile
        display: none
</style>
