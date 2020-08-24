<template>
  <div class="signup">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Signup
            <span>Introduce Yourself</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Signup</li>
        </div>
      </nav>
    </div>
    <section class="account__content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>New Customer</h2>
            <div class="registration-process">
              <form class="form">
                <div class="form__group row mb-3">
                  <div class="form__input col-12">
                    <input
                      type="text"
                      name="fullname"
                      class="form-control"
                      id="validationCustom01"
                      placeholder="Enter Your Fullname"
                      required=""
                    />
                  </div>
                </div>
                <div class="form__group row mb-3">
                  <div class="form__input col-12">
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      id="inlineFormInputGroup00"
                      placeholder="Enter Your Email or Username"
                      required=""
                    />
                  </div>
                </div>
                <div class="form__group row mb-3">
                  <div class="form__input col-12">
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="inlineFormInputGroup11"
                      placeholder="Enter Your Password"
                      required=""
                    />
                  </div>
                </div>
                <div class="form__group row mb-3">
                  <div class="form__input col-12">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup2"
                      placeholder="Enter Your Mobile Number"
                      required=""
                    />
                  </div>
                </div>
                <div class="form__group">
                  <button class="btn btn__create-account">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>Already Registered?</h2>
            <div class="registration-process">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae viverra nibh. Etiam a arcu sed mi suscipit rutrum. Sed a
                lorem pellentesque, dignissim risus in, feugiat ipsum. Nulla
                laoreet faucibus velit eget iaculis. Vivamus porttitor diam
                lectus, eu rhoncus lacus dignissim et.
              </p>
              <form class="form">
                <div class="form__group">
                  <a class="header__link btn btn__login" href="/login">Login</a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-sm-12">
            <div class="registration-socials" align="center">
              <div class="col-12 col-sm-12">
                <button type="button" class="btn btn__google">
                  <i class="fab fa-google-plus-g"></i>&nbsp;Login with Google
                </button>
                <button type="button" class="btn btn__facebook">
                  <i class="fab fa-facebook-f"></i>&nbsp;Login with Facebook
                </button>
              </div>
            </div>
            <p>
              *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae viverra nibh. Etiam a arcu sed mi suscipit rutrum. Sed a
              lorem pellentesque, dignissim risus in, feugiat ipsum. Nulla
              laoreet faucibus velit eget iaculis. Vivamus porttitor diam
              lectus, eu rhoncus lacus dignissim et.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.signup
    margin: 0
    font-family: "Poppins-Regular", sans-serif
    font-size: 0.875rem
    font-weight: 400
    line-height: 1.5
    color: #000
    text-align: left
.container-fluid
    padding: 0
.page-header
    background-image: url('/src/assets/background/page-header.png')
    padding: 45px 0 45px 0px
    h1
        font-weight: bold
        font-size: 600
        margin-bottom: 0

        span
            display: block
            color: #fe4536
            font-size: 1rem
.breadcrumb
    border-bottom: 1px soild
    border-bottom-color: #2c3e50
    list-style: none
    li
        display: inline
    a
        color: #131313
    a:hover
        text-decoration: none
        color: #fe4536


.account__content
    padding-top: 100px
    .registration-process
        background-color: #f5f5f5
        padding: 30px 15px
        margin-bottom: 1rem
h2
    font-weight: bold
.btn
    padding: 15px 28px
    border-radius: 3px
    font-family: "Poppins-Bold", sans-serif
    font-size: 0.75rem
    line-height: 13px
    text-transform: uppercase
    border: none
    font-weight: bold
    margin: 0 1rem 1rem
    &__create-account
        color: #fff
        background-color: #131313
        border-color: #131313
        &:hover
            background-color: #fe4536
    &__login
        color: #fff
        background-color: #fe4536
        border: #fe4536
        &:hover
            background-color: #131313
    &__google
        background-color: #6c757d
        color: #fff
        border-color: #6c757d
        &:hover
            background-color: #e74c3c
    &__facebook
        background-color: #6c757d
        color: #fff
        border-color: #6c757d
        &:hover
            background-color: #2980b9
</style>
