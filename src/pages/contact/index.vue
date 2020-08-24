<template>
  <div class="contact">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Contact
            <span>Easy feel to contact us</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </div>
      </nav>
    </div>
    <section class="contact__content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12">
            <div class="row">
              <div class="col-12 col-lg-6">
                <h2 class="title mb-1">Contact Information</h2>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  placeat nisi mollitia facere tempore aliquid vitae et nostrum!
                  Esse necessitatibus cupiditate, voluptatum aliquam cumque
                  possimus doloremque alias veritatis nisi ratione!
                </p>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="contact-info">
                      <h3>The Office</h3>

                      <ul class="contact__list">
                        <li>
                          <i class="fas fa-map-marker"></i>&nbsp; abc, xyz ....
                        </li>
                        <li>
                          <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
                          <a href="tel:#"> +84 1234567</a>
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>&nbsp;
                          <a href="mailto:#"> info@.....</a>
                        </li>
                      </ul>
                      <!-- End .contact-list -->
                    </div>
                    <!-- End .contact-info -->
                  </div>
                  <!-- End .col-sm-7 -->

                  <div class="col-sm-6">
                    <div class="contact-info">
                      <h3>The Office</h3>

                      <ul class="contact__list">
                        <li>
                          <i class="fas fa-clock"></i> &nbsp; Monday-Saturday<br />
                          11am-7pm ET
                        </li>
                        <li>
                          <i class="fas fa-calendar-week"></i> &nbsp; Sunday
                          <br />
                          11am-6pm ET
                        </li>
                      </ul>
                      <!-- End .contact-list -->
                    </div>
                    <!-- End .contact-info -->
                  </div>
                  <!-- End .col-sm-5 -->
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-start">
                  <form class="form">
                    <label class="form__label">Name</label>
                    <div class="form__input">
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustomUsername0"
                        placeholder="Enter Your Name"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <label class="form__label">Email</label>
                    <div class="form__input">
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustomUsername1"
                        placeholder="Enter Email here.."
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <label class="form__label">Phone</label>
                    <div class="form__input">
                      <input
                        type="text"
                        class="form-control textbox"
                        id="validationCustomUsername2"
                        placeholder="Enter Your Phone"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <label class="form__label">Message</label>
                    <textarea
                      name="message"
                      placeholder="write..."
                      rows="5"
                      cols="56"
                      style="margin-top: 0px; margin-bottom: 30px; height: 143px;"
                    ></textarea>

                    <button type="submit" class="btn btn__submit">
                      SUBMIT <i class="fas fa-location-arrow"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.contact
    margin: 0
    font-family: "Poppins-Regular", sans-serif
    font-size: 0.875rem
    font-weight: 400
    line-height: 1.5
    color: #000
    &__list
        max-width: 270px
        list-style: none
        padding-left: 0
        margin: 0
        i
            font-size: large
            padding-right: 5px
            color: #fe4536
    li
        display: flex
        margin-bottom: 20px
    a
        color: #131313
.container-fluid
    padding: 0
.page-header
    background-image: url('https://firebasestorage.googleapis.com/v0/b/fir-api-f6968.appspot.com/o/page-header.png?alt=media&token=d0a554f6-fc2a-43fb-a390-e36cb2eaba81')
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
.form
    padding: 0

    &__label
        font-family: "Poppins-Bold", sans-serif
        font-size: 0.875rem
        margin-top: 30px
        margin-bottom: 10px
        font-weight: bold
    &__input
        .form-control
            height: calc(2rem + 0.5rem)
    input
        outline: none
        box-shadow: none
        border: 1px solid transparent
        background-color: transparent
        border-bottom: 2px solid #dee2e6
        background-color: white
    textarea
        width: 100%
        padding: 0px 15px 0px 15px
        outline: none
        margin-bottom: 30px
        border: 1px solid transparent
        background-color: transparent
        border-bottom: 2px solid #dee2e6
        overflow-x: hidden
.btn
    padding: 15px 25px
    border-radius: 3px
    font-family: "Poppins-Bold", sans-serif
    font-size: 0.75rem
    line-height: 13px
    text-transform: uppercase
    border: none
    font-weight: bold
    margin: 10px
    &__submit
        background-color: #fe4536
        color: #fff
        border-color: #fe4536
        &:hover
            background-color: #131313
</style>
