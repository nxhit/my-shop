<template>
  <div class="detail">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Product
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
    <section class="product__content"></section>
  </div>
</template>

<style lang="sass" scoped>
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
