<template>
  <header id="headerMobile" class="header--mobile">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()"
        >&times;</a
      >
      <div class="overlay__content">
        <div class="logout-main">
          <div class="welcom">Welcome&nbsp;Guest!</div>
        </div>

        <nav class="menu">
          <li>
            <a
              href="#homepage"
              class="menu__item btn"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></a>
          </li>
          <li>
            <a
              href="#shoppages"
              class="menu__item btn collapse"
              data-toggle="collapse"
            ></a>
          </li>
          <div id="shoppages" class="collapse sub-menu">
            <ul class="sub-menu__list">
              <li class="sub-menu__item">
                <a href="#" class="menu__item btn">Shop 1</a>
              </li>
              <li class="sub-menu__item">
                <a href="#" class="menu__item btn">Shop 2</a>
              </li>
            </ul>
          </div>
          <li>
            <a href="#homepage" class="menu__item btn collapse"></a>
          </li>
          <li>
            <a href="#homepage" class="menu__item btn collapse"></a>
          </li>
        </nav>
      </div>
    </div>
    <span v-on:click="openNav">
      <i class="fas fa-bars" style="font-size:27px"></i>
    </span>
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
