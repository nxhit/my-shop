<template>
  <div class="about">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            About
            <span>Who we are</span>
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
    <section class="about__content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h3 class="title">Bala</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              animi tempore aliquam, sapiente explicabo eveniet architecto nemo
              quasi, cupiditate asperiores quam qui voluptatibus reprehenderit
              praesentium nihil, quis vel similique id!
            </p>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="title">Bale</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              maxime ex ab officiis unde, aut sit velit odit repudiandae
              cupiditate illo. Error corporis alias laborum nulla ipsam culpa
              commodi debitis!
            </p>
          </div>
        </div>
      </div>
      <section class="about__detail">
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="about__info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, fugit doloribus earum explicabo molestias
                    ducimus autem porro laudantium accusantium dicta sint
                    impedit deleniti quod. Enim deleniti voluptatibus aliquid
                    ullam dolores.
                  </p>
                  <div class="about__info-address">
                    <h3>ADDRESS</h3>
                    <p>12 Trịnh Đình Thảo, P. Hoà Thạnh, Q. Tân Phú</p>
                  </div>
                  <div class="about__info-phones">
                    <h3>PHONE</h3>
                    <p>Viettel: +84 12323214</p>
                    <p>Hotline: 23423423</p>
                  </div>
                  <div class="about__info-email">
                    <h3>EMAIL</h3>
                    <p>Support@info.com</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="about__images">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/fir-api-f6968.appspot.com/o/abouts-detail.jpg?alt=media&token=438b906d-48e0-4f5b-a8d7-77c69ffa5c2d"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about__profile">
        <div class="container-fluid">
          <div class="container">
            <div class="media-main">
              <div class="row">
                <div class="col-12 col-md-6 media">
                  <div class="media-left">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fir-api-f6968.appspot.com/o/user-profile.png?alt=media&token=0fa5fdb2-eb44-4014-ba0c-dbf9594317d7"
                      alt="profile"
                      class="rounded-circle"
                      style="width:100px"
                    />
                  </div>
                  <div class="media-body">
                    <h3 class="title">
                      A
                      <small>Sales</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam possimus itaque aspernatur laudantium cumque amet
                      ab earum dignissimos exercitationem delectus debitis
                      maxime ipsum tempora, reiciendis ipsa quam tenetur laborum
                      sapiente.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 media">
                  <div class="media-left">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fir-api-f6968.appspot.com/o/user-profile.png?alt=media&token=0fa5fdb2-eb44-4014-ba0c-dbf9594317d7"
                      alt="profile"
                      class="rounded-circle"
                      style="width:100px"
                    />
                  </div>
                  <div class="media-body">
                    <h3 class="title">
                      B
                      <small>Sales</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias placeat possimus consectetur debitis iste maxime
                      repellat inventore libero, nam adipisci magni, ut sapiente
                      quisquam error culpa rem suscipit. Non, voluptatum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style lang="sass" scoped>
section
  margin-top: 70px
.about
  margin: 0
  font-family: "Poppins-Regular", sans-serif
  font-size: 0.875rem
  font-weight: 400
  line-height: 1.5
  color: #000
  &__content
    h3
      color: #131313
      font-family: "Poppins-Bold", sans-serif
      font-size: 1.2rem
      font-weight: bold
      p
        margin-top: 0
        margin-bottom: 1rem
    &__detail
      padding-top: 100px
      padding-bottom: 100px
      background-color: #f5f5f5
    &__profile

      .media
        padding: 30px 0
        &-body
          margin-left: 20px
          small
            font-size: 80%
            font-weight: bold
            color: #7488a1

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
</style>
