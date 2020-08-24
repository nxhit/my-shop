<template>
  <div class="detail">
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <h1 class="page__title">
            Detail
            <span>Easy feel to detail</span>
          </h1>
        </div>
      </div>
      <nav class="breadcrumb">
        <div class="container">
          <li class="breadcrumb-item">
            <a class="header__link" href="/home">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </div>
      </nav>
    </div>
    <section class="detail__content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <img
              src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg"
              width="100%"
              alt=""
            />
          </div>
          <div class="col-12 col-lg-6">
            <h3 class="title">Samsung</h3>
            Giá:<span style="color: red; font-weight:bold"> 20.000.000đ</span>
            <br />
            <br />
            <h5>Thông số kỹ thuật</h5>
            <table>
              <tr>
                <td>Màn hình:</td>
                <td>Super AMOLED Plus, 6.7", Full HD+</td>
              </tr>
              <tr>
                <td>HĐH:</td>
                <td>Android 10</td>
              </tr>
              <tr>
                <td>Camera sau:</td>
                <td>Chính 64 MP & Phụ 12 MP, 12 MP</td>
              </tr>
              <a href="#">xem thêm</a>
            </table>

            <br />
            <button type="button" class="btn btn-danger">Mua ngay</button>
            <br />

            <button type="button" class="btn btn-primary">Mua trả góp</button>
          </div>
        </div>
      </div>
    </section>
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
button
    padding: 10px
    margin-top: 10px
</style>
