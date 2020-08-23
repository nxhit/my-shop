<template>
  <div class="notfound">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            ERROR
            <span>Ooops !!! Sorry</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Error</li>
        </div>
      </nav>
    </div>
    <section class="notfound__content">
      <div class="container">
        <div class="empty-page">
          <h2>Error 404...</h2>
          <h3>Page Not Found</h3>
          <p>
            We looked everywhere for this page. Are you sure the website URL is
            correct? Go to the main page or select suitable category.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.notfound
    background-image: url('../assets/background/404.jpg')
    width: 100%
.container-fluid
    padding: 0
.page-header
    background-image: url('../assets/background/page-header.png')
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

.empty-page
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: flex-start
    align-content: center
    align-items: center
    text-align: center
    padding: 33px 0 92px
h2
    font-family: "Poppins-Bold", sans-serif
    font-size: 36px
    line-height: 43px
    padding: 0
    margin: 0
    font-weight: bold
h3
    font-family: "Poppins-Bold", sans-serif
    font-size: 64px
    line-height: 77px
    font-weight: bold
p
    margin-top: 0
    margin-bottom: 1rem
</style>
